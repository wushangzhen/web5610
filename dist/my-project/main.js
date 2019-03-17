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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_usr_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/usr/login/login.component */ "./src/app/views/usr/login/login.component.ts");
/* harmony import */ var _views_usr_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/usr/register/register.component */ "./src/app/views/usr/register/register.component.ts");
/* harmony import */ var _views_usr_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/usr/profile/profile.component */ "./src/app/views/usr/profile/profile.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_pages_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/pages/page-list/page-list.component */ "./src/app/views/pages/page-list/page-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_pages_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/pages/page-new/page-new.component */ "./src/app/views/pages/page-new/page-new.component.ts");
/* harmony import */ var _views_pages_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/pages/page-edit/page-edit.component */ "./src/app/views/pages/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");















// const routes: Routes = [];
var routes = [
    { path: '', component: _views_usr_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _views_usr_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _views_usr_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'profile/:uid', component: _views_usr_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'usr/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteListComponent"] },
    { path: 'usr/:uid/website/:wid/page', component: _views_pages_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__["PageListComponent"] },
    { path: 'usr/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteNewComponent"] },
    { path: 'usr/:uid/website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteEditComponent"] },
    { path: 'usr/:uid/website/:wid/page/new', component: _views_pages_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"] },
    { path: 'usr/:uid/website/:wid/page/:pid', component: _views_pages_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"] },
    { path: 'usr/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
    { path: 'usr/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooserComponent"] },
    { path: 'usr/:uid/website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<a routerLink=\"/login\">Login</a>-->\n<!--<a routerLink=\"/register\">Register</a>-->\n<!--<a routerLink=\"/profile\">Profile</a>-->\n<!--<ul appSortable (newIndexes)=\"reorderItems($event)\">-->\n    <!--<li>One</li>-->\n    <!--<li>Two</li>-->\n    <!--<li>Three</li>-->\n    <!--<li>Four</li>-->\n    <!--<li>Five</li>-->\n<!--</ul>-->\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-project';
    }
    AppComponent.prototype.reorderItems = function (indexes) {
        console.log("start: " + indexes.startIndex);
        console.log("stop: " + indexes.endIndex);
        // call widget service function to update widget as per index
        /*this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
          .subscribe(
            (data) => console.log(data)
          );*/
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_usr_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/usr/login/login.component */ "./src/app/views/usr/login/login.component.ts");
/* harmony import */ var _views_usr_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/usr/register/register.component */ "./src/app/views/usr/register/register.component.ts");
/* harmony import */ var _views_usr_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/usr/profile/profile.component */ "./src/app/views/usr/profile/profile.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_pages_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/pages/page-new/page-new.component */ "./src/app/views/pages/page-new/page-new.component.ts");
/* harmony import */ var _views_pages_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/pages/page-edit/page-edit.component */ "./src/app/views/pages/page-edit/page-edit.component.ts");
/* harmony import */ var _views_pages_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/pages/page-list/page-list.component */ "./src/app/views/pages/page-list/page-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sortable.directive */ "./src/app/sortable.directive.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _views_usr_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _views_usr_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _views_usr_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteEditComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteNewComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__["WebsiteListComponent"],
                _views_pages_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_13__["PageNewComponent"],
                _views_pages_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__["PageEditComponent"],
                _views_pages_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_15__["PageListComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__["WidgetChooserComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__["WidgetEditComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_18__["WidgetListComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_19__["WidgetHeaderComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_20__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_21__["WidgetYoutubeComponent"],
                _sortable_directive__WEBPACK_IMPORTED_MODULE_27__["SortableDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_22__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_23__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_24__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_25__["WidgetService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_26__["SharedService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/page.model.client.ts ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(name, websiteId, description) {
        this.name = name;
        this.websiteId = websiteId;
        this.title = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password) {
        // this._id = _id;
        this.username = username;
        this.password = password;
        // this.firstName = username;
        // this.lastName = username;
        // this.email = username + '@gmail.com';
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/website.model.client.ts ***!
  \************************************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(name, developerId, description) {
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(type, pageId, size, text, width, url) {
        if (size === void 0) { size = '1'; }
        if (text === void 0) { text = 'text'; }
        if (width === void 0) { width = '100%'; }
        if (url === void 0) { url = 'url'; }
        this.widgetType = type;
        this.pageId = pageId;
        this.size = size;
        this.url = url;
        this.width = width;
        this.text = text;
        this.name = 'initial';
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var req_url = this.baseUrl + 'api/website/' + websiteId + '/page';
        return this.http.post(req_url, page);
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var req_url = this.baseUrl + 'api/website/' + websiteId + '/page';
        return this.http.get(req_url);
    };
    PageService.prototype.findPageById = function (pageId) {
        // return this.pages.find(function (page) {
        //     return page._id === pageId;
        // });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var req_url = this.baseUrl + 'api/page/' + pageId;
        console.log(req_url);
        return this.http.put(req_url, page);
        // for (const i in this.pages) {
        //     if (this.pages[i]._id === pageId) {
        //         this.pages[i].name = page.name;
        //         this.pages[i].title = page.title;
        //     }
        // }
    };
    PageService.prototype.deleteWebsite = function (pageId) {
        var req_url = this.baseUrl + 'api/page/' + pageId;
        return this.http.delete(req_url);
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        // console.log(this.http.post<User>(this.baseUrl + 'api/user/', user));
        return this.http.post(this.baseUrl + 'api/user/', user);
    };
    UserService.prototype.findUserByCredential = function (username, password) {
        var req_url = this.baseUrl + 'api/user?username=' + username + '&password=' + password;
        return this.http.get(req_url);
    };
    UserService.prototype.findUserById = function (userId) {
        // console.log(userId);
        // return this.users.find(function(user) {
        //     return user._id == userId;
        // });
        var req_url = this.baseUrl + 'api/user/' + userId;
        console.log(req_url);
        return this.http.get(req_url);
        // return this.http.get(this.baseUrl + '/api/user/' + userId)
        //     .map( (res: Response) => { const data = res.json(); return data; } );
    };
    // findUser
    // delete
    UserService.prototype.updateUser = function (user) {
        var req_url = this.baseUrl + 'api/user/' + user._id;
        return this.http.put(req_url, user);
        // return this.http.put(req_url, user).map((response: Response) => {
        //     return response.json();
        // });
        // for (let i = 0; i < this.users.length; i++) {
        //     if (this.users[i]._id === userId) {
        //         this.users[i].firstName = user.firstName;
        //         this.users[i].lastName = user.lastName;
        //         return this.users[i];
        //     }
        // }
    };
    // getLength() {
    //     return this.users.length;
    // }
    UserService.prototype.deleteUserById = function (userId) {
        var req_url = this.baseUrl + 'api/user/' + userId;
        return this.http.delete(req_url);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");





var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var req_url = this.baseUrl + 'api/user/' + userId + '/website';
        return this.http.post(req_url, website);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var req_url = this.baseUrl + 'api/user/' + userId + '/';
        // const resultSet = [];
        // for ( const i in this.websites) {
        //     if (this.websites[i].developerId === userId) {
        //         resultSet.push(this.websites[i]);
        //     }
        // }
        // return resultSet;
    };
    WebsiteService.prototype.findWebsitesByUser2 = function (userId) {
        var req_url = this.baseUrl + 'api/user/' + userId + '/website/';
        return this.http.get(req_url);
    };
    WebsiteService.prototype.findWebsitesById = function (websiteId) {
        // return this.websites.find(function (website) {
        //     return website._id === websiteId;
        // });
    };
    WebsiteService.prototype.updateWebsite = function (userId, website) {
        var req_url = this.baseUrl + 'api/user/' + userId + '/website/' + website._id;
        console.log(req_url);
        return this.http.put(req_url, website);
    };
    WebsiteService.prototype.deleteWebsite = function (userId, websiteId) {
        var req_url = this.baseUrl + 'api/user/' + userId + '/website/' + websiteId;
        return this.http.delete(req_url);
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var WidgetService = /** @class */ (function () {
    // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
    // widgets: Widget[] = [
    //     new Widget('123', 'HEADER', '321', '1', 'London terror attack: Police fired unprecedented number of rounds'),
    //     new Widget('124', 'HEADER', '321', '3', 'Counter terrorism officers patrol near the scene of the attack on London Bridge.' ),
    //     new Widget('125', 'IMAGE', '321', '2', 'text', '100%',
    //         'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg'),
    //     new Widget('127', 'HTML', '321', '2', '<p>blalbla</p>' ),
    //     new Widget('126', 'YOUTUBE', '321', '2', 'text', '100%', 'https://www.youtube.com/embed/APexI9Zb6iE/' ),
    // ];
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.baseUrl + 'api/page/' + pageId + '/widget';
        return this.http.post(url, widget);
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + 'api/widget/' + widgetId;
        return this.http.put(url, widget);
    };
    WidgetService.prototype.findByPageId = function (pageId) {
        var url = this.baseUrl + 'api/page/' + pageId + '/widget';
        return this.http.get(url);
    };
    WidgetService.prototype.findByWidgetId = function (widgetId) {
        var url = this.baseUrl + 'api/widget/' + widgetId;
        return this.http.get(url);
        // .pipe(map(
        // (response: Response) => {
        //     return response.json();
        // }
        // ));
    };
    WidgetService.prototype.findByIdType = function (pageId, type) {
        // const widgetsFiltered = this.findByPageId(pageId);
        // return widgetsFiltered.filter(function (widget) {
        //     return (widget.widgetType == type);
        // });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + 'api/widget/' + widgetId;
        return this.http.delete(url);
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + 'api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '');
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/sortable.directive.ts":
/*!***************************************!*\
  !*** ./src/app/sortable.directive.ts ***!
  \***************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // this will emit an event for the parent component or the directive calling component
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSortable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "./src/app/views/pages/page-edit/page-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/pages/page-edit/page-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3BhZ2UtZWRpdC9wYWdlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/page-edit/page-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/page-edit/page-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"editPage()\" #z=\"ngForm\">\n<nav class=\"navbar navbar-default navbar-fixed-top bg-light p-0\">\n  <div class=\"navbar-text pull-left p-0\">\n    <a routerLink=\"/usr/{{userId}}/website/{{webId}}/page\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"fas fa-chevron-left fontawsome_icon\">\n          </span>\n    </a>\n    <a class=\"navbar-brand cl-text-black cl-text-bold\" routerLink=\"./\">\n      Edit Page\n    </a>\n  </div>\n  <div class=\"navbar-text ml-auto\">\n    <a (click)=\"editPage()\" class=\"cl-icon-padding cl-text-black\">\n          <span class=\"fas fa-check fontawsome_icon\">\n          </span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n    <div class=\"form-group\">\n      <label for=\"pageName\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"pageName\" name=\"pageName\" placeholder=\"Page Name\" ngModel required #pageName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pageTitle\">Title</label>\n      <input type=\"text\" class=\"form-control\" id=\"pageTitle\" placeholder=\"Page Title\" name=\"pageTitle\" ngModel required #pageTitle=\"ngModel\">\n    </div>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deletePage()\">Delete</a>\n</div>\n\n  <nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end p-0\">\n    <div class=\"container-fuild p-0\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link navbar-text ml-auto\">\n        <i class=\"fas fa-user fontawsome_icon\"></i>\n      </a>\n    </div>\n  </nav>\n</form>\n"

/***/ }),

/***/ "./src/app/views/pages/page-edit/page-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/page-edit/page-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");







var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute, router, sharedService) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.pages = [];
    }
    PageEditComponent.prototype.editPage = function () {
        var _this = this;
        if (this.myPageEditForm.value.pageName && this.myPageEditForm.value.pageTitle) {
            this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"](this.myPageEditForm.value.pageName, this.webId, this.myPageEditForm.value.pageTitle);
            this.pageService.updatePage(this.pageId, this.page).subscribe(function (data) {
            });
            this.pageService.findPageByWebsiteId(this.webId).subscribe(function (data) {
                _this.sharedService.pages = data;
            });
        }
        this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page']);
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deleteWebsite(this.pageId).subscribe(function (data) {
        });
        this.pageService.findPageByWebsiteId(this.webId).subscribe(function (data) {
            _this.sharedService.pages = data;
        });
        this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page']);
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            // this.pages = this.pageService.findPageByWebsiteId(this.webId);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('z'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], PageEditComponent.prototype, "myPageEditForm", void 0);
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/pages/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/pages/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_4__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/page-list/page-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/pages/page-list/page-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3BhZ2UtbGlzdC9wYWdlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/page-list/page-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/page-list/page-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top bg-light p-0\">\n  <div class=\"navbar-text pull-left p-0\">\n    <a routerLink=\"/usr/{{userId}}/website/\" class=\"cl-text-black cl-icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\">\n      </span>\n    </a>\n    <a class=\"navbar-brand cl-text-black cl-text-bold\" routerLink=\"./\">\n      Pages\n    </a>\n  </div>\n  <a routerLink=\"/usr/{{userId}}/website/{{webId}}/page/new\" class=\"navbar-text cl-icon-padding cl-text-black ml-auto\">\n        <span class=\"fas fa-plus fontawsome_icon\">\n        </span>\n  </a>\n</nav>\n\n<div class=\"container-fluid cl-container-padding p-0\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\" *ngFor=\"let page of pages\">\n      <a routerLink=\"/usr/{{userId}}/website/{{webId}}/page/{{page._id}}\"><span class=\"fas fa-cog fontawsome_icon float-right\"></span></a>\n      <a routerLink=\"/usr/{{userId}}/website/{{webId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end p-0\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link navbar-text float-right\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/pages/page-list/page-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/page-list/page-list.component.ts ***!
  \**************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");





var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute, sharedService) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            // this.pages = this.pageService.findPageByWebsiteId(this.webId);
        });
        this.pageService.findPageByWebsiteId(this.webId).subscribe(function (data) {
            _this.sharedService.pages = data;
            _this.pages = data;
        });
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/pages/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/pages/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/page-new/page-new.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/pages/page-new/page-new.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3BhZ2UtbmV3L3BhZ2UtbmV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/page-new/page-new.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/page-new/page-new.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"createPage()\" #z=\"ngForm\">\n<nav class=\"navbar navbar-default navbar-fixed-top bg-light p-0\">\n  <div class=\"navbar-text pull-left p-0\">\n    <a routerLink=\"/usr/{{userId}}/website/{{webId}}/page\" class=\"cl-text-black cl-icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\">\n      </span>\n    </a>\n    <a class=\"navbar-brand cl-text-black cl-text-bold\" routerLink=\"./\">\n      New Page\n    </a>\n  </div>\n  <div class=\"navbar-text pull-right\">\n    <a (click)=\"createPage()\" type=\"summit\" class=\"cl-icon-padding cl-text-black\">\n      <span class=\"fas fa-check fontawsome_icon\">\n      </span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n    <div class=\"form-group\">\n      <label for=\"pageName\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"pageName\" placeholder=\"Page Name\" name=\"pageName\" ngModel required #pageName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pageTitle\">Title</label>\n      <input type=\"text\" class=\"form-control\" id=\"pageTitle\" placeholder=\"Page Title\" name=\"pageTitle\" ngModel required #pageTitle=\"ngModel\">\n    </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end p-0\">\n  <div class=\"container-fuild p-0\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link navbar-text ml-auto\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n</form>\n"

/***/ }),

/***/ "./src/app/views/pages/page-new/page-new.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/pages/page-new/page-new.component.ts ***!
  \************************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");







var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute, router, sharedService) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.pages = [];
    }
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        if (this.myPageNewForm.value.pageName && this.myPageNewForm.value.pageTitle) {
            this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"](this.myPageNewForm.value.pageName, this.webId, this.myPageNewForm.value.pageTitle);
            this.pageService.createPage(this.webId, this.page).subscribe(function (data) {
                _this.sharedService.pages = data;
            });
        }
        this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page']);
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('z'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], PageNewComponent.prototype, "myPageNewForm", void 0);
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/pages/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/pages/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_4__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/usr/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/usr/login/login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Vzci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/usr/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/usr/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n<form (ngSubmit) = \"login()\" #f=\"ngForm\">\n    <div class=\"container-fluid\">\n        <h1>Login</h1>\n      <label>Username</label>\n      <input placeholder=\"username\" name=\"username\" type=\"text\" class=\"form-control\"\n               ngModel required #username=\"ngModel\"/>\n\n      <label>Password</label>\n      <input placeholder=\"password\" name=\"password\" type=\"password\" class=\"form-control\"\n               ngModel required #password=\"ngModel\"/>\n\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n            Please enter username!\n      </span>\n      <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n        <button class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</button>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/views/usr/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/usr/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password !';
        this.username = 'hello world!';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.myLoginForm.value.username;
        this.password = this.myLoginForm.value.password;
        alert(this.username + ' WelCome!');
        // const user: User = this.userService.findUserByCredential(this.username, this.password);
        // if (user) {
        //   this.router.navigate(['profile/', user._id]);
        // }
        this.userService.findUserByCredential(this.username, this.password)
            .subscribe(function (user) {
            if (user) {
                _this.sharedService.user = user;
                _this.router.navigate(['/profile', user._id]);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // this.users = UserService.getAllUser();
        console.log('login page!' + this.username);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], LoginComponent.prototype, "myLoginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/usr/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/usr/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/usr/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/usr/profile/profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Vzci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/usr/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/usr/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updateUser()\" #x=\"ngForm\">\n    <nav class=\"navbar navbar-default navbar-fixed-top bg-primary p-0\">\n        <div class=\"container-fluid\">\n            <a class=\"navbar-brand cl-text-white\" routerLink=\"./\">Profile</a>\n            <a (click)=\"updateUser()\" type=\"summit\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n                <span class=\"fas fa-check fontawsome_icon cl-text-white\"></span>\n            </a>\n        </div>\n    </nav>\n\n\n    <div class=\"container\">\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input [ngModel]=\"user.username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"{{user.username}}\"\n                   ngModel required #username=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"email\">Email address</label>\n            <input [ngModel]=\"user.email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"{{user.email}}\"\n                   ngModel required #email=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"firstName\">First Name</label>\n            <input [ngModel]=\"user.firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"{{user.firstName}}\"\n                   ngModel required #firstName=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"lastName\">Last Name</label>\n            <input [ngModel]=\"user.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"{{user.lastName}}\"\n                   ngModel required #lastName=\"ngModel\">\n        </div>\n\n        <a class=\"btn btn-primary btn-block\"\n           routerLink=\"/usr/{{user._id}}/website\">Websites</a>\n        <a class=\"btn btn-danger btn-block\"\n           routerLink=\"/login\">Logout</a>\n    </div>\n\n    <nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end p-0\">\n        <div class=\"container-fuild p-0\">\n            <a routerLink=\"/profile/{{user._id}}\" class=\"navbar-link navbar-text ml-auto\">\n                <i class=\"fas fa-user fontawsome_icon\"></i>\n            </a>\n        </div>\n    </nav>\n</form>\n"

/***/ }),

/***/ "./src/app/views/usr/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/usr/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, route, sharedService) {
        this.userService = userService;
        this.route = route;
        this.sharedService = sharedService;
        // this.user = new User('123', 'alice', 'qq');
        // this.user = new User('123', 'alice', 'alice');
    }
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.user.email = this.myProfileForm.value.email;
        this.user.firstName = this.myProfileForm.value.firstName;
        this.user.lastName = this.myProfileForm.value.lastName;
        this.route.params.subscribe(function (params) {
            return _this.userService.updateUser(_this.user).subscribe(function (user) {
                _this.sharedService.user = user;
                _this.user = user;
            });
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        // this.route.params.subscribe(params => {
        // this.user = this.userService.findUserById(params['uid']);
        // this.userService.findUserById(this.user._id)
        //     .subscribe(data => {
        //       console.log('in login comp...');
        //       console.log(data);
        //       this.user = data;
        //     });
        // this.route.params.subscribe(params => {
        //   console.log(params['uid']);
        //   // this.user = this.userService.findUserById(params['uid']);
        //   return this.userService.findUserById(params['uid']).subscribe(
        //       (user: User) => {
        //         console.log("xxxxxxxxx");
        //         this.user = user;
        //       }
        //   );
        // });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('x'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ProfileComponent.prototype, "myProfileForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/usr/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/usr/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/usr/register/register.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/usr/register/register.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Vzci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/usr/register/register.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/usr/register/register.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"register()\" #f=\"ngForm\">\n  <div class=\"container-fluid\">\n    <h1>Register</h1>\n    <input type=\"text\"\n           name=\"username\"\n           class=\"form-control\"\n           placeholder=\"username\"\n           ngModel required #username=\"ngModel\"/>\n    <input type=\"password\"\n           name=\"password\"\n           class=\"form-control\"\n           placeholder=\"password\"\n           ngModel required #password=\"ngModel\"/>\n    <input type=\"password\"\n           name=\"verifyPassword\"\n           class=\"form-control\"\n           placeholder=\"verify password\"/>\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n    <a class=\"btn btn-danger btn-block\"\n       routerLink=\"/login\">Cancel</a>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/views/usr/register/register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/usr/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router, shareService) {
        this.userService = userService;
        this.router = router;
        this.shareService = shareService;
        this.username = 'hello world!';
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.myRegisterForm.value.username;
        this.password = this.myRegisterForm.value.password;
        alert(this.username);
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__["User"](this.username, this.password);
        // TODO the id type is not right
        // const user: User = this.userService.findUserByCredential(this.username, this.password);
        this.userService.findUserByCredential(this.username, this.password)
            .subscribe(function (user) {
            if (!user) {
                _this.userService.createUser(_this.user).subscribe(function (data) {
                    _this.user = data;
                    _this.shareService.user = data;
                    _this.router.navigate(['profile/', _this.user._id]);
                });
            }
        });
        // TODO deal with if (user) situation
    };
    RegisterComponent.prototype.ngOnInit = function () {
        // this.users = UserService.getAllUser();
        console.log('register page!' + this.username);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "myRegisterForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/usr/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/usr/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"editWebsite()\" #z=\"ngForm\">\n<div class=\"container-fluid m-0 p-0\">\n  <div class=\"row p-0\">\n    <div class=\"col-4 p-0\">\n      <nav class=\"navbar navbar-fixed-top bg-primary justify-content-start mb-3 p-0\">\n        <a routerLink=\"/usr/{{userId}}/website\" class=\"nav-item nav-link cl-text-white\">\n          <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n        </a>\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"/usr/{{userId}}/website\">\n          Websites\n        </a>\n        <a routerLink=\"/usr/{{userId}}/website/new\" class=\"navbar-link navbar-text ml-auto cl-text-white cl-icon-padding\">\n          <span class=\"navblack fas fa-plus\"></span>\n        </a>\n      </nav>\n    </div>\n    <div class=\"col-8 p-0\">\n      <nav class=\"navbar navbar-fixed-top bg-primary p-0\">\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"./\">\n          Edit Websites\n        </a>\n        <a (click)=\"editWebsite()\" type=\"summit\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"fas fa-check fontawsome_icon\"></span>\n        </a>\n      </nav>\n    </div>\n  </div>\n</div>\n\n<div class=\"contain-fluid\">\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <div class=\"container\">\n        <ul class=\"list-group cl-list-group-borderless\">\n          <li class=\"list-group-item cl-list-item-borderless\" *ngFor=\"let website of websites\">\n            <a routerLink=\"/usr/{{userId}}/website/{{website._id}}\"><span class=\"fas fa-cog fontawsome_icon float-right\"></span></a>\n            <a routerLink=\"/usr/{{userId}}/website/{{website._id}}/page\">{{website.description}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-8 p-0\">\n      <!--<form>-->\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"websiteName\" name=\"websiteName\" placeholder=\"Blogger\"\n                 ngModel required #websiteName=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDescription\">Website Description</label>\n          <textarea id=\"websiteDescription\" class=\"form-control\" rows=\"5\" name = \"websiteDescription\"\n                    placeholder=\"Blog is a blog-publishing service.\"\n                    ngModel required #websiteDescription=\"ngModel\"></textarea>\n        </div>\n        <a class=\"btn btn-primary  btn-block\" routerLink=\"/usr/{{userId}}/website\">Cancel</a>\n        <button class=\"btn btn-danger  btn-block\" (click)=\"deleteWebsite()\">Delete</button>\n      <!--</form>-->\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end p-0\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link navbar-text float-right\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n</form>\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");







var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router, sharedService) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.websites = [];
    }
    WebsiteEditComponent.prototype.editWebsite = function () {
        var _this = this;
        if (this.myWebsiteEditForm.value.websiteName && this.myWebsiteEditForm.value.websiteDescription) {
            this.website =
                new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"](this.myWebsiteEditForm.value.websiteName, this.userId, this.myWebsiteEditForm.value.websiteDescription);
            this.website._id = this.webId;
            this.websiteService.updateWebsite(this.userId, this.website).subscribe(function (data) {
                _this.sharedService.websites = data;
            });
        }
        this.router.navigate(['/usr/' + this.userId + '/website']);
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.userId, this.webId).subscribe(function (data) {
            _this.sharedService.websites = data;
        });
        this.router.navigate(['/usr/' + this.userId + '/website']);
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.websites = this.sharedService.websites;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            // this.websites = this.websiteService.findWebsitesByUser2(params['uid']);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('z'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WebsiteEditComponent.prototype, "myWebsiteEditForm", void 0);
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top justify-content-start bg-primary p-0\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"nav-item nav-link cl-text-white\">\n    <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n  </a>\n  <a class=\"float-left cl-text-white nav-item nav-link navbar-brand p-0\" routerLink=\"#\">\n    Websites\n  </a>\n  <a routerLink=\"/usr/{{userId}}/website/new\" class=\"navbar-link navbar-text cl-text-white cl-icon-padding ml-auto\">\n    <i class=\"fas fa-plus fontawsome_icon\"></i>\n  </a>\n</nav>\n\n<div class=\"container\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\" *ngFor=\"let website of websites\">\n      <a routerLink=\"/usr/{{userId}}/website/{{website._id}}\"><span class=\"fas fa-cog fontawsome_icon float-right\"></span></a>\n      <a routerLink=\"/usr/{{userId}}/website/{{website._id}}/page\">{{website.description}}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end p-0\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link navbar-text cl-icon-padding ml-auto\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");





