import { Component,
         OnInit } from '@angular/core';
import { CurrencyServiceService } from './currency-service.service';
import { MatSnackBar } from '@angular/material';
import idb from 'idb';
// import Cleave = require('cleave.js');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ CurrencyServiceService ]
})
export class AppComponent implements
      OnInit {

  c1 = 'NGN';
  c2 = 'USD';
  n1 = 1;
  n2;
  rate;
  currencies = [];
  chart;
  db;

  constructor(private currencyService: CurrencyServiceService,
              public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getCurrencies();
    this.getRate(this.c1, this.c2);
    this.getChart(this.c1, this.c2);

    // this is where the offline journey begins
    this.registerServiceWorker();

    this.db = this.openDatabase();

    // const cleave = new Cleave('.cleave', {
    //   numeral: true
    // });
  }

  onSelect() {
    this.getRate(this.c1, this.c2);
    this.getChart(this.c1, this.c2);
  }

  onInputOne() {
    this.n2 = parseFloat((this.rate * Number(String(this.n1).split(',').join(''))).toFixed(3));
  }

  onInputTwo() {
    this.n1 = parseFloat((Number(String(this.n2).split(',').join('')) / this.rate).toFixed(3));
  }

  getCurrencies(): void {
    this.currencyService.fetchCurrencies()
        .subscribe(
          response => {
            // tslint:disable-next-line:prefer-const
            for (const item of Object.keys(response['results'])) {
              this.currencies.push(response['results'][item]);
            }
          }
        );
  }

  getRate(c1, c2) {
    this.currencyService.convertCurrency(c1, c2)
        .subscribe(
          response => {
            this.rate = parseFloat(Object.entries(response)[0][1].toFixed(3));
            this.n2 = this.n1 * this.rate;

            // store in db
            this.db.then( (db) => {
              if (!db) { return; }
              const tx = db.transaction('exchange-rates', 'readwrite');
              const store = tx.objectStore('exchange-rates');
              const idx = `${c1}_${c2}`;
              const data = {};
              data['id'] = idx;
              data['exchange-rate'] = response[idx];
              data['time'] = new Date().toLocaleString();
              store.put(data);
            });
          }
        );
  }

  getChart(c1, c2) {
    this.chart = this.currencyService.fetchChart(c1, c2);
  }

  registerServiceWorker() {
    if (!navigator.serviceWorker) { return; }

    navigator.serviceWorker.register(`${window.location.href}sw.js`).then( (reg) => {
      if (!navigator.serviceWorker.controller) {
        return;
      }

      if (reg.waiting) {
        console.log(`service worker waiting
                      \n\rupdateReady() was called`);
        this.updateReady(reg.waiting);
      }

      if (reg.installing) {
        console.log(`service worker installing
                    \rtrackInstalling() was called`);
        this.trackInstalling(reg.installing);
      }

      reg.addEventListener('updatefound', (event) => this.trackInstalling(reg.installing)
       );
    });

    let refreshing;

    navigator.serviceWorker.addEventListener('controllerchange', function(event) {
      console.log('controller has changed');
      if (refreshing) { return; }
      window.location.reload();
      refreshing = true;
    });

  }

  nowOffline() {
    const snackBarRef = this.snackBar.open(`😐 Unable to connect.
    \nYou can only convert currencies you converted previously`,
                                           'Retry?');
    snackBarRef.afterDismissed().subscribe( (event) => {
      this.onSelect();
    }
    );
  }

  updateReady(worker) {

    const snackBarRef = this.snackBar.open(`🤩Updates Available!`,
                                           'Reload');
    snackBarRef.afterDismissed().subscribe( (event) => {
      console.log(`snackBar was clicked: ${event}`);
      worker.postMessage({action: 'skipWaiting'});
    }
    );
  }

  trackInstalling(worker) {

    console.log('inside trackInstalling');
    worker.addEventListener('statechange', () => {
      if (worker.state == 'installed') {
        this.updateReady(worker);
      }
    });
  }

  openDatabase() {
    // If the browser doesn't support service worker,
    // we don't care about having a database
    if (!navigator.serviceWorker) {
      return Promise.resolve();
    }

    return idb.open('alc-currency-converter', 1, (event) => {
      const store = event.createObjectStore('exchange-rates',
              {keyPath: 'id'});
    });
  }
}
