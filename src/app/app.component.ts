import { Component,
         OnInit } from '@angular/core';
import { CurrencyServiceService } from './currency-service.service';
import { MatSnackBar } from '@angular/material';

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

  constructor(private currencyService: CurrencyServiceService,
              public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getCurrencies();
    this.getRate(this.c1, this.c2);
    this.getChart(this.c1, this.c2);

    // this is where the offline journey begins
    this.registerServiceWorker();
  }

  onSelect() {
    this.getRate(this.c1, this.c2);
    this.getChart(this.c1, this.c2);
  }

  onInputOne() {
    this.n2 = parseFloat((this.rate * this.n1).toFixed(3));
  }

  onInputTwo() {
    this.n1 = parseFloat((this.n2 / this.rate).toFixed(3));
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
          }
        );
  }

  getChart(c1, c2) {
    this.chart = this.currencyService.fetchChart(c1, c2);
  }

  registerServiceWorker() {
    if (!navigator.serviceWorker){ return; }

    navigator.serviceWorker.register('/sw.js').then( (reg) => {
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

  updateReady(worker) {

    const snackBarRef = this.snackBar.open(`🤩Updates Available!`,
                                           'Reload');
    snackBarRef.afterDismissed().subscribe( (event) => {
      console.log(`snackBar was clicked: ${event}`);
      worker.postMessage({action: 'skipWaiting'})
    }
    );
  }

  trackInstalling(worker) {

    console.log('inside trackInstalling');
    worker.addEventListner('statechange', () => {
      if (worker.state == 'installed') {
        this.updateReady(worker);
      }
    });
  }
}
