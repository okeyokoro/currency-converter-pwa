(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <p class=\"title\"> 🏆 ALC Currency Converter 🏆</p>\n  <p>💲😎💲</p>\n\n  <mat-card class=\"card\">\n    <div class=\"packaging\">\n\n      <div class=\"section\"> \n        <div class=\"wrapper\">\n          <div class=\"row\">\n              1 {{ c1 }} equals {{ rate }} {{ c2 }}\n          </div>\n  \n          <div class=\"row\">\n            \n            <div class=\"inside\">\n              <div class=\"division\">\n                <mat-form-field style=\"width:100px !important\">\n                  <input matInput [(ngModel)]=\"n1\" (keyup)=\"onInputOne()\">\n                </mat-form-field> \n              </div>\n  \n              <div class=\"division\">\n                <mat-form-field>\n                  <mat-select [(value)]=\"c1\" (selectionChange)=\"onSelect()\">\n                    <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.id\">\n                      {{currency.currencyName}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </div>\n                \n          </div>\n  \n          <div class=\"row\">\n            \n            <div class=\"inside\">\n              <div class=\"division\">\n                <mat-form-field style=\"width:100px !important\">\n                  <input matInput [(ngModel)]=\"n2\" (keyup)=\"onInputTwo()\">\n                </mat-form-field> \n              </div>\n  \n              <div class=\"division\">\n                <mat-form-field>\n                    <mat-select [(value)]=\"c2\" (selectionChange)=\"onSelect()\">\n                      <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.id\">\n                        {{currency.currencyName}}\n                      </mat-option>\n                    </mat-select>\n                </mat-form-field>\n              </div>\n            </div>\n                \n          </div>\n        </div>\n      </div>\n\n      <div class=\"section\" style=\"height:initial\">\n        <img src=\"{{chart}}\" alt=\"chart\" class=\"chart\">\n      </div>\n\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 23px; }\n\n.card {\n  width: 285px;\n  margin: 0 auto; }\n\n.packaging {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr 1fr;\n      grid-template-rows: 1fr 1fr; }\n\n.packaging .section {\n    display: flex;\n    transition: all .3s ease; }\n\n.wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr 1fr;\n      grid-template-rows: 1fr 1fr; }\n\n.wrapper .row {\n    display: flex;\n    transition: all .3s ease; }\n\n.inside {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 2fr;\n      grid-template-columns: 1fr 2fr;\n  grid-column-gap: 10px; }\n\n.inside .division {\n    display: flex;\n    transition: all .3s ease; }\n\n.chart {\n  height: 100px;\n  margin-top: 16%; }\n\n@media screen and (min-width: 800px) {\n  .title {\n    font-size: 30px; }\n  .card {\n    width: 700px;\n    height: 250px;\n    margin: 0 auto; }\n  .packaging {\n    -ms-grid-columns: 2fr 1fr;\n        grid-template-columns: 2fr 1fr; }\n  .chart {\n    height: 110px;\n    margin-top: 26%; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _currency_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-service.service */ "./src/app/currency-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(currencyService, snackBar) {
        this.currencyService = currencyService;
        this.snackBar = snackBar;
        this.c1 = 'NGN';
        this.c2 = 'USD';
        this.n1 = 1;
        this.currencies = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCurrencies();
        this.getRate(this.c1, this.c2);
        this.getChart(this.c1, this.c2);
        // this is where the offline journey begins
        this.registerServiceWorker();
    };
    AppComponent.prototype.onSelect = function () {
        this.getRate(this.c1, this.c2);
        this.getChart(this.c1, this.c2);
    };
    AppComponent.prototype.onInputOne = function () {
        this.n2 = parseFloat((this.rate * this.n1).toFixed(3));
    };
    AppComponent.prototype.onInputTwo = function () {
        this.n1 = parseFloat((this.n2 / this.rate).toFixed(3));
    };
    AppComponent.prototype.getCurrencies = function () {
        var _this = this;
        this.currencyService.fetchCurrencies()
            .subscribe(function (response) {
            // tslint:disable-next-line:prefer-const
            for (var _i = 0, _a = Object.keys(response['results']); _i < _a.length; _i++) {
                var item = _a[_i];
                _this.currencies.push(response['results'][item]);
            }
        });
    };
    AppComponent.prototype.getRate = function (c1, c2) {
        var _this = this;
        this.currencyService.convertCurrency(c1, c2)
            .subscribe(function (response) {
            _this.rate = parseFloat(Object.entries(response)[0][1].toFixed(3));
            _this.n2 = _this.n1 * _this.rate;
        });
    };
    AppComponent.prototype.getChart = function (c1, c2) {
        this.chart = this.currencyService.fetchChart(c1, c2);
    };
    AppComponent.prototype.registerServiceWorker = function () {
        var _this = this;
        if (!navigator.serviceWorker) {
            return;
        }
        navigator.serviceWorker.register('/sw.js').then(function (reg) {
            if (!navigator.serviceWorker.controller) {
                return;
            }
            if (reg.waiting) {
                console.log("service worker waiting\n                      \n\rupdateReady() was called");
                _this.updateReady(reg.waiting);
            }
            if (reg.installing) {
                console.log("service worker installing\n                    \rtrackInstalling() was called");
                _this.trackInstalling(reg.installing);
            }
            reg.addEventListener('updatefound', function (event) { return _this.trackInstalling(reg.installing); });
        });
        var refreshing;
        navigator.serviceWorker.addEventListener('controllerchange', function (event) {
            console.log('controller has changed');
            if (refreshing) {
                return;
            }
            window.location.reload();
            refreshing = true;
        });
    };
    AppComponent.prototype.updateReady = function (worker) {
        var snackBarRef = this.snackBar.open("\uD83E\uDD29Updates Available!", 'Reload');
        snackBarRef.afterDismissed().subscribe(function (event) {
            console.log("snackBar was clicked: " + event);
            worker.postMessage({ action: 'skipWaiting' });
        });
    };
    AppComponent.prototype.trackInstalling = function (worker) {
        var _this = this;
        console.log('inside trackInstalling');
        worker.addEventListner('statechange', function () {
            if (worker.state == 'installed') {
                _this.updateReady(worker);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            providers: [_currency_service_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyServiceService"]]
        }),
        __metadata("design:paramtypes", [_currency_service_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyServiceService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { CleaveDirective } from 'angular-cleave';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
                // CleaveDirective
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/currency-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/currency-service.service.ts ***!
  \*********************************************/
/*! exports provided: CurrencyServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyServiceService", function() { return CurrencyServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrencyServiceService = /** @class */ (function () {
    function CurrencyServiceService(http) {
        this.http = http;
        this.baseUrl = 'https://free.currencyconverterapi.com/api/v5';
        this.chartUrl = 'https://www.google.com/finance/chart?q=CURRENCY';
    }
    CurrencyServiceService.prototype.convertCurrency = function (c1, c2) {
        return this.http.get(this.baseUrl + "/convert?q=" + c1 + "_" + c2 + "&compact=ultra")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    CurrencyServiceService.prototype.fetchCurrencies = function () {
        return this.http.get(this.baseUrl + "/currencies")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    CurrencyServiceService.prototype.fetchChart = function (c1, c2) {
        return this.chartUrl + ":" + c1.toUpperCase() + c2.toUpperCase() + "&chst=vkc&tkr=1&chsc=2&chs=270x94&p=5Y";
    };
    CurrencyServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CurrencyServiceService);
    return CurrencyServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cc_stoic\code\udacity-mws\currency-converter\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map