var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute, sharedService) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user._id;
        this.websiteService.findWebsitesByUser2(this.sharedService.user._id)
            .subscribe(function (data) {
            _this.websites = data;
            _this.sharedService.websites = data;
        });
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"createWebsite()\" #z=\"ngForm\">\n  <div class=\"container-fluid m-0\">\n    <div class=\"row\">\n      <div class=\"col-4 p-0\">\n        <nav class=\"navbar navbar-fixed-top bg-primary justify-content-start mb-3 p-0\">\n          <a routerLink=\"/usr/{{userId}}/website\" class=\"nav-item nav-link cl-text-white\">\n            <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n          </a>\n          <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"/usr/{{userId}}/website\">\n            Websites\n          </a>\n          <a routerLink=\"/usr/{{userId}}/website\" class=\"navbar-link navbar-text ml-auto cl-text-white cl-icon-padding\">\n            <span class=\"navblack fas fa-plus\"></span>\n          </a>\n        </nav>\n      </div>\n      <div class=\"col-8 p-0\">\n        <nav class=\"navbar navbar-fixed-top bg-primary justify-content-start mb-3 p-0\">\n          <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"/usr/{{userId}}/website/new\">\n            New Websites\n          </a>\n          <a (click)=\"createWebsite()\" type=\"summit\" class=\"navbar-link navbar-text ml-auto btn-primary cl-icon-padding\">\n            <span class=\"fas fa-check cl-text-white\"></span>\n          </a>\n        </nav>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"contain-fluid\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"container\">\n          <ul class=\"list-group cl-list-group-borderless\">\n            <li class=\"list-group-item cl-list-item-borderless\" *ngFor=\"let website of websites\">\n              <a routerLink=\"/usr/{{userId}}/website/{{website._id}}\"><span class=\"fas fa-cog fontawsome_icon float-right\"></span></a>\n              <a routerLink=\"/usr/{{userId}}/website/{{website._id}}/page\">{{website.description}}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-8\">\n        <!--<form>-->\n          <div class=\"form-group\">\n            <label for=\"websiteName\">Name</label>\n            <input [ngModel]=\"name\" type=\"text\" class=\"form-control\" id=\"websiteName\" name=\"websiteName\" placeholder=\"Name\"\n                   ngModel required #websiteName=\"ngModel\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea id=\"description\" class=\"form-control\" rows=\"3\" name=\"description\" placeholder=\"Description\"\n                      ngModel required #description=\"ngModel\"></textarea>\n          </div>\n        <!--</form>-->\n      </div>\n    </div>\n  </div>\n\n  <nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end p-0\">\n    <div class=\"container-fuild\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link navbar-text cl-icon-padding float-right\">\n        <i class=\"fas fa-user fontawsome_icon\"></i>\n      </a>\n    </div>\n  </nav>\n</form>\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.ts ***!
  \********************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");








