import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {
  protected baseUrl: string;
  protected chartUrl: string;
  protected apiKey: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://free.currconv.com/api/v7';
    this.chartUrl = 'https://www.google.com/finance/chart?q=CURRENCY';
    this.apiKey = 'apiKey=4992f41ba9373eb0e7e6';
  }

  convertCurrency(c1: string, c2: string) {
    return this.http.get(`${ this.baseUrl }/convert?q=${ c1 }_${ c2 }&compact=ultra&${ this.apiKey }`)
                    .pipe(map(response => response));
  }

  fetchCurrencies() {
    return this.http.get(`${ this.baseUrl }/currencies?${ this.apiKey }`)
                    .pipe(map(response => response));
  }

  fetchChart(c1: string, c2: string) {
    return `${ this.chartUrl }:${ c1.toUpperCase() }${ c2.toUpperCase() }&chst=vkc&tkr=1&chsc=2&chs=270x94&p=5Y`;
  }

}
