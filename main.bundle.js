webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\r\n  height: 100%;\r\n  display: block;\r\n}\r\n\r\n.content {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.container {\r\n  font-family: Tahoma, sans-serif, Arial, Helvetica;\r\n  width: 100%;\r\n  height: 100%;\r\n  min-height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.top {\r\n  background: #5682A3;\r\n  height: 52px;\r\n  width: 100%;\r\n  color: #fff;\r\n  text-align: start;\r\n  line-height: 50px;\r\n}\r\n\r\n.title {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  line-height: normal;\r\n  font-weight: bold;\r\n  margin-left: 20px;\r\n}\r\n\r\n.chat-link {\r\n  position: relative;\r\n  overflow: hidden;\r\n  background: #fff;\r\n}\r\n\r\n.chat-link:hover {\r\n    background: #eef2f5;\r\n    cursor: pointer;\r\n  }\r\n\r\n.name {\r\n  height: 50%;\r\n  margin-left: 5px;\r\n  font-size: 14px;\r\n  margin-top: 15px;\r\n  width: calc(100% - 80px);\r\n  float: left;\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n.tchat-text {\r\n  height: 50%;\r\n  width: 30%;\r\n  overflow: hidden;\r\n  font-weight: normal;\r\n  float: left;\r\n  margin-left: 5px;\r\n  font-size: 14px;\r\n  margin-top: 4px;\r\n  color: grey;\r\n}\r\n\r\n.circle-avatar {\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin: 10px;\r\n  float: left;\r\n  background-color: green;\r\n}\r\n\r\n.chat-body {\r\n  background-image: url(\"https://raw.githubusercontent.com/telegramdesktop/tdesktop/dev/Telegram/Resources/art/bg_initial.jpg\");\r\n  position: relative;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  height: 100%;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  width: 80%;\r\n}\r\n\r\n.chat-link-list {\r\n  width: 20%;\r\n  overflow-y: scroll;\r\n  background: #fff;\r\n  min-width: 220px;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  height: 100%;\r\n}\r\n\r\n.chat-link-list a {\r\n    width: 100%;\r\n    display: block;\r\n  }\r\n\r\ninput {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: -webkit-fill-available;\r\n  height: 30px;\r\n  border: aliceblue;\r\n  padding: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"top\">\r\n    <div class=\"title\">\r\n      Chat\r\n    </div>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"chat-link-list\">\r\n      <a target=\"_blank\" href=\"/\">\r\n        <div class=\"chat-link\">\r\n          <div class=\"circle-avatar\"></div>\r\n          <div class=\"name\">Client 1</div>\r\n          <div class=\"tchat-text\">Hello</div>\r\n        </div>\r\n      </a>\r\n      <a target=\"_blank\" href=\"/\">\r\n        <div class=\"chat-link\">\r\n          <div class=\"circle-avatar\"></div>\r\n          <div class=\"name\">Client 2</div>\r\n          <div class=\"tchat-text\">Hello</div>\r\n        </div>\r\n      </a>\r\n\r\n      <a target=\"_blank\" href=\"/\">\r\n        <div class=\"chat-link\">\r\n          <div class=\"circle-avatar\"></div>\r\n          <div class=\"name\">Client 3</div>\r\n          <div class=\"tchat-text\">Hello</div>\r\n        </div>\r\n      </a>\r\n      <a target=\"_blank\" href=\"/\">\r\n        <div class=\"chat-link\">\r\n          <div class=\"circle-avatar\"></div>\r\n          <div class=\"name\">Client 4</div>\r\n          <div class=\"tchat-text\">Hello</div>\r\n        </div>\r\n      </a>\r\n      \r\n\r\n    </div>\r\n    <div class=\"chat-body\">\r\n      <div>\r\n        <input type=\"text\" />\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map