var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router, sharedService) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.websites = [];
    }
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        if (this.myWebsiteNewForm.value.websiteName && this.myWebsiteNewForm.value.description) {
            this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_4__["Website"](this.myWebsiteNewForm.value.websiteName, this.userId, this.myWebsiteNewForm.value.description);
            // console.log(this.website._id);
            this.websiteService.createWebsite(this.userId, this.website).subscribe(function (data) {
                _this.sharedService.websites = data;
            });
        }
        this.router.navigate(['/usr/' + this.userId + '/website']);
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.websites = this.sharedService.websites;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            // this.websites = this.websiteService.findWebsitesByUser2(params['uid']);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('z'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WebsiteNewComponent.prototype, "myWebsiteNewForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtY2hvb3Nlci93aWRnZXQtY2hvb3Nlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top bg-light p-0\">\n  <div class=\"navbar-text pull-left p-0\">\n    <a routerLink=\"/usr/{{userId}}/website/{{webId}}/page/{{pageId}}/widget\" class=\"cl-text-black cl-icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\">\n      </span>\n    </a>\n    <a class=\"navbar-brand cl-text-black cl-text-bold\" routerLink=\"./\">\n      Choose Widget\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createNewHeader()\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <!--<a routerLink=\"/usr/{{userId}}/website/{{webId}}/page/{{pageId}}/widget/{{widget._id}}\">{{widget.widgetType}}</a>-->\n      <a (click)=\"createNewYoutube()\">Youtube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <!--<a routerLink=\"/usr/{{userId}}/website/{{webId}}/page/{{pageId}}/widget/{{widget._id}}\">{{widget.widgetType}}</a>-->\n      <a (click)=\"createNewImage()\">Image</a>\n    </li>\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a hrouterLink=\"./\">Label</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a routerLink=\"./\">HTML</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a routerLink=\"./\">Text Input</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a routerLink=\"./\">Link</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a routerLink=\"./\">Button</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a href=\"widget-image.html\">Image</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a href=\"widget-youtube.html\">YouTube</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a routerLink=\"./\">Data Table</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a routerLink=\"./\">Repeater</a>-->\n    <!--</li>-->\n  </ul>\n</div>\n<nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end p-0\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link navbar-text cl-icon-padding ml-auto\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.ts ***!
  \*************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");







