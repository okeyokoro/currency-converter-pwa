import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {
  protected baseUrl: string;
  protected chartUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://free.currencyconverterapi.com/api/v5';
    this.chartUrl = 'https://www.google.com/finance/chart?q=CURRENCY';
  }

  convertCurrency(c1: string, c2: string) {
    return this.http.get(`${ this.baseUrl }/convert?q=${ c1 }_${ c2 }&compact=ultra`)
                    .pipe(map(response => response));
  }

  fetchCurrencies() {
    return this.http.get(`${ this.baseUrl }/currencies`)
                    .pipe(map(response => response));
  }

  fetchChart(c1: string, c2: string) {
    return `${ this.chartUrl }:${ c1.toUpperCase() }${ c2.toUpperCase() }&chst=vkc&tkr=1&chsc=2&chs=270x94&p=5Y`;
  }

}
