import { Component,
         OnInit } from '@angular/core';
import { CurrencyServiceService } from './currency-service.service';

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

  constructor(private currencyService: CurrencyServiceService) {}

  ngOnInit() {
    this.getCurrencies();
    this.getRate(this.c1, this.c2);
    this.getChart(this.c1, this.c2);
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
}