var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetService, activatedRoute, sanitizer, router, sharedService) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.router = router;
        this.sharedService = sharedService;
    }
    WidgetChooserComponent.prototype.createNewHeader = function () {
        var _this = this;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('HEADER', this.pageId, '1', 'London terror attack: Police fired unprecedented number of rounds');
        this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (data) {
            _this.widget = data;
            _this.sharedService.widget = data;
            _this.widgetService.findByPageId(_this.pageId).subscribe(function (data1) {
                _this.sharedService.widgets = data1;
            });
            _this.router.navigate(['/usr/' + _this.userId + '/website/' + _this.webId + '/page/' + _this.pageId + '/widget/' + _this.widget._id]);
        });
        // this.widgetService.findByPageId(this.pageId).subscribe((data: any) => {
        //     this.sharedService.widgets = data;
        // });
        // console.log(this.widget._id);
        // this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
    };
    WidgetChooserComponent.prototype.createNewYoutube = function () {
        var _this = this;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('YOUTUBE', this.pageId, '2', 'text', '100%', 'https://www.youtube.com/embed/APexI9Zb6iE/');
        this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (data) {
            _this.widget = data;
            _this.sharedService.widget = data;
            _this.widgetService.findByPageId(_this.pageId).subscribe(function (data1) {
                _this.sharedService.widgets = data1;
            });
            _this.router.navigate(['/usr/' + _this.userId + '/website/' + _this.webId + '/page/' + _this.pageId + '/widget/' + _this.widget._id]);
        });
    };
    WidgetChooserComponent.prototype.createNewImage = function () {
        var _this = this;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('IMAGE', this.pageId, '2', 'text', '100%', 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg');
        this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (data) {
            _this.widget = data;
            _this.sharedService.widget = data;
            _this.widgetService.findByPageId(_this.pageId).subscribe(function (data1) {
                _this.sharedService.widgets = data1;
            });
            _this.router.navigate(['/usr/' + _this.userId + '/website/' + _this.webId + '/page/' + _this.pageId + '/widget/' + _this.widget._id]);
        });
    };
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            // this.widgets = this.widgetService.widgets;
        });
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADER'\">\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");






var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, activatedRoute, sharedService) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.widget = {
            _id: '',
            widgetType: '',
            pageId: '',
            size: '',
            text: '',
            url: '',
            width: '',
            name: '',
        };
        // problem should ask teacher
        this.widgets = [];
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['wgid'];
            _this.widgetService.findByWidgetId(_this.wgid).subscribe(function (data) {
                _this.sharedService.widget = data;
                _this.widget = data;
            });
        });
        console.log(this.widget._id);
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGVyL3dpZGdldC1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #z=\"ngForm\">\n<nav class=\"navbar navbar-default navbar-fixed-top bg-light p-0\">\n  <div class=\"navbar-text pull-left p-0\">\n    <a routerLink=\"/usr/{{userId}}/website/{{webId}}/page/{{pageId}}/widget\" class=\"cl-text-black cl-icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\">\n      </span>\n    </a>\n    <a class=\"navbar-brand cl-text-black cl-text-bold\" routerLink=\"./\">\n      Widgets Edit\n    </a>\n  </div>\n  <div class=\"navbar-text pull-right\">\n    <a (click)=\"editHeader()\" class=\"cl-icon-padding cl-text-black\">\n      <span class=\"fas fa-check fontawsome_icon\">\n      </span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n    <div class=\"form-group\">\n      <label for=\"headingName\">Name</label>\n      <input [ngModel]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"headingName\" placeholder=\"Name\" name=\"headingName\" ngModel required headingName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"headingText\">Text</label>\n      <input [ngModel]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"headingText\" placeholder=\"Text\" name=\"headingText\" ngModel required headingText=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"headingSize\">Size</label>\n      <input [ngModel]=\"widget.size\" type=\"text\" class=\"form-control\" id=\"headingSize\" placeholder=\"3\" name=\"headingSize\" ngModel required headingSize=\"ngModel\">\n    </div>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end p-0\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link navbar-text cl-icon-padding ml-auto\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n</form>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");







var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, activatedRoute, sanitizer, router, sharedService) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.router = router;
        this.sharedService = sharedService;
        this.widgets = [];
    }
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
        });
        this.widgetService.findByPageId(this.pageId).subscribe(function (data1) {
            _this.sharedService.widgets = data1;
        }); // TODO test
        this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
    };
    WidgetHeaderComponent.prototype.editHeader = function () {
        var _this = this;
        this.widget.name = this.myEditWidgetForm.value.headingName;
        this.widget.text = this.myEditWidgetForm.value.headingText;
        this.widget.size = this.myEditWidgetForm.value.headingSize;
        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
        });
        this.widgetService.findByPageId(this.pageId).subscribe(function (data) {
            _this.sharedService.widgets = data;
        });
        this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
    };
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgets = _this.sharedService.widgets;
            _this.widget = _this.sharedService.widget;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('z'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetHeaderComponent.prototype, "myEditWidgetForm", void 0);
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #z=\"ngForm\" >\n<nav class=\"navbar navbar-default navbar-fixed-top bg-light p-0\">\n  <div class=\"navbar-text pull-left p-0\">\n    <a routerLink=\"/usr/{{userId}}/website/{{webId}}/page/{{pageId}}/widget\" class=\"cl-text-black cl-icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\">\n      </span>\n    </a>\n    <a class=\"navbar-brand cl-text-black cl-text-bold\" routerLink=\"./\">\n      Widgets Edit\n    </a>\n  </div>\n  <div class=\"navbar-text pull-right\">\n    <a (click)=\"editImage()\" class=\"cl-icon-padding cl-text-black\">\n      <span class=\"fas fa-check fontawsome_icon\">\n      </span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n    <div class=\"form-group\">\n      <label for=\"imageName\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"imageName\" placeholder=\"Name\" name=\"imageName\" ngModel required #imageName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"imageText\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"imageText\" name=\"imageText\" placeholder=\"Text\" ngModel required #imageText=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"imageURL\">URL</label>\n      <input [ngModel]=\"widget.url\" type=\"text\" class=\"form-control\" id=\"imageURL\" placeholder=\"URL\" name=\"imageURL\" ngModel required #imageURL=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"imageWidth\">Width</label>\n      <input type=\"text\" class=\"form-control\" id=\"imageWidth\" placeholder=\"100%\" name=\"imageWidth\" ngModel required #imageWidth=\"ngModel\">\n    </div>\n    <form ngNoForm action=\"{{baseUrl}}api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n        <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n        <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n        <input  name=\"websiteId\" value=\"{{webId}}\"   style=\"display: none\"/>\n        <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n        <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n        <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n        <br/>\n    </form>\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"exampleInputFile\">Upload</label>-->\n      <!--<input type=\"file\" class=\"form-control\" id=\"exampleInputFile\">-->\n    <!--</div>-->\n  <a class=\"btn btn-primary btn-block\" routerLink=\"./\">Choose From Flickr Not Support Now</a>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end p-0\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link navbar-text cl-icon-padding ml-auto\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");








var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, activatedRoute, sanitizer, router, sharedService) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.router = router;
        this.sharedService = sharedService;
        this.widgets = [];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl;
    }
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            _this.sharedService.widgets = data;
            _this.router.navigate(['/usr/' + _this.userId + '/website/' + _this.webId + '/page/' + _this.pageId + '/widget/']);
            // this.widgetService.findByPageId(this.pageId).subscribe((data1: any) => {
            //     this.sharedService.widgets = data1;
            //     this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
            // });
        });
        // this.widgetService.findByPageId(this.pageId).subscribe((data1: any) => {
        //     this.sharedService.widgets = data1;
        //     this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
        // }); // TODO test
        // this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
    };
    WidgetImageComponent.prototype.editImage = function () {
        var _this = this;
        this.widgetService.findByWidgetId(this.widgetId).subscribe(function (data) {
            _this.widgetTemp = data;
            _this.widgetTemp.name = _this.myEditWidgetForm.value.imageName;
            _this.widgetTemp.text = _this.myEditWidgetForm.value.imageText;
            _this.widgetTemp.width = _this.myEditWidgetForm.value.imageWidth;
            _this.widgetService.updateWidget(_this.widgetId, _this.widgetTemp).subscribe(function (data1) {
            });
            _this.widgetService.findByPageId(_this.pageId).subscribe(function (data1) {
                _this.sharedService.widgets = data1;
            });
            _this.router.navigate(['/usr/' + _this.userId + '/website/' + _this.webId + '/page/' + _this.pageId + '/widget/']);
        });
        // this.widget.name = this.myEditWidgetForm.value.imageName;
        // this.widget.text = this.myEditWidgetForm.value.imageText;
        // // this.widget.url = this.myEditWidgetForm.value.imageURL;
        // this.widget.width = this.myEditWidgetForm.value.imageWidth;
        // this.widgetService.updateWidget(this.widgetId, this.widget).subscribe((data: any) => {
        // });
        // this.widgetService.findByPageId(this.pageId).subscribe((data: any) => {
        //     this.sharedService.widgets = data;
        // });
        // this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
    };
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgets = _this.sharedService.widgets;
            _this.widget = _this.sharedService.widget;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('z'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetImageComponent.prototype, "myEditWidgetForm", void 0);
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQteW91dHViZS93aWRnZXQteW91dHViZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"editYoutube()\" #z=\"ngForm\">\n<nav class=\"navbar navbar-default navbar-fixed-top bg-light p-0\">\n  <div class=\"navbar-text pull-left p-0\">\n    <a routerLink=\"/usr/{{userId}}/website/{{webId}}/page/{{pageId}}/widget\" class=\"cl-text-black cl-icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\">\n      </span>\n    </a>\n    <a class=\"navbar-brand cl-text-black cl-text-bold\" routerLink=\"./\">\n      Widgets Edit\n    </a>\n  </div>\n  <div class=\"navbar-text pull-right\">\n    <a (click)=\"editYoutube()\" type=\"summit\" class=\"cl-icon-padding cl-text-black\">\n      <span class=\"fas fa-check fontawsome_icon\">\n      </span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n    <div class=\"form-group\">\n      <label for=\"youtubeName\">Name</label>\n      <input [ngModel]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"youtubeName\" name=\"youtubeName\" placeholder=\"Name\" ngModel required #youtubeName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtubeText\">Text</label>\n      <input [ngModel]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"youtubeText\" name=\"youtubeText\" placeholder=\"Text\" ngModel required #youtubeText=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtubeURL\">URL</label>\n      <input [ngModel]=\"widget.url\" type=\"text\" class=\"form-control\" id=\"youtubeURL\" name=\"youtubeURL\" placeholder=\"URL\" ngModel required #youtubeURL=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtubeWidth\">Width</label>\n      <input [ngModel]=\"widget.width\" type=\"text\" class=\"form-control\" id=\"youtubeWidth\" name=\"youtubeWidth\" placeholder=\"100%\" ngModel required #youtubeWidth=\"ngModel\">\n    </div>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end p-0\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link navbar-text cl-icon-padding ml-auto\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n</form>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");







var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, sanitizer, router, sharedService) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.router = router;
        this.sharedService = sharedService;
        this.widgets = [];
    }
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
        });
        this.widgetService.findByPageId(this.pageId).subscribe(function (data1) {
            _this.sharedService.widgets = data1;
        }); // TODO test
        this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
    };
    WidgetYoutubeComponent.prototype.editYoutube = function () {
        var _this = this;
        this.widget.name = this.myEditWidgetForm.value.youtubeName;
        this.widget.text = this.myEditWidgetForm.value.youtubeText;
        this.widget.url = this.myEditWidgetForm.value.youtubeURL;
        this.widget.width = this.myEditWidgetForm.value.youtubeWidth;
        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
        });
        this.widgetService.findByPageId(this.pageId).subscribe(function (data) {
            _this.sharedService.widgets = data;
        });
        this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
    };
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgets = _this.sharedService.widgets;
            _this.widget = _this.sharedService.widget;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('z'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "myEditWidgetForm", void 0);
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top bg-light p-0\">\n  <div class=\"navbar-text pull-left p-0\">\n    <a routerLink=\"/usr/{{userId}}/website/{{webId}}/page\" class=\"cl-text-black cl-icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\">\n      </span>\n    </a>\n    <a class=\"navbar-brand cl-text-black cl-text-bold\" routerLink=\"./\">\n      Widgets\n    </a>\n  </div>\n  <div class=\"navbar-text pull-right\">\n    <a routerLink=\"/usr/{{userId}}/website/{{webId}}/page/{{pageId}}/widget/new\" class=\"cl-icon-padding cl-text-black\">\n      <span class=\"fas fa-plus fontawsome_icon\">\n      </span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding justify-content-end\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n  <div *ngFor=\"let widget of widgets\">\n    <div [ngSwitch]=\"widget.widgetType\">\n      <div *ngSwitchCase=\"'HEADER'\" [ngSwitch]=\"widget.size\">\n        <span routerLink=\"/usr/{{userId}}/website/{{webId}}/page/{{pageId}}/widget/{{widget._id}}\" class=\"fas fa-cog fontawsome_icon float-right\"></span>\n        <div *ngSwitchCase=\"1\">\n          <h1>{{widget.text}}</h1>\n        </div>\n        <div *ngSwitchCase=\"3\">\n          <h3>{{widget.text}}</h3>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <a routerLink=\"/usr/{{userId}}/website/{{webId}}/page/{{pageId}}/widget/{{widget._id}}\" class=\"float-right\" style=\"position: absolute; top:0px; right:0px; z-index: 99;\">\n            <i class=\"fas fa-cog fontawsome_icon\" style=\"background-color: white\"></i>\n          </a>\n          <iframe width=\"640\" height=\"360\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(widget.url)\" allowfullscreen></iframe>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <span routerLink=\"/usr/{{userId}}/website/{{webId}}/page/{{pageId}}/widget/{{widget._id}}\" class=\"fas fa-cog fontawsome_icon float-right\"></span>\n        <img class=\"img-responsive img-rounded cl-widget-images btn-primary\"\n             src=\"{{widget.url}}\">\n      </div>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end p-0\">\n  <a routerLink=\"./\" class=\"float-left p-2 cl-text-black\">\n    <i class=\"fa fa-play\"></i>\n  </a>\n  <a routerLink=\"./\" class=\"float-left p-2 cl-text-black\">\n    <i class=\"fa fa-eye\"></i>\n  </a>\n  <!--<div class=\"container-fuild p-0\">-->\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link navbar-text ml-auto\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  <!--</div>-->\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");






var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRoute, sanitizer, sharedService) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.sharedService = sharedService;
        this.widgets = [{}];
    }
    WidgetListComponent.prototype.findWidget = function () {
        // this.widgets = this.widgetService.findByPageId(this.userId);
        //   this.widgets = this.widgetService.widgets;
    };
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            // this.widgets = this.widgetService.widgets;
        });
        this.widgetService.findByPageId(this.pageId).subscribe(function (data) {
            _this.sharedService.widgets = data;
            _this.widgets = data;
        });
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        // call widget service function to update widget as per index
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe(
        // (data) => console.log(data)
        );
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], WidgetListComponent);
    return WidgetListComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3200/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wushangzhen/Desktop/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map