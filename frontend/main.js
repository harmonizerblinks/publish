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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Admin';
        // public img = config.imageUrl;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
/* harmony import */ var _traits_foot_foot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./traits/foot/foot.component */ "./src/app/traits/foot/foot.component.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _views_teller_teller_placeorder_teller_placeorder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/teller/teller-placeorder/teller-placeorder.component */ "./src/app/views/teller/teller-placeorder/teller-placeorder.component.ts");
/* harmony import */ var _views_teller_teller_transfer_teller_transfer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/teller/teller-transfer/teller-transfer.component */ "./src/app/views/teller/teller-transfer/teller-transfer.component.ts");
/* harmony import */ var _views_teller_teller_voucher_teller_voucher_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/teller/teller-voucher/teller-voucher.component */ "./src/app/views/teller/teller-voucher/teller-voucher.component.ts");
/* harmony import */ var _views_teller_teller_summary_teller_summary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/teller/teller-summary/teller-summary.component */ "./src/app/views/teller/teller-summary/teller-summary.component.ts");
/* harmony import */ var _views_orders_orders_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/orders/orders.component */ "./src/app/views/orders/orders.component.ts");
/* harmony import */ var _views_employee_employee_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/employee/employee.component */ "./src/app/views/employee/employee.component.ts");
/* harmony import */ var _views_finance_finance_daybook_finance_daybook_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/finance/finance-daybook/finance-daybook.component */ "./src/app/views/finance/finance-daybook/finance-daybook.component.ts");
/* harmony import */ var _views_finance_finance_cashbook_finance_cashbook_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/finance/finance-cashbook/finance-cashbook.component */ "./src/app/views/finance/finance-cashbook/finance-cashbook.component.ts");
/* harmony import */ var _views_finance_finance_payment_finance_payment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/finance/finance-payment/finance-payment.component */ "./src/app/views/finance/finance-payment/finance-payment.component.ts");
/* harmony import */ var _views_finance_finance_summary_finance_summary_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/finance/finance-summary/finance-summary.component */ "./src/app/views/finance/finance-summary/finance-summary.component.ts");
/* harmony import */ var _views_finance_finance_report_finance_report_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/finance/finance-report/finance-report.component */ "./src/app/views/finance/finance-report/finance-report.component.ts");
/* harmony import */ var _views_finance_finance_payroll_finance_payroll_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/finance/finance-payroll/finance-payroll.component */ "./src/app/views/finance/finance-payroll/finance-payroll.component.ts");
/* harmony import */ var _views_setup_setup_sequence_setup_sequence_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/setup/setup-sequence/setup-sequence.component */ "./src/app/views/setup/setup-sequence/setup-sequence.component.ts");
/* harmony import */ var _views_setup_setup_norminal_setup_norminal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/setup/setup-norminal/setup-norminal.component */ "./src/app/views/setup/setup-norminal/setup-norminal.component.ts");
/* harmony import */ var _views_setup_setup_user_setup_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/setup/setup-user/setup-user.component */ "./src/app/views/setup/setup-user/setup-user.component.ts");
/* harmony import */ var _views_setup_setup_food_setup_food_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/setup/setup-food/setup-food.component */ "./src/app/views/setup/setup-food/setup-food.component.ts");
/* harmony import */ var _views_setup_setup_smslogs_setup_smslogs_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/setup/setup-smslogs/setup-smslogs.component */ "./src/app/views/setup/setup-smslogs/setup-smslogs.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./router */ "./src/app/router.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_inventory_inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/inventory/inventory-item/inventory-item.component */ "./src/app/views/inventory/inventory-item/inventory-item.component.ts");
/* harmony import */ var _views_inventory_inventory_stock_inventory_stock_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/inventory/inventory-stock/inventory-stock.component */ "./src/app/views/inventory/inventory-stock/inventory-stock.component.ts");
/* harmony import */ var _views_inventory_inventory_issue_inventory_issue_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/inventory/inventory-issue/inventory-issue.component */ "./src/app/views/inventory/inventory-issue/inventory-issue.component.ts");
/* harmony import */ var _views_inventory_inventory_supply_inventory_supply_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./views/inventory/inventory-supply/inventory-supply.component */ "./src/app/views/inventory/inventory-supply/inventory-supply.component.ts");
/* harmony import */ var _views_inventory_inventory_item_additem_additem_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./views/inventory/inventory-item/additem/additem.component */ "./src/app/views/inventory/inventory-item/additem/additem.component.ts");
/* harmony import */ var _views_inventory_inventory_stock_addstock_addstock_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./views/inventory/inventory-stock/addstock/addstock.component */ "./src/app/views/inventory/inventory-stock/addstock/addstock.component.ts");
/* harmony import */ var _views_employee_addemployee_addemployee_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./views/employee/addemployee/addemployee.component */ "./src/app/views/employee/addemployee/addemployee.component.ts");
/* harmony import */ var _views_setup_setup_sms_setup_sms_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./views/setup/setup-sms/setup-sms.component */ "./src/app/views/setup/setup-sms/setup-sms.component.ts");
/* harmony import */ var _views_orders_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./views/orders/order-list/order-list.component */ "./src/app/views/orders/order-list/order-list.component.ts");
/* harmony import */ var _services_signin_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/signin.service */ "./src/app/services/signin.service.ts");
/* harmony import */ var _services_setup_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _services_exitpage_guard__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/exitpage.guard */ "./src/app/services/exitpage.guard.ts");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/auth.interceptor */ "./src/app/services/auth.interceptor.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _views_error_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./views/error/notfound/notfound.component */ "./src/app/views/error/notfound/notfound.component.ts");
/* harmony import */ var _views_setup_setup_transit_setup_transit_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./views/setup/setup-transit/setup-transit.component */ "./src/app/views/setup/setup-transit/setup-transit.component.ts");
/* harmony import */ var _views_setup_setup_discount_setup_discount_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./views/setup/setup-discount/setup-discount.component */ "./src/app/views/setup/setup-discount/setup-discount.component.ts");
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./services/inventory.service */ "./src/app/services/inventory.service.ts");
/* harmony import */ var _services_teller_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./services/teller.service */ "./src/app/services/teller.service.ts");
/* harmony import */ var _views_setup_setup_location_setup_location_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./views/setup/setup-location/setup-location.component */ "./src/app/views/setup/setup-location/setup-location.component.ts");
/* harmony import */ var _views_login_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./views/login/forget-password/forget-password.component */ "./src/app/views/login/forget-password/forget-password.component.ts");
/* harmony import */ var _views_setup_setup_teller_setup_teller_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./views/setup/setup-teller/setup-teller.component */ "./src/app/views/setup/setup-teller/setup-teller.component.ts");
/* harmony import */ var _views_finance_finance_transfer_finance_transfer_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./views/finance/finance-transfer/finance-transfer.component */ "./src/app/views/finance/finance-transfer/finance-transfer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























































function tokenGetter() {
    return JSON.parse(localStorage.getItem('Token'));
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _traits_foot_foot_component__WEBPACK_IMPORTED_MODULE_9__["FootComponent"],
                _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _views_teller_teller_placeorder_teller_placeorder_component__WEBPACK_IMPORTED_MODULE_11__["TellerPlaceorderComponent"],
                _views_teller_teller_transfer_teller_transfer_component__WEBPACK_IMPORTED_MODULE_12__["TellerTransferComponent"],
                _views_teller_teller_voucher_teller_voucher_component__WEBPACK_IMPORTED_MODULE_13__["TellerVoucherComponent"],
                _views_teller_teller_summary_teller_summary_component__WEBPACK_IMPORTED_MODULE_14__["TellerSummaryComponent"],
                _views_orders_orders_component__WEBPACK_IMPORTED_MODULE_15__["OrdersComponent"],
                _views_employee_employee_component__WEBPACK_IMPORTED_MODULE_16__["EmployeeComponent"],
                _views_finance_finance_daybook_finance_daybook_component__WEBPACK_IMPORTED_MODULE_17__["FinanceDaybookComponent"],
                _views_finance_finance_cashbook_finance_cashbook_component__WEBPACK_IMPORTED_MODULE_18__["FinanceCashbookComponent"],
                _views_finance_finance_payment_finance_payment_component__WEBPACK_IMPORTED_MODULE_19__["FinancePaymentComponent"],
                _views_finance_finance_summary_finance_summary_component__WEBPACK_IMPORTED_MODULE_20__["FinanceSummaryComponent"],
                _views_finance_finance_report_finance_report_component__WEBPACK_IMPORTED_MODULE_21__["FinanceReportComponent"],
                _views_finance_finance_payroll_finance_payroll_component__WEBPACK_IMPORTED_MODULE_22__["FinancePayrollComponent"],
                _views_setup_setup_sequence_setup_sequence_component__WEBPACK_IMPORTED_MODULE_23__["SetupSequenceComponent"],
                _views_setup_setup_norminal_setup_norminal_component__WEBPACK_IMPORTED_MODULE_24__["SetupNorminalComponent"],
                _views_setup_setup_user_setup_user_component__WEBPACK_IMPORTED_MODULE_25__["SetupUserComponent"],
                _views_setup_setup_food_setup_food_component__WEBPACK_IMPORTED_MODULE_26__["SetupFoodComponent"],
                _views_setup_setup_smslogs_setup_smslogs_component__WEBPACK_IMPORTED_MODULE_27__["SetupSmslogsComponent"],
                _views_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"],
                _views_inventory_inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_31__["InventoryItemComponent"],
                _views_inventory_inventory_stock_inventory_stock_component__WEBPACK_IMPORTED_MODULE_32__["InventoryStockComponent"],
                _views_inventory_inventory_issue_inventory_issue_component__WEBPACK_IMPORTED_MODULE_33__["InventoryIssueComponent"],
                _views_inventory_inventory_supply_inventory_supply_component__WEBPACK_IMPORTED_MODULE_34__["InventorySupplyComponent"],
                _views_inventory_inventory_item_additem_additem_component__WEBPACK_IMPORTED_MODULE_35__["AdditemComponent"],
                _views_inventory_inventory_stock_addstock_addstock_component__WEBPACK_IMPORTED_MODULE_36__["AddstockComponent"],
                _views_employee_addemployee_addemployee_component__WEBPACK_IMPORTED_MODULE_37__["AddemployeeComponent"],
                _views_setup_setup_sms_setup_sms_component__WEBPACK_IMPORTED_MODULE_38__["SetupSmsComponent"],
                _views_orders_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_39__["OrderListComponent"],
                _views_error_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_46__["NotfoundComponent"],
                _views_setup_setup_transit_setup_transit_component__WEBPACK_IMPORTED_MODULE_47__["SetupTransitComponent"],
                _views_setup_setup_discount_setup_discount_component__WEBPACK_IMPORTED_MODULE_48__["SetupDiscountComponent"],
                _views_setup_setup_location_setup_location_component__WEBPACK_IMPORTED_MODULE_51__["SetupLocationComponent"],
                _views_login_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_52__["ForgetPasswordComponent"],
                _views_setup_setup_teller_setup_teller_component__WEBPACK_IMPORTED_MODULE_53__["SetupTellerComponent"],
                _views_finance_finance_transfer_finance_transfer_component__WEBPACK_IMPORTED_MODULE_54__["FinanceTransferComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_45__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                    }
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                    timeOut: 10000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: false,
                    progressBar: true
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterModule"].forRoot(_router__WEBPACK_IMPORTED_MODULE_29__["appRoute"])
            ],
            providers: [_services_signin_service__WEBPACK_IMPORTED_MODULE_40__["SigninService"], _services_setup_service__WEBPACK_IMPORTED_MODULE_41__["SetupService"], _services_inventory_service__WEBPACK_IMPORTED_MODULE_49__["InventoryService"], _services_teller_service__WEBPACK_IMPORTED_MODULE_50__["TellerService"],
                _services_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AuthGuard"], _services_exitpage_guard__WEBPACK_IMPORTED_MODULE_43__["ExitpageGuard"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_44__["AuthInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/router.ts":
/*!***************************!*\
  !*** ./src/app/router.ts ***!
  \***************************/
/*! exports provided: appRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoute", function() { return appRoute; });
/* harmony import */ var _traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
/* harmony import */ var _views_teller_teller_placeorder_teller_placeorder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/teller/teller-placeorder/teller-placeorder.component */ "./src/app/views/teller/teller-placeorder/teller-placeorder.component.ts");
/* harmony import */ var _views_teller_teller_transfer_teller_transfer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/teller/teller-transfer/teller-transfer.component */ "./src/app/views/teller/teller-transfer/teller-transfer.component.ts");
/* harmony import */ var _views_teller_teller_voucher_teller_voucher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/teller/teller-voucher/teller-voucher.component */ "./src/app/views/teller/teller-voucher/teller-voucher.component.ts");
/* harmony import */ var _views_teller_teller_summary_teller_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/teller/teller-summary/teller-summary.component */ "./src/app/views/teller/teller-summary/teller-summary.component.ts");
/* harmony import */ var _views_orders_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/orders/orders.component */ "./src/app/views/orders/orders.component.ts");
/* harmony import */ var _views_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/employee/employee.component */ "./src/app/views/employee/employee.component.ts");
/* harmony import */ var _views_finance_finance_daybook_finance_daybook_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/finance/finance-daybook/finance-daybook.component */ "./src/app/views/finance/finance-daybook/finance-daybook.component.ts");
/* harmony import */ var _views_finance_finance_cashbook_finance_cashbook_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/finance/finance-cashbook/finance-cashbook.component */ "./src/app/views/finance/finance-cashbook/finance-cashbook.component.ts");
/* harmony import */ var _views_finance_finance_payment_finance_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/finance/finance-payment/finance-payment.component */ "./src/app/views/finance/finance-payment/finance-payment.component.ts");
/* harmony import */ var _views_finance_finance_summary_finance_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/finance/finance-summary/finance-summary.component */ "./src/app/views/finance/finance-summary/finance-summary.component.ts");
/* harmony import */ var _views_finance_finance_report_finance_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/finance/finance-report/finance-report.component */ "./src/app/views/finance/finance-report/finance-report.component.ts");
/* harmony import */ var _views_finance_finance_payroll_finance_payroll_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/finance/finance-payroll/finance-payroll.component */ "./src/app/views/finance/finance-payroll/finance-payroll.component.ts");
/* harmony import */ var _views_setup_setup_sequence_setup_sequence_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/setup/setup-sequence/setup-sequence.component */ "./src/app/views/setup/setup-sequence/setup-sequence.component.ts");
/* harmony import */ var _views_setup_setup_norminal_setup_norminal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/setup/setup-norminal/setup-norminal.component */ "./src/app/views/setup/setup-norminal/setup-norminal.component.ts");
/* harmony import */ var _views_setup_setup_user_setup_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/setup/setup-user/setup-user.component */ "./src/app/views/setup/setup-user/setup-user.component.ts");
/* harmony import */ var _views_setup_setup_food_setup_food_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/setup/setup-food/setup-food.component */ "./src/app/views/setup/setup-food/setup-food.component.ts");
/* harmony import */ var _views_setup_setup_smslogs_setup_smslogs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/setup/setup-smslogs/setup-smslogs.component */ "./src/app/views/setup/setup-smslogs/setup-smslogs.component.ts");
/* harmony import */ var _views_inventory_inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/inventory/inventory-item/inventory-item.component */ "./src/app/views/inventory/inventory-item/inventory-item.component.ts");
/* harmony import */ var _views_inventory_inventory_stock_inventory_stock_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/inventory/inventory-stock/inventory-stock.component */ "./src/app/views/inventory/inventory-stock/inventory-stock.component.ts");
/* harmony import */ var _views_inventory_inventory_issue_inventory_issue_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/inventory/inventory-issue/inventory-issue.component */ "./src/app/views/inventory/inventory-issue/inventory-issue.component.ts");
/* harmony import */ var _views_inventory_inventory_supply_inventory_supply_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/inventory/inventory-supply/inventory-supply.component */ "./src/app/views/inventory/inventory-supply/inventory-supply.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_inventory_inventory_item_additem_additem_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/inventory/inventory-item/additem/additem.component */ "./src/app/views/inventory/inventory-item/additem/additem.component.ts");
/* harmony import */ var _views_inventory_inventory_stock_addstock_addstock_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/inventory/inventory-stock/addstock/addstock.component */ "./src/app/views/inventory/inventory-stock/addstock/addstock.component.ts");
/* harmony import */ var _views_employee_addemployee_addemployee_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/employee/addemployee/addemployee.component */ "./src/app/views/employee/addemployee/addemployee.component.ts");
/* harmony import */ var _views_setup_setup_sms_setup_sms_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/setup/setup-sms/setup-sms.component */ "./src/app/views/setup/setup-sms/setup-sms.component.ts");
/* harmony import */ var _views_orders_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/orders/order-list/order-list.component */ "./src/app/views/orders/order-list/order-list.component.ts");
/* harmony import */ var _views_error_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/error/notfound/notfound.component */ "./src/app/views/error/notfound/notfound.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _views_setup_setup_transit_setup_transit_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/setup/setup-transit/setup-transit.component */ "./src/app/views/setup/setup-transit/setup-transit.component.ts");
/* harmony import */ var _views_setup_setup_discount_setup_discount_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/setup/setup-discount/setup-discount.component */ "./src/app/views/setup/setup-discount/setup-discount.component.ts");
/* harmony import */ var _views_login_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/login/forget-password/forget-password.component */ "./src/app/views/login/forget-password/forget-password.component.ts");
/* harmony import */ var _views_setup_setup_location_setup_location_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/setup/setup-location/setup-location.component */ "./src/app/views/setup/setup-location/setup-location.component.ts");
/* harmony import */ var _services_exitpage_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/exitpage.guard */ "./src/app/services/exitpage.guard.ts");
/* harmony import */ var _views_setup_setup_teller_setup_teller_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./views/setup/setup-teller/setup-teller.component */ "./src/app/views/setup/setup-teller/setup-teller.component.ts");




































var appRoute = [
    { path: 'login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"], data: { title: 'Login' } },
    { path: 'orderlist', component: _views_orders_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_27__["OrderListComponent"], data: { title: 'Order List' } },
    { path: 'forgot_password', component: _views_login_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_32__["ForgetPasswordComponent"] },
    {
        path: '', component: _traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__["NavComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AuthGuard"]],
        children: [
            { path: '', component: _views_teller_teller_placeorder_teller_placeorder_component__WEBPACK_IMPORTED_MODULE_1__["TellerPlaceorderComponent"], data: { title: 'dashboard' } },
            { path: 'dashboard', component: _views_teller_teller_summary_teller_summary_component__WEBPACK_IMPORTED_MODULE_4__["TellerSummaryComponent"], data: { title: 'dashboard' } },
            { path: 'orders', component: _views_orders_orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"], data: { title: 'orders' } },
            { path: 'employee',
                children: [
                    { path: '', component: _views_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComponent"], data: { title: 'employee' } },
                    { path: 'add', component: _views_employee_addemployee_addemployee_component__WEBPACK_IMPORTED_MODULE_25__["AddemployeeComponent"], canDeactivate: [_services_exitpage_guard__WEBPACK_IMPORTED_MODULE_34__["ExitpageGuard"]] },
                    { path: 'edit/:id', component: _views_employee_addemployee_addemployee_component__WEBPACK_IMPORTED_MODULE_25__["AddemployeeComponent"], canDeactivate: [_services_exitpage_guard__WEBPACK_IMPORTED_MODULE_34__["ExitpageGuard"]] },
                ]
            },
            { path: 'teller',
                children: [
                    { path: '', component: _views_teller_teller_placeorder_teller_placeorder_component__WEBPACK_IMPORTED_MODULE_1__["TellerPlaceorderComponent"] },
                    { path: 'placeorder', component: _views_teller_teller_placeorder_teller_placeorder_component__WEBPACK_IMPORTED_MODULE_1__["TellerPlaceorderComponent"] },
                    { path: 'voucher', component: _views_teller_teller_voucher_teller_voucher_component__WEBPACK_IMPORTED_MODULE_3__["TellerVoucherComponent"], canDeactivate: [_services_exitpage_guard__WEBPACK_IMPORTED_MODULE_34__["ExitpageGuard"]] },
                    { path: 'summary', component: _views_teller_teller_summary_teller_summary_component__WEBPACK_IMPORTED_MODULE_4__["TellerSummaryComponent"] },
                    { path: 'transfer', component: _views_teller_teller_transfer_teller_transfer_component__WEBPACK_IMPORTED_MODULE_2__["TellerTransferComponent"], canDeactivate: [_services_exitpage_guard__WEBPACK_IMPORTED_MODULE_34__["ExitpageGuard"]] },
                ]
            },
            { path: 'inventory',
                children: [
                    { path: '', component: _views_inventory_inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_18__["InventoryItemComponent"] },
                    { path: 'items',
                        children: [
                            { path: '', component: _views_inventory_inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_18__["InventoryItemComponent"] },
                            { path: 'add', component: _views_inventory_inventory_item_additem_additem_component__WEBPACK_IMPORTED_MODULE_23__["AdditemComponent"], canDeactivate: [_services_exitpage_guard__WEBPACK_IMPORTED_MODULE_34__["ExitpageGuard"]] },
                            { path: 'edit/:id', component: _views_inventory_inventory_item_additem_additem_component__WEBPACK_IMPORTED_MODULE_23__["AdditemComponent"], canDeactivate: [_services_exitpage_guard__WEBPACK_IMPORTED_MODULE_34__["ExitpageGuard"]] },
                            { path: 'stock',
                                children: [
                                    { path: 'logs', component: _views_inventory_inventory_stock_inventory_stock_component__WEBPACK_IMPORTED_MODULE_19__["InventoryStockComponent"] },
                                    { path: ':id', component: _views_inventory_inventory_stock_addstock_addstock_component__WEBPACK_IMPORTED_MODULE_24__["AddstockComponent"], canDeactivate: [_services_exitpage_guard__WEBPACK_IMPORTED_MODULE_34__["ExitpageGuard"]] },
                                ]
                            },
                        ]
                    },
                    { path: 'report', component: _views_inventory_inventory_issue_inventory_issue_component__WEBPACK_IMPORTED_MODULE_20__["InventoryIssueComponent"] },
                    { path: 'supply', component: _views_inventory_inventory_supply_inventory_supply_component__WEBPACK_IMPORTED_MODULE_21__["InventorySupplyComponent"], },
                ]
            },
            { path: 'finance',
                children: [
                    { path: '', component: _views_finance_finance_cashbook_finance_cashbook_component__WEBPACK_IMPORTED_MODULE_8__["FinanceCashbookComponent"] },
                    { path: 'cashbook', component: _views_finance_finance_cashbook_finance_cashbook_component__WEBPACK_IMPORTED_MODULE_8__["FinanceCashbookComponent"] },
                    { path: 'payment', component: _views_finance_finance_payment_finance_payment_component__WEBPACK_IMPORTED_MODULE_9__["FinancePaymentComponent"] },
                    { path: 'daybook', component: _views_finance_finance_daybook_finance_daybook_component__WEBPACK_IMPORTED_MODULE_7__["FinanceDaybookComponent"] },
                    { path: 'transfer', component: _views_finance_finance_payroll_finance_payroll_component__WEBPACK_IMPORTED_MODULE_12__["FinancePayrollComponent"] },
                    { path: 'orders', component: _views_finance_finance_payroll_finance_payroll_component__WEBPACK_IMPORTED_MODULE_12__["FinancePayrollComponent"] },
                    { path: 'summary', component: _views_finance_finance_summary_finance_summary_component__WEBPACK_IMPORTED_MODULE_10__["FinanceSummaryComponent"] },
                    { path: 'report', component: _views_finance_finance_report_finance_report_component__WEBPACK_IMPORTED_MODULE_11__["FinanceReportComponent"] }
                ]
            },
            { path: 'setup',
                children: [
                    { path: '', component: _views_setup_setup_sms_setup_sms_component__WEBPACK_IMPORTED_MODULE_26__["SetupSmsComponent"] },
                    { path: 'food', component: _views_setup_setup_food_setup_food_component__WEBPACK_IMPORTED_MODULE_16__["SetupFoodComponent"] },
                    { path: 'nominal', component: _views_setup_setup_norminal_setup_norminal_component__WEBPACK_IMPORTED_MODULE_14__["SetupNorminalComponent"] },
                    { path: 'sequence', component: _views_setup_setup_sequence_setup_sequence_component__WEBPACK_IMPORTED_MODULE_13__["SetupSequenceComponent"] },
                    { path: 'smslog', component: _views_setup_setup_smslogs_setup_smslogs_component__WEBPACK_IMPORTED_MODULE_17__["SetupSmslogsComponent"] },
                    { path: 'transit', component: _views_setup_setup_transit_setup_transit_component__WEBPACK_IMPORTED_MODULE_30__["SetupTransitComponent"] },
                    { path: 'users', component: _views_setup_setup_user_setup_user_component__WEBPACK_IMPORTED_MODULE_15__["SetupUserComponent"] },
                    { path: 'teller', component: _views_setup_setup_teller_setup_teller_component__WEBPACK_IMPORTED_MODULE_35__["SetupTellerComponent"] },
                    { path: 'workplace', component: _views_setup_setup_location_setup_location_component__WEBPACK_IMPORTED_MODULE_33__["SetupLocationComponent"] },
                    { path: 'discount', component: _views_setup_setup_discount_setup_discount_component__WEBPACK_IMPORTED_MODULE_31__["SetupDiscountComponent"] }
                ]
            },
            { path: '404', component: _views_error_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_28__["NotfoundComponent"], data: { title: 'Error Page' } },
            { path: '**', redirectTo: '404' }
        ]
    },
    { path: '**', redirectTo: '404' }
];


/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('Token')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login']);
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router, jwtHelper) {
        this.router = router;
        this.jwtHelper = jwtHelper;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.cur = req.url;
        this.url = this.cur.split('/').slice(-2)[0]; // console.log(this.url);
        if (this.url === 'upload') {
            req = req.clone({
                setHeaders: {
                    'Access-Control-Allow-Origin': '*',
                    Authorization: "Bearer " + this.jwtHelper.tokenGetter()
                }
            });
        }
        else {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    Authorization: "Bearer " + this.jwtHelper.tokenGetter()
                }
            });
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                alert('UnAuthorize Please Login Again');
                localStorage.removeItem('Token');
                // this.router.navigate(['/login']);
                _this.router.navigate(['/login'], { queryParams: { returnUrl: _this.state.url } });
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/services/exitpage.guard.ts":
/*!********************************************!*\
  !*** ./src/app/services/exitpage.guard.ts ***!
  \********************************************/
/*! exports provided: ExitpageGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitpageGuard", function() { return ExitpageGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExitpageGuard = /** @class */ (function () {
    function ExitpageGuard() {
    }
    ExitpageGuard.prototype.canDeactivate = function (component) {
        if (component.any.dirty) {
            return confirm('are you sure that you want to discard your changes?');
        }
        // throw new Error('Method not implemented.');
        return true;
    };
    ExitpageGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ExitpageGuard);
    return ExitpageGuard;
}());



/***/ }),

/***/ "./src/app/services/inventory.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/inventory.service.ts ***!
  \***********************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryService = /** @class */ (function () {
    function InventoryService(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["config"].apiUrl;
    }
    InventoryService.prototype.Upload = function (data, type) {
        var fd = new FormData();
        fd.append('file', data);
        return this.http.post(this.api + 'upload/' + type, fd);
    };
    InventoryService.prototype.getCode = function (type) {
        return this.http.get(this.api + 'sequence/code/' + type);
    };
    InventoryService.prototype.getItems = function () {
        return this.http.get(this.api + 'item');
    };
    InventoryService.prototype.getItem = function (id) {
        return this.http.get(this.api + 'item/' + id);
    };
    InventoryService.prototype.postItem = function (data) {
        return this.http.post(this.api + 'item', JSON.stringify(data));
    };
    InventoryService.prototype.putItem = function (id, data) {
        return this.http.put(this.api + 'item/' + id, JSON.stringify(data));
    };
    InventoryService.prototype.delItem = function (id) {
        return this.http.delete(this.api + 'item/' + id);
    };
    InventoryService.prototype.getStocks = function () {
        return this.http.get(this.api + 'stock');
    };
    InventoryService.prototype.getStock = function (id) {
        return this.http.get(this.api + 'stock/' + id);
    };
    InventoryService.prototype.getStockLog = function (id) {
        return this.http.get(this.api + 'stock/log/' + id);
    };
    InventoryService.prototype.getStockLogs = function () {
        return this.http.get(this.api + 'stock/log');
    };
    InventoryService.prototype.postStock = function (data) {
        return this.http.post(this.api + 'stock', JSON.stringify(data));
    };
    InventoryService.prototype.putStock = function (id, data) {
        return this.http.put(this.api + 'stock/' + id, JSON.stringify(data));
    };
    InventoryService.prototype.delStock = function (id) {
        return this.http.delete(this.api + 'stock/' + id);
    };
    InventoryService.prototype.getSales = function () {
        return this.http.get(this.api + 'sales');
    };
    InventoryService.prototype.getSale = function (id) {
        return this.http.get(this.api + 'sales/' + id);
    };
    InventoryService.prototype.getSaleLog = function (id) {
        return this.http.get(this.api + 'sales/item/' + id);
    };
    InventoryService.prototype.postSale = function (data) {
        return this.http.post(this.api + 'sales', JSON.stringify(data));
    };
    InventoryService.prototype.putSale = function (id, data) {
        return this.http.put(this.api + 'sales/' + id, JSON.stringify(data));
    };
    InventoryService.prototype.delSale = function (id) {
        return this.http.delete(this.api + 'sales/' + id);
    };
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InventoryService);
    return InventoryService;
}());



/***/ }),

/***/ "./src/app/services/setup.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/setup.service.ts ***!
  \*******************************************/
/*! exports provided: SetupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupService", function() { return SetupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetupService = /** @class */ (function () {
    function SetupService(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["config"].apiUrl;
    }
    SetupService.prototype.Upload = function (data, type) {
        var fd = new FormData();
        fd.append('file', data);
        return this.http.post(this.api + 'upload/' + type, fd);
    };
    SetupService.prototype.getCode = function (type) {
        return this.http.get(this.api + 'sequence/code/' + type);
    };
    SetupService.prototype.getSequences = function () {
        return this.http.get(this.api + 'sequence');
    };
    SetupService.prototype.getSequence = function (id) {
        return this.http.get(this.api + 'sequence/' + id);
    };
    SetupService.prototype.postSequence = function (data) {
        return this.http.post(this.api + 'sequence', JSON.stringify(data));
    };
    SetupService.prototype.putSequence = function (id, data) {
        return this.http.put(this.api + 'sequence/' + id, JSON.stringify(data));
    };
    SetupService.prototype.delSequence = function (id) {
        return this.http.delete(this.api + 'sequence/' + id);
    };
    SetupService.prototype.getLocations = function () {
        return this.http.get(this.api + 'location');
    };
    SetupService.prototype.getLocation = function (id) {
        return this.http.get(this.api + 'location/' + id);
    };
    SetupService.prototype.postLocation = function (data) {
        return this.http.post(this.api + 'location', JSON.stringify(data));
    };
    SetupService.prototype.putLocation = function (id, data) {
        return this.http.put(this.api + 'location/' + id, JSON.stringify(data));
    };
    SetupService.prototype.delLocation = function (id) {
        return this.http.delete(this.api + 'location/' + id);
    };
    SetupService.prototype.getCompanys = function () {
        return this.http.get(this.api + 'company');
    };
    SetupService.prototype.getCompany = function (id) {
        return this.http.get(this.api + 'company/' + id);
    };
    SetupService.prototype.postCompany = function (data) {
        return this.http.post(this.api + 'company', JSON.stringify(data));
    };
    SetupService.prototype.putCompany = function (id, data) {
        return this.http.put(this.api + 'company/' + id, JSON.stringify(data));
    };
    SetupService.prototype.delCompany = function (id) {
        return this.http.delete(this.api + 'company/' + id);
    };
    SetupService.prototype.getNominals = function () {
        return this.http.get(this.api + 'nominal');
    };
    SetupService.prototype.getNominalsByGlType = function (type) {
        return this.http.get(this.api + 'nominal/gltype/' + type);
    };
    SetupService.prototype.getNominalsByBalance = function (type) {
        return this.http.get(this.api + 'nominal/balancetype/' + type);
    };
    SetupService.prototype.getNominal = function (id) {
        return this.http.get(this.api + 'nominal/' + id);
    };
    SetupService.prototype.postNominal = function (data) {
        return this.http.post(this.api + 'nominal', JSON.stringify(data));
    };
    SetupService.prototype.putNominal = function (id, data) {
        return this.http.put(this.api + 'nominal/' + id, JSON.stringify(data));
    };
    SetupService.prototype.delNominal = function (id) {
        return this.http.delete(this.api + 'nominal/' + id);
    };
    SetupService.prototype.getFoods = function () {
        return this.http.get(this.api + 'food');
    };
    SetupService.prototype.getFood = function (id) {
        return this.http.get(this.api + 'food/' + id);
    };
    SetupService.prototype.postFood = function (data) {
        return this.http.post(this.api + 'food', JSON.stringify(data));
    };
    SetupService.prototype.putFood = function (id, data) {
        return this.http.put(this.api + 'food/' + id, JSON.stringify(data));
    };
    SetupService.prototype.delFood = function (id) {
        return this.http.delete(this.api + 'food/' + id);
    };
    SetupService.prototype.getSmsApis = function () {
        return this.http.get(this.api + 'smsapi');
    };
    SetupService.prototype.getSmsApi = function (id) {
        return this.http.get(this.api + 'smsapi/' + id);
    };
    SetupService.prototype.postSmsApi = function (data) {
        return this.http.post(this.api + 'smsapi', JSON.stringify(data));
    };
    SetupService.prototype.putSmsApi = function (id, data) {
        return this.http.put(this.api + 'smsapi/' + id, JSON.stringify(data));
    };
    SetupService.prototype.delSmsApi = function (id) {
        return this.http.delete(this.api + 'smsapi/' + id);
    };
    SetupService.prototype.getSmslogs = function () {
        return this.http.get(this.api + 'sms');
    };
    SetupService.prototype.getSmslog = function (id) {
        return this.http.get(this.api + 'sms/' + id);
    };
    SetupService.prototype.postSmslog = function (data) {
        return this.http.post(this.api + 'sms', JSON.stringify(data));
    };
    SetupService.prototype.putSmslog = function (id, data) {
        return this.http.put(this.api + 'sms/' + id, JSON.stringify(data));
    };
    SetupService.prototype.delSmslog = function (id) {
        return this.http.delete(this.api + 'sms/' + id);
    };
    SetupService.prototype.getDiscounts = function () {
        return this.http.get(this.api + 'discount');
    };
    SetupService.prototype.getDiscount = function (id) {
        return this.http.get(this.api + 'discount/' + id);
    };
    SetupService.prototype.postDiscount = function (data) {
        return this.http.post(this.api + 'discount', JSON.stringify(data));
    };
    SetupService.prototype.putDiscount = function (id, data) {
        return this.http.put(this.api + 'discount/' + id, JSON.stringify(data));
    };
    SetupService.prototype.delDiscount = function (id) {
        return this.http.delete(this.api + 'discount/' + id);
    };
    SetupService.prototype.getTransits = function () {
        return this.http.get(this.api + 'transit');
    };
    SetupService.prototype.getTransit = function (id) {
        return this.http.get(this.api + 'transit/' + id);
    };
    SetupService.prototype.postTransit = function (data) {
        return this.http.post(this.api + 'transit', JSON.stringify(data));
    };
    SetupService.prototype.putTransit = function (id, data) {
        return this.http.put(this.api + 'transit/' + id, JSON.stringify(data));
    };
    SetupService.prototype.delTransit = function (id) {
        return this.http.delete(this.api + 'transit/' + id);
    };
    SetupService.prototype.getUsers = function () {
        return this.http.get(this.api + 'auth/user');
    };
    SetupService.prototype.getUser = function (id) {
        return this.http.get(this.api + 'auth/user/' + id);
    };
    SetupService.prototype.resetUser = function (email) {
        return this.http.get(this.api + 'auth/reset/' + email);
    };
    SetupService.prototype.postUser = function (data) {
        return this.http.post(this.api + 'auth/user', JSON.stringify(data));
    };
    SetupService.prototype.putUser = function (id, data) {
        return this.http.put(this.api + 'auth/user/' + id, JSON.stringify(data));
    };
    SetupService.prototype.delUser = function (id) {
        return this.http.delete(this.api + 'auth/user/' + id);
    };
    SetupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SetupService);
    return SetupService;
}());



/***/ }),

/***/ "./src/app/services/signin.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/signin.service.ts ***!
  \********************************************/
/*! exports provided: SigninService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninService", function() { return SigninService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninService = /** @class */ (function () {
    function SigninService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["config"].apiUrl;
    }
    SigninService.prototype.userDetails = function () {
        // const token = localStorage.getItem('Token') || this.jwtHelper.tokenGetter();
        // console.log(this.jwtHelper.getTokenExpirationDate());
        // console.log(this.jwtHelper.tokenGetter());
        return this.helper.decodeToken(this.jwtHelper.tokenGetter());
    };
    SigninService.prototype.loginUser = function (data) {
        return this.http.post(this.api + 'auth', JSON.stringify(data));
    };
    SigninService.prototype.getClaim = function () {
        return this.http.get(this.api + 'auth');
    };
    SigninService.prototype.resetUser = function (data) {
        return this.http.post(this.api + 'auth/reset/', JSON.stringify(data));
    };
    SigninService.prototype.logOut = function (user) {
        // localStorage.removeItem('Kendru');
        return this.http.get(this.api + 'auth/logout/' + user);
    };
    SigninService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], SigninService);
    return SigninService;
}());



/***/ }),

/***/ "./src/app/services/teller.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/teller.service.ts ***!
  \********************************************/
/*! exports provided: TellerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TellerService", function() { return TellerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TellerService = /** @class */ (function () {
    function TellerService(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["config"].apiUrl;
    }
    TellerService.prototype.Upload = function (data, type) {
        var fd = new FormData();
        fd.append('file', data);
        return this.http.post(this.api + 'upload/' + type, fd);
    };
    TellerService.prototype.getCode = function (type) {
        return this.http.get(this.api + 'sequence/code/' + type);
    };
    TellerService.prototype.postConfirmSms = function (data) {
        return this.http.post(this.api + 'sms/confirm', JSON.stringify(data));
    };
    TellerService.prototype.getDashboard = function (id) {
        return this.http.get(this.api + 'dashboard/' + id);
    };
    TellerService.prototype.getOrderScreen = function () {
        return this.http.get(this.api + 'services/order');
    };
    TellerService.prototype.getEmployees = function () {
        return this.http.get(this.api + 'employee');
    };
    TellerService.prototype.getEmployee = function (id) {
        return this.http.get(this.api + 'employee/' + id);
    };
    TellerService.prototype.postEmployee = function (data) {
        return this.http.post(this.api + 'employee', JSON.stringify(data));
    };
    TellerService.prototype.putEmployee = function (id, data) {
        return this.http.put(this.api + 'employee/' + id, JSON.stringify(data));
    };
    TellerService.prototype.delEmployee = function (id) {
        return this.http.delete(this.api + 'employee/' + id);
    };
    TellerService.prototype.getTellers = function () {
        return this.http.get(this.api + 'teller');
    };
    TellerService.prototype.getTeller = function (id) {
        return this.http.get(this.api + 'teller/' + id);
    };
    TellerService.prototype.getTellerBalance = function (id) {
        return this.http.get(this.api + 'teller/balance/' + id);
    };
    TellerService.prototype.getNominalBalance = function (id) {
        return this.http.get(this.api + 'nominal/balance/' + id);
    };
    TellerService.prototype.postTeller = function (data) {
        return this.http.post(this.api + 'teller', JSON.stringify(data));
    };
    TellerService.prototype.putTeller = function (id, data) {
        return this.http.put(this.api + 'teller/' + id, JSON.stringify(data));
    };
    TellerService.prototype.delTeller = function (id) {
        return this.http.delete(this.api + 'teller/' + id);
    };
    TellerService.prototype.postTransfer = function (data) {
        return this.http.post(this.api + 'teller/transfer', JSON.stringify(data));
    };
    TellerService.prototype.postNominalTransfer = function (data) {
        return this.http.post(this.api + 'nominal/transfer', JSON.stringify(data));
    };
    TellerService.prototype.postVoucher = function (data) {
        return this.http.post(this.api + 'teller/voucher', JSON.stringify(data));
    };
    TellerService.prototype.postPayment = function (data) {
        return this.http.post(this.api + 'nominal/payment', JSON.stringify(data));
    };
    TellerService.prototype.generateTrialBalance = function (data) {
        return this.http.post(this.api + 'report', JSON.stringify(data));
    };
    TellerService.prototype.Enquiry = function (data) {
        return this.http.post(this.api + 'enquiry', JSON.stringify(data));
    };
    TellerService.prototype.getCashbook = function () {
        return this.http.get(this.api + 'cashbook');
    };
    TellerService.prototype.getDaybook = function (data) {
        return this.http.post(this.api + 'daybook', JSON.stringify(data));
    };
    TellerService.prototype.getSummarys = function (date) {
        return this.http.get(this.api + 'summary/' + date);
    };
    TellerService.prototype.getSummary = function () {
        return this.http.get(this.api + 'summary');
    };
    TellerService.prototype.getOrders = function () {
        return this.http.get(this.api + 'order');
    };
    TellerService.prototype.getOrder = function (id) {
        return this.http.get(this.api + 'order/' + id);
    };
    TellerService.prototype.getOrderList = function (id) {
        return this.http.get(this.api + 'order/list/' + id);
    };
    TellerService.prototype.cancelOrder = function (id) {
        return this.http.get(this.api + 'order/cancel/' + id);
    };
    TellerService.prototype.acceptOrder = function (id) {
        return this.http.get(this.api + 'order/accept/' + id);
    };
    TellerService.prototype.readyOrder = function (id) {
        return this.http.get(this.api + 'order/ready/' + id);
    };
    TellerService.prototype.confirmOrder = function (id) {
        return this.http.get(this.api + 'order/confirm/' + id);
    };
    TellerService.prototype.getOrderbyCode = function (id) {
        return this.http.get(this.api + 'order/code/' + id);
    };
    TellerService.prototype.getOrderSummary = function (id, date) {
        return this.http.get(this.api + 'order/summary/' + id + '/' + date);
    };
    TellerService.prototype.postOrder = function (data) {
        return this.http.post(this.api + 'order', JSON.stringify(data));
    };
    TellerService.prototype.putOrder = function (id, data) {
        return this.http.put(this.api + 'order/' + id, JSON.stringify(data));
    };
    TellerService.prototype.delOrder = function (id) {
        return this.http.delete(this.api + 'order/' + id);
    };
    TellerService.prototype.getTransactions = function () {
        return this.http.get(this.api + 'transaction');
    };
    TellerService.prototype.getTransaction = function (id) {
        return this.http.get(this.api + 'transaction/' + id);
    };
    TellerService.prototype.postTransaction = function (data) {
        return this.http.post(this.api + 'order', JSON.stringify(data));
    };
    TellerService.prototype.putTransaction = function (id, data) {
        return this.http.put(this.api + 'order/' + id, JSON.stringify(data));
    };
    TellerService.prototype.delTransaction = function (id) {
        return this.http.delete(this.api + 'order/' + id);
    };
    TellerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TellerService);
    return TellerService;
}());



/***/ }),

/***/ "./src/app/traits/foot/foot.component.css":
/*!************************************************!*\
  !*** ./src/app/traits/foot/foot.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/traits/foot/foot.component.html":
/*!*************************************************!*\
  !*** ./src/app/traits/foot/foot.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <div class=\"pull-right\">\r\n      Session <strong>2018</strong> Resturant.\r\n  </div>\r\n  <div>\r\n      <strong>Copyright</strong> Acyst Technology &copy; 2018\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/traits/foot/foot.component.ts":
/*!***********************************************!*\
  !*** ./src/app/traits/foot/foot.component.ts ***!
  \***********************************************/
/*! exports provided: FootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootComponent", function() { return FootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FootComponent = /** @class */ (function () {
    function FootComponent() {
    }
    FootComponent.prototype.ngOnInit = function () {
    };
    FootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foot',
            template: __webpack_require__(/*! ./foot.component.html */ "./src/app/traits/foot/foot.component.html"),
            styles: [__webpack_require__(/*! ./foot.component.css */ "./src/app/traits/foot/foot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FootComponent);
    return FootComponent;
}());



/***/ }),

/***/ "./src/app/traits/nav/nav.component.css":
/*!**********************************************!*\
  !*** ./src/app/traits/nav/nav.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/traits/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/traits/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\r\n    <div class=\"sidebar-collapse\">\r\n      <ul class=\"nav metismenu\" id=\"side-menu\">\r\n        <li class=\"nav-header\">\r\n          <div class=\"dropdown profile-element\">\r\n            <span><img alt=\"image\" height=\"48\" width=\"48\" class=\"img-circle img-responsive\" src=\"\" onerror=\"this.src='assets/img/acyst-logo.png'\" /></span>\r\n            <a data-toggle=\"dropdown\" class=\"dropdown-toggle\">\r\n              <span class=\"clear\">\r\n                <span class=\"block m-t-xs\">\r\n                  <strong class=\"font-bold\">{{active.FullName}}</strong></span>\r\n                <span class=\"text-muted text-xs block\">{{active.UserType}} <b class=\"caret\"></b></span>\r\n              </span>\r\n            </a>\r\n            <ul class=\"dropdown-menu animated fadeInRight m-t-xs\">\r\n              <li><a routerLink=\"/profile\">Profile</a></li>\r\n              <li class=\"divider\"></li>\r\n              <li><a routerLink=\"/lock\">LockScreen</a></li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"logo-element\">Acyst</div>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"/dashboard\"><i class=\"fa fa-th-large\"></i><span class=\"nav-label\">Dashboards</span></a>\r\n        </li>\r\n        <li class=\"teller\">\r\n          <a><i class=\"fa fa-edit\"></i> <span class=\"nav-label\">Teller</span> <span class=\"fa arrow\"></span></a>\r\n          <ul class=\"nav nav-second-level\">\r\n            <li><a routerLink=\"/teller/placeorder\">Place Order</a></li>\r\n            <li><a routerLink=\"/teller/transfer\">Transfer</a></li>\r\n            <li><a routerLink=\"/teller/voucher\">Vouchers</a></li>\r\n            <li><a routerLink=\"/teller/summary\">Summary</a></li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"/orders\"><i class=\"fa fa-bath\"></i><span class=\"nav-label\">Orders</span></a>\r\n        </li>\r\n        <li class=\"inventory\">\r\n          <a><i class=\"fa fa-edit\"></i> <span class=\"nav-label\">Inventory</span> <span class=\"fa arrow\"></span></a>\r\n          <ul class=\"nav nav-second-level\">\r\n            <li><a routerLink=\"/inventory/items\">Item</a></li>\r\n            <li><a routerLink=\"/inventory/supply\">Supply</a></li>\r\n            <li><a routerLink=\"/inventory/report\">report</a></li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"/employee\"><i class=\"fa fa-users\"></i><span class=\"nav-label\">Employee</span></a>\r\n        </li>\r\n        <li class=\"finance\" *ngIf=\"active.UserType == 'Accountant'\">\r\n          <a><i class=\"fa fa-area-chart\"></i> <span class=\"nav-label\">Finance</span> <span class=\"fa arrow\"></span></a>\r\n          <ul class=\"nav nav-second-level\">\r\n            <li><a routerLink=\"/finance/orders\">All Orders</a></li>\r\n            <li><a routerLink=\"/finance/payment\">Payment</a></li>\r\n            <li><a routerLink=\"/finance/cashbook\">CashBook</a></li>\r\n            <li><a routerLink=\"/finance/daybook\">DayBook</a></li>\r\n            <li><a routerLink=\"/finance/summary\">Summary</a></li>\r\n            <li><a routerLink=\"/finance/report\">Report</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"finance\" *ngIf=\"active.UserType == 'Admin'\">\r\n          <a><i class=\"fa fa-area-chart\"></i> <span class=\"nav-label\">Finance</span> <span class=\"fa arrow\"></span></a>\r\n          <ul class=\"nav nav-second-level\">\r\n            <li><a routerLink=\"/finance/orders\">All Orders</a></li>\r\n            <li><a routerLink=\"/finance/payment\">Payment</a></li>\r\n            <li><a routerLink=\"/finance/cashbook\">CashBook</a></li>\r\n            <li><a routerLink=\"/finance/daybook\">DayBook</a></li>\r\n            <li><a routerLink=\"/finance/summary\">Summary</a></li>\r\n            <li><a routerLink=\"/finance/report\">Report</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"settings\" *ngIf=\"active.UserType == 'Admin'\">\r\n          <a><i class=\"fa fa-gear\"></i> <span class=\"nav-label\">Settings</span><span class=\"fa arrow\"></span></a>\r\n          <ul class=\"nav nav-second-level collapse\">\r\n            <li><a routerLink=\"/setup/users\">Users Manager</a></li>\r\n            <li><a routerLink=\"/setup/sequence\">Sequence</a></li>\r\n            <li><a routerLink=\"/setup/nominal\">Nominal</a></li>\r\n            <li><a routerLink=\"/setup/discount\">Discount</a></li>\r\n            <li><a routerLink=\"/setup/food\">Food</a></li>\r\n            <li><a routerLink=\"/setup/smslog\">Sms</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n\r\n  <div id=\"page-wrapper\" class=\"gray-bg\">\r\n    <div class=\"row border-bottom\">\r\n      <nav class=\"navbar navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n        <div class=\"navbar-header\">\r\n          <a class=\"navbar-minimalize minimalize-styl-2 btn btn-primary \"><i class=\"fa fa-bars\"></i> </a>\r\n          <form role=\"search\" class=\"navbar-form-custom\" action=\"\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <ul class=\"nav navbar-top-links navbar-right\">\r\n          <li>\r\n            <span class=\"m-r-sm text-muted welcome-message\">Welcome to {{active.Company}}</span>\r\n          </li>\r\n          <li><a (click)=\"logOut()\"><i class=\"fa fa-sign-out\"></i> Log out</a></li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n\r\n    <router-outlet></router-outlet>\r\n    <app-foot></app-foot>\r\n"

/***/ }),

/***/ "./src/app/traits/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/traits/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_signin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/signin.service */ "./src/app/services/signin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(ser, _nav, toastr) {
        this.ser = ser;
        this._nav = _nav;
        this.toastr = toastr;
    }
    NavComponent.prototype.ngOnInit = function () {
        // this.init();
        this.active = this.ser.userDetails();
        this.date = JSON.parse(localStorage.getItem('Date'));
        // console.log(this.active);
        // this.getClaims();
    };
    NavComponent.prototype.showMsg = function (type, title, message) {
        if (type === 'success') {
            this.toastr.success(message, title);
        }
        else if (type === 'warning') {
            this.toastr.warning(message, title);
        }
        else if (type === 'error') {
            this.toastr.error(message, title);
        }
    };
    NavComponent.prototype.getClaims = function () {
        this.ser.getClaim().subscribe(function (data) {
            // console.log(data);
            // this.showMsg('success', 'Claims', JSON.stringify(data));
        }, function (err) { console.log(err); /*this._nav.navigate(['/login']);*/ });
    };
    NavComponent.prototype.logOut = function () {
        var _this = this;
        this.ser.logOut(this.active.unique_name).subscribe(function (data) {
            _this.res = data;
            localStorage.removeItem('Token'); // alert('Logout successfully');
            _this.showMsg('success', 'Logout', 'You hav been Logout successfully @' + _this.active.FullName);
            _this._nav.navigate(['/login']);
        }, function (err) {
            console.log(err);
            localStorage.removeItem('Token');
            _this._nav.navigate(['/login']);
        });
    };
    NavComponent.prototype.init = function () {
        this.active = { FullName: '', Image: '', UserType: '', };
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/traits/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/traits/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_signin_service__WEBPACK_IMPORTED_MODULE_1__["SigninService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <span class=\"label label-success pull-right\">Monthly</span>\r\n          <h5>Income</h5>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <h1 class=\"no-margins\">40 886,200</h1>\r\n          <div class=\"stat-percent font-bold text-success\">98% <i class=\"fa fa-bolt\"></i></div>\r\n          <small>Total income</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <span class=\"label label-info pull-right\">Annual</span>\r\n          <h5>Orders</h5>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <h1 class=\"no-margins\">275,800</h1>\r\n          <div class=\"stat-percent font-bold text-info\">20% <i class=\"fa fa-level-up\"></i></div>\r\n          <small>New orders</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <span class=\"label label-primary pull-right\">Today</span>\r\n          <h5>visits</h5>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <h1 class=\"no-margins\">106,120</h1>\r\n          <div class=\"stat-percent font-bold text-navy\">44% <i class=\"fa fa-level-up\"></i></div>\r\n          <small>New visits</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <span class=\"label label-danger pull-right\">Low value</span>\r\n          <h5>User activity</h5>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <h1 class=\"no-margins\">80,600</h1>\r\n          <div class=\"stat-percent font-bold text-danger\">38% <i class=\"fa fa-level-down\"></i></div>\r\n          <small>In first month</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <h5>Orders</h5>\r\n          <div class=\"pull-right\">\r\n            <div class=\"btn-group\">\r\n              <button type=\"button\" class=\"btn btn-xs btn-white active\">Today</button>\r\n              <button type=\"button\" class=\"btn btn-xs btn-white\">Monthly</button>\r\n              <button type=\"button\" class=\"btn btn-xs btn-white\">Annual</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-9\">\r\n              <div class=\"flot-chart\">\r\n                <div class=\"flot-chart-content\" id=\"flot-dashboard-chart\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n              <ul class=\"stat-list\">\r\n                <li>\r\n                  <h2 class=\"no-margins\">2,346</h2>\r\n                  <small>Total orders in period</small>\r\n                  <div class=\"stat-percent\">48% <i class=\"fa fa-level-up text-navy\"></i></div>\r\n                  <div class=\"progress progress-mini\">\r\n                    <div style=\"width: 48%;\" class=\"progress-bar\"></div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <h2 class=\"no-margins \">4,422</h2>\r\n                  <small>Orders in last month</small>\r\n                  <div class=\"stat-percent\">60% <i class=\"fa fa-level-down text-navy\"></i></div>\r\n                  <div class=\"progress progress-mini\">\r\n                    <div style=\"width: 60%;\" class=\"progress-bar\"></div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <h2 class=\"no-margins \">9,180</h2>\r\n                  <small>Monthly income from orders</small>\r\n                  <div class=\"stat-percent\">22% <i class=\"fa fa-bolt text-navy\"></i></div>\r\n                  <div class=\"progress progress-mini\">\r\n                    <div style=\"width: 22%;\" class=\"progress-bar\"></div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <h5>Messages</h5>\r\n          <div class=\"ibox-tools\">\r\n            <a class=\"collapse-link\">\r\n              <i class=\"fa fa-chevron-up\"></i>\r\n            </a>\r\n            <a class=\"close-link\">\r\n              <i class=\"fa fa-times\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"ibox-content ibox-heading\">\r\n          <h3><i class=\"fa fa-envelope-o\"></i> New messages</h3>\r\n          <small><i class=\"fa fa-tim\"></i> You have 22 new messages and 16 waiting in draft folder.</small>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <div class=\"feed-activity-list\">\r\n\r\n            <div class=\"feed-element\">\r\n              <div>\r\n                <small class=\"pull-right text-navy\">1m ago</small>\r\n                <strong>Monica Smith</strong>\r\n                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>\r\n                <small class=\"text-muted\">Today 5:60 pm - 12.06.2014</small>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"feed-element\">\r\n              <div>\r\n                <small class=\"pull-right\">2m ago</small>\r\n                <strong>Jogn Angel</strong>\r\n                <div>There are many variations of passages of Lorem Ipsum available</div>\r\n                <small class=\"text-muted\">Today 2:23 pm - 11.06.2014</small>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"feed-element\">\r\n              <div>\r\n                <small class=\"pull-right\">5m ago</small>\r\n                <strong>Jesica Ocean</strong>\r\n                <div>Contrary to popular belief, Lorem Ipsum</div>\r\n                <small class=\"text-muted\">Today 1:00 pm - 08.06.2014</small>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"feed-element\">\r\n              <div>\r\n                <small class=\"pull-right\">5m ago</small>\r\n                <strong>Monica Jackson</strong>\r\n                <div>The generated Lorem Ipsum is therefore </div>\r\n                <small class=\"text-muted\">Yesterday 8:48 pm - 10.06.2014</small>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"feed-element\">\r\n              <div>\r\n                <small class=\"pull-right\">5m ago</small>\r\n                <strong>Anna Legend</strong>\r\n                <div>All the Lorem Ipsum generators on the Internet tend to repeat </div>\r\n                <small class=\"text-muted\">Yesterday 8:48 pm - 10.06.2014</small>\r\n              </div>\r\n            </div>\r\n            <div class=\"feed-element\">\r\n              <div>\r\n                <small class=\"pull-right\">5m ago</small>\r\n                <strong>Damian Nowak</strong>\r\n                <div>The standard chunk of Lorem Ipsum used </div>\r\n                <small class=\"text-muted\">Yesterday 8:48 pm - 10.06.2014</small>\r\n              </div>\r\n            </div>\r\n            <div class=\"feed-element\">\r\n              <div>\r\n                <small class=\"pull-right\">5m ago</small>\r\n                <strong>Gary Smith</strong>\r\n                <div>200 Latin words, combined with a handful</div>\r\n                <small class=\"text-muted\">Yesterday 8:48 pm - 10.06.2014</small>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"ibox float-e-margins\">\r\n            <div class=\"ibox-title\">\r\n              <h5>User project list</h5>\r\n              <div class=\"ibox-tools\">\r\n                <a class=\"collapse-link\">\r\n                  <i class=\"fa fa-chevron-up\"></i>\r\n                </a>\r\n                <a class=\"close-link\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"ibox-content\">\r\n              <table class=\"table table-hover no-margins\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Status</th>\r\n                    <th>Date</th>\r\n                    <th>User</th>\r\n                    <th>Value</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td><small>Pending...</small></td>\r\n                    <td><i class=\"fa fa-clock-o\"></i> 11:20pm</td>\r\n                    <td>Samantha</td>\r\n                    <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 24% </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><span class=\"label label-warning\">Canceled</span> </td>\r\n                    <td><i class=\"fa fa-clock-o\"></i> 10:40am</td>\r\n                    <td>Monica</td>\r\n                    <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 66% </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><small>Pending...</small> </td>\r\n                    <td><i class=\"fa fa-clock-o\"></i> 01:30pm</td>\r\n                    <td>John</td>\r\n                    <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 54% </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><small>Pending...</small> </td>\r\n                    <td><i class=\"fa fa-clock-o\"></i> 02:20pm</td>\r\n                    <td>Agnes</td>\r\n                    <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 12% </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><small>Pending...</small> </td>\r\n                    <td><i class=\"fa fa-clock-o\"></i> 09:40pm</td>\r\n                    <td>Janet</td>\r\n                    <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 22% </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><span class=\"label label-primary\">Completed</span> </td>\r\n                    <td><i class=\"fa fa-clock-o\"></i> 04:10am</td>\r\n                    <td>Amelia</td>\r\n                    <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 66% </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><small>Pending...</small> </td>\r\n                    <td><i class=\"fa fa-clock-o\"></i> 12:08am</td>\r\n                    <td>Damian</td>\r\n                    <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 23% </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"ibox float-e-margins\">\r\n            <div class=\"ibox-title\">\r\n              <h5>Small todo list</h5>\r\n              <div class=\"ibox-tools\">\r\n                <a class=\"collapse-link\">\r\n                  <i class=\"fa fa-chevron-up\"></i>\r\n                </a>\r\n                <a class=\"close-link\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"ibox-content\">\r\n              <ul class=\"todo-list m-t small-list\">\r\n                <li>\r\n                  <a href=\"#\" class=\"check-link\"><i class=\"fa fa-check-square\"></i> </a>\r\n                  <span class=\"m-l-xs todo-completed\">Buy a milk</span>\r\n\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\" class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\r\n                  <span class=\"m-l-xs\">Go to shop and find some products.</span>\r\n\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\" class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\r\n                  <span class=\"m-l-xs\">Send documents to Mike</span>\r\n                  <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> 1 mins</small>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\" class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\r\n                  <span class=\"m-l-xs\">Go to the doctor dr Smith</span>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\" class=\"check-link\"><i class=\"fa fa-check-square\"></i> </a>\r\n                  <span class=\"m-l-xs todo-completed\">Plan vacation</span>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\" class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\r\n                  <span class=\"m-l-xs\">Create new stuff</span>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\" class=\"check-link\"><i class=\"fa fa-square-o\"></i> </a>\r\n                  <span class=\"m-l-xs\">Call to Anna for dinner</span>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"ibox float-e-margins\">\r\n            <div class=\"ibox-title\">\r\n              <h5>Transactions worldwide</h5>\r\n              <div class=\"ibox-tools\">\r\n                <a class=\"collapse-link\">\r\n                  <i class=\"fa fa-chevron-up\"></i>\r\n                </a>\r\n                <a class=\"close-link\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"ibox-content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <table class=\"table table-hover margin bottom\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th style=\"width: 1%\" class=\"text-center\">No.</th>\r\n                        <th>Transaction</th>\r\n                        <th class=\"text-center\">Date</th>\r\n                        <th class=\"text-center\">Amount</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td class=\"text-center\">1</td>\r\n                        <td> Security doors\r\n                        </td>\r\n                        <td class=\"text-center small\">16 Jun 2014</td>\r\n                        <td class=\"text-center\"><span class=\"label label-primary\">$483.00</span></td>\r\n\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-center\">2</td>\r\n                        <td> Wardrobes\r\n                        </td>\r\n                        <td class=\"text-center small\">10 Jun 2014</td>\r\n                        <td class=\"text-center\"><span class=\"label label-primary\">$327.00</span></td>\r\n\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-center\">3</td>\r\n                        <td> Set of tools\r\n                        </td>\r\n                        <td class=\"text-center small\">12 Jun 2014</td>\r\n                        <td class=\"text-center\"><span class=\"label label-warning\">$125.00</span></td>\r\n\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-center\">4</td>\r\n                        <td> Panoramic pictures</td>\r\n                        <td class=\"text-center small\">22 Jun 2013</td>\r\n                        <td class=\"text-center\"><span class=\"label label-primary\">$344.00</span></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-center\">5</td>\r\n                        <td>Phones</td>\r\n                        <td class=\"text-center small\">24 Jun 2013</td>\r\n                        <td class=\"text-center\"><span class=\"label label-primary\">$235.00</span></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-center\">6</td>\r\n                        <td>Monitors</td>\r\n                        <td class=\"text-center small\">26 Jun 2013</td>\r\n                        <td class=\"text-center\"><span class=\"label label-primary\">$100.00</span></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div id=\"world-map\" style=\"height: 300px;\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/views/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/views/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/employee/addemployee/addemployee.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/employee/addemployee/addemployee.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/employee/addemployee/addemployee.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/employee/addemployee/addemployee.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ng-controller=\"customersctrl\">\r\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <div class=\"col-sm-4\">\r\n      <h2 *ngIf=\"!edit\">Add Employee</h2>\r\n      <h2 *ngIf=\"edit\">Edit Employee</h2>\r\n      <ol class=\"breadcrumb\">\r\n        <li routerLink=\"/dashboard\"><a>Dashboard</a></li>\r\n        <li><a>Employee</a></li>\r\n        <li class=\"active\" *ngIf=\"!edit\"><strong>Add</strong></li>\r\n        <li class=\"active\" *ngIf=\"edit\"><strong>Edit</strong></li>\r\n      </ol>\r\n    </div>\r\n    <div class=\"col-sm-2 pull-right\">\r\n      <div class=\"title-action\">\r\n        <a routerLink=\"/employee\" class=\"btn btn-primary\">Back</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <form class=\"m-t form\" method=\"Post\" #employeeForm=\"ngForm\" (ngSubmit)=\"postEmployee()\">\r\n          <div class=\"ibox float-e-margins\">\r\n            <div class=\"ibox-title\">\r\n              <h5 class=\"text-navy\" *ngIf=\"!edit\">Add Employee</h5>\r\n              <h5 class=\"text-navy\" *ngIf=\"edit\">Edit Employee </h5>\r\n              <div class=\"ibox-tools\">\r\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                  <i class=\"fa fa-wrench\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"ibox-content\">\r\n              <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Full Name</label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\r\n                        <input type=\"text\" name=\"fullname\" [(ngModel)]=\"emp.fullname\" placeholder=\"Full Name\" class=\"form-control\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Email Address</label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-at\"></i></span>\r\n                        <input type=\"text\" name=\"email\" [(ngModel)]=\"emp.email\" placeholder=\"Email Address\" class=\"form-control\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Mobile Number </label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-phone\"></i></span>\r\n                        <input type=\"text\" name=\"mobile\" [(ngModel)]=\"emp.mobile\" placeholder=\"Phone Number\" class=\"form-control\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Date of Birth</label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n                        <input type=\"date\" name=\"dateofbirth\" [(ngModel)]=\"emp.dateofbirth\" placeholder=\"Date of Birth\" class=\"form-control\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Image </label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-image\"></i></span>\r\n                        <input type=\"file\" name=\"image\" (change)=\"fileUpload($event)\" class=\"form-control\" accept=\"image/*\" required>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Position </label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-group\"></i></span>\r\n                        <input type=\"text\" name=\"position\" [(ngModel)]=\"emp.position\" placeholder=\"Position\" class=\"form-control\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Salary </label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-group\"></i></span>\r\n                        <input type=\"text\" name=\"salary\" [(ngModel)]=\"emp.salary\" placeholder=\"Position\" class=\"form-control\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Nationalty</label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-id-badge\"></i></span>\r\n                        <input type=\"text\" class=\"form-control\" name=\"nationality\" [(ngModel)]=\"emp.nationality\" placeholder=\"Nationalty\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Address</label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-map-marker\"></i></span>\r\n                        <textarea row=\"4\" name=\"address\" [(ngModel)]=\"emp.address\" placeholder=\"Address\" class=\"form-control\"></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-10 col-md-12\">\r\n                      <a class=\"btn btn-sm btn-white btn-rounded\" type=\"cancel\">Cancel</a>\r\n                      <button class=\"btn btn-sm btn-rounded btn-primary\" *ngIf=\"!edit\" [disabled]=\"employeeForm.invalid\" type=\"submit\">Add</button>\r\n                      <button class=\"btn btn-sm btn-rounded btn-warning\" *ngIf=\"edit\" (click)=\"postEmployee()\" [disabled]=\"employeeForm.invalid\" type=\"button\"> Update</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/employee/addemployee/addemployee.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/employee/addemployee/addemployee.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddemployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddemployeeComponent", function() { return AddemployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddemployeeComponent = /** @class */ (function () {
    function AddemployeeComponent(_emp, _use, _nav, _route) {
        this._emp = _emp;
        this._use = _use;
        this._nav = _nav;
        this._route = _route;
    }
    AddemployeeComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAll();
    };
    AddemployeeComponent.prototype.getAll = function () {
        this.id = this._route.snapshot.paramMap.get('id');
        this.getEmp(this.id); // console.log(this.id);
    };
    AddemployeeComponent.prototype.getEmp = function (id) {
        var _this = this;
        if (id && id !== 0) {
            this.edit = true;
            this._emp.getEmployee(id).subscribe(function (data) {
                _this.emp = data;
            }, function (err) { alert(err.statusText); });
        }
        else {
            this.edit = false;
            this.formReset();
        }
    };
    AddemployeeComponent.prototype.fileUpload = function (event) {
        var _this = this;
        // console.log(event);
        this.img = event.target.files[0];
        this._emp.Upload(this.img, 'User').subscribe(function (data) {
            _this.emp.image = data;
            console.log(data);
        });
    };
    AddemployeeComponent.prototype.postEmployee = function () {
        var _this = this;
        this._emp.getCode('Employee').subscribe(function (data) {
            _this.emp.code = data;
            _this.addEmployee(_this.emp);
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Generate New Code for Employee');
        });
    };
    AddemployeeComponent.prototype.addEmployee = function (employ) {
        var _this = this;
        this._emp.postEmployee(employ).subscribe(function (data) {
            _this.res = data;
            _this.formReset(_this.any);
            _this._use.showMsg('success', 'Employee Added', 'Added to list Successfully');
            _this._nav.navigate(['/employee']);
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Add New Employee');
        });
    };
    AddemployeeComponent.prototype.putEmployee = function () {
        var _this = this;
        this.emp.muserid = this._use.active.Id;
        this.emp.mdate = new Date();
        this._emp.putEmployee(this.emp.employeeid, this.emp).subscribe(function (data) {
            _this.res = data;
            _this.formReset(_this.any);
            _this._use.showMsg('success', 'Employee Updated', 'Details Updated Successfully');
            _this._nav.navigate(['/employee']);
        }, function (err) {
            _this._use.showMsg('error', 'Updated Fail', 'Unable to Update Details');
        });
    };
    AddemployeeComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.emp = { fullname: '', email: '', image: '', salary: 0,
                mobile: '', position: '', dateofbirth: null, nationality: '', address: '',
                userid: this._use.active.Id, date: new Date(), muserid: null, mdate: null };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('employeeForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], AddemployeeComponent.prototype, "any", void 0);
    AddemployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addemployee',
            template: __webpack_require__(/*! ./addemployee.component.html */ "./src/app/views/employee/addemployee/addemployee.component.html"),
            styles: [__webpack_require__(/*! ./addemployee.component.css */ "./src/app/views/employee/addemployee/addemployee.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_2__["TellerService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AddemployeeComponent);
    return AddemployeeComponent;
}());



/***/ }),

/***/ "./src/app/views/employee/employee.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/employee/employee.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/employee/employee.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/employee/employee.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-sm-6\">\r\n    <h2>View Employee</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li routerLink=\"dashboard\"><a>Dashboard</a></li>\r\n      <li><a>Employee</a></li>\r\n      <li class=\"active\"><strong>List</strong></li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-sm-2 pull-right\">\r\n    <div class=\"title-action\">\r\n      <a routerLink=\"add\" class=\"btn btn-primary\">Add Employee</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"title-action\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" ng-model=\"SearchData\" id=\"data\" class=\"form-control\" required>\r\n        <span class=\"input-group-btn\">\r\n          <button type=\"button\" id=\"Search\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i></button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- List of employees -->\r\n<div class=\"wrapper View wrapper-content animated fadeInRight\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"ibox\">\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 m-b-xs\">\r\n              <b class=\"control-label col-sm-2\">Show </b>\r\n              <div class=\"col-sm-6\">\r\n                <select class=\"input-sm form-control input-s-sm inline\" ng-model=\"Limit\" ng-init=\"Limit=25\">\r\n                  <option ng-selected=\"Limit == 25\" value=\"25\">25</option>\r\n                  <option ng-selected=\"Limit == 50\" value=\"50\">50</option>\r\n                  <option ng-selected=\"Limit == 100\" value=\"100\">100</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 col-sm-offset-4\">\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" placeholder=\"Search\" ng-model=\"SearchData\" class=\"input-sm form-control\"> <span\r\n                  class=\"input-group-btn\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\r\n            <thead>\r\n              <tr>\r\n                <th>S/N</th>\r\n                <th>Code</th>\r\n                <th>FullName</th>\r\n                <th>Mobile</th>\r\n                <th>Position</th>\r\n                <th data-hide=\"phone\">DateOfBirth</th>\r\n                <th data-hide=\"phone\">Nationalty</th>\r\n                <th class=\"text-right\">Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let e of employee; let i=index\">\r\n                <td>{{ i + 1}}</td>\r\n                <td>{{e.code}}</td>\r\n                <td>{{e.fullname}}</td>\r\n                <td>{{e.mobile}}</td>\r\n                <td>{{e.position}}</td>\r\n                <td>{{e.dateofbirth|date:'shortDate'}}</td>\r\n                <td>{{e.nationality}}</td>\r\n                <td class=\"text-right\">\r\n                  <div class=\"btn-group\">\r\n                    <button [routerLink]=\"['edit', e.employeeid]\" class=\"btn-white btn btn-xs\">Edit</button>\r\n                    <button (click)=\"delEmp(e)\" class=\"btn-white btn btn-xs\">Delete</button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <td colspan=\"8\">\r\n                  <ul class=\"pagination pull-right\"></ul>\r\n                </td>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/employee/employee.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/employee/employee.component.ts ***!
  \******************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(_emp) {
        this._emp = _emp;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.getAllEmployee();
    };
    EmployeeComponent.prototype.getAllEmployee = function () {
        var _this = this;
        this._emp.getEmployees().subscribe(function (data) {
            _this.employee = data;
        }, function (err) { alert(err.statusText); });
    };
    EmployeeComponent.prototype.delEmp = function (dat) {
        var _this = this;
        this._emp.delEmployee(dat.employeeid).subscribe(function (data) {
            _this.res = data;
            _this.employee.slice(dat);
        }, function (err) { alert(err.statusText); });
    };
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/views/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/views/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__["TellerService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/views/error/notfound/notfound.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/error/notfound/notfound.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/error/notfound/notfound.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/error/notfound/notfound.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center animated fadeInDown\">\n  <h1>404</h1>\n  <h3 class=\"font-bold\">Page Not Found</h3>\n\n  <div class=\"error-desc\">\n    Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button\n    on your browser or try found something else in our app.\n    <form class=\"form-inline m-t\" role=\"form\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search for page\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/error/notfound/notfound.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/error/notfound/notfound.component.ts ***!
  \************************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/views/error/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/views/error/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/views/finance/finance-cashbook/finance-cashbook.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/views/finance/finance-cashbook/finance-cashbook.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/finance/finance-cashbook/finance-cashbook.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/finance/finance-cashbook/finance-cashbook.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ng-controller=\"cashierdaybook\">\r\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <div class=\"col-md-10\">\r\n      <h2>Cashbook</h2>\r\n      <ol class=\"breadcrumb\">\r\n        <li><a routerLink=\"dashboard\">Dashboard</a></li>\r\n        <li><a>Finance</a></li>\r\n        <li class=\"active\">\r\n          <strong>CashBook</strong>\r\n        </li>\r\n      </ol>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"ibox float-e-margins\">\r\n          <div class=\"ibox-title\">\r\n            <h5>Cashbook </h5>\r\n            <div class=\"ibox-tools\">\r\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                <i class=\"fa fa-wrench\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"ibox-content\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"footable table table-stripped\" data-page-size=\"6\" data-filter=#filter>\r\n                    <thead>\r\n                      <tr>\r\n                        <th>SN</th>\r\n                        <th>Code</th>\r\n                        <th>Name</th>\r\n                        <th>BalanceType</th>\r\n                        <th>Balance</th>\r\n                        <th>Status</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let b of book; let i=index\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>{{b.code}}</td>\r\n                        <td>{{b.description}}</td>\r\n                        <td>{{b.balancetype}}</td>\r\n                        <td>{{b.balance}}</td>\r\n                        <td>{{b.status}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                      <tr>\r\n                        <td colspan=\"6\">\r\n                          <ul class=\"pagination pull-right\"></ul>\r\n                        </td>\r\n                      </tr>\r\n                    </tfoot>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/finance/finance-cashbook/finance-cashbook.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/finance/finance-cashbook/finance-cashbook.component.ts ***!
  \******************************************************************************/
/*! exports provided: FinanceCashbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceCashbookComponent", function() { return FinanceCashbookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinanceCashbookComponent = /** @class */ (function () {
    function FinanceCashbookComponent(_api, _use) {
        this._api = _api;
        this._use = _use;
    }
    FinanceCashbookComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    FinanceCashbookComponent.prototype.getAll = function () {
        var _this = this;
        this._api.getCashbook().subscribe(function (data) {
            _this.book = data;
        }, function (err) { });
    };
    FinanceCashbookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finance-cashbook',
            template: __webpack_require__(/*! ./finance-cashbook.component.html */ "./src/app/views/finance/finance-cashbook/finance-cashbook.component.html"),
            styles: [__webpack_require__(/*! ./finance-cashbook.component.css */ "./src/app/views/finance/finance-cashbook/finance-cashbook.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__["TellerService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]])
    ], FinanceCashbookComponent);
    return FinanceCashbookComponent;
}());



/***/ }),

/***/ "./src/app/views/finance/finance-daybook/finance-daybook.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/views/finance/finance-daybook/finance-daybook.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/finance/finance-daybook/finance-daybook.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/finance/finance-daybook/finance-daybook.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <div class=\"col-md-10\">\r\n      <h2>Daybook</h2>\r\n      <ol class=\"breadcrumb\">\r\n        <li><a routerLink=\"dashboard\">Dashboard</a></li>\r\n        <li><a>Finance</a></li>\r\n        <li class=\"active\">\r\n          <strong>DayBook</strong>\r\n        </li>\r\n      </ol>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"ibox float-e-margins\">\r\n          <div class=\"ibox-title\">\r\n            <h5> Daybook </h5>\r\n            <div class=\"ibox-tools\">\r\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                <i class=\"fa fa-wrench\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"ibox-content\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"col-md-6\">\r\n                  <form method=\"Post\" #daybookForm=\"ngForm\" (ngSubmit)=\"getDayBook()\">\r\n                    <div class=\"form-group\">\r\n                      <label>Select Teller/ Date *</label>\r\n                      <div class=\"col-md-12 input-group\">\r\n                        <span class=\"input-group-btn\">\r\n                          <button type=\"button\" class=\"btn btn-white\"><i class=\"fa fa-bandcamp\"></i></button></span>\r\n                        <select class=\"form-control\" name=\"tellerid\" [(ngModel)]=\"rp.tellerid\" required>\r\n                          <option value=\"\">Choose Teller</option>\r\n                          <option *ngFor=\"let t of teller\" [value]=\"t.tellerid\">{{t.user}}</option>\r\n                        </select>\r\n                        <span class=\"input-group-btn\">\r\n                          <button type=\"button\" class=\"btn btn-white\"><i class=\"fa fa-calendar\"></i></button></span>\r\n                        <input type=\"date\" class=\"form-control\" name=\"date\" [(ngModel)]=\"rp.date\" required />\r\n                        <span class=\"input-group-btn\">\r\n                          <button type=\"submit\" class=\"btn btn-info\">Generate</button>\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n                <div class=\"col-md-3 col-md-offset-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Filter*</label>\r\n                    <div class=\"col-md-12 input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"search\" required>\r\n                      <span class=\"input-group-btn hidden\">\r\n                        <button type=\"button\" class=\"btn btn-info\">Search</button>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"footable table table-stripped\" data-page-size=\"6\" data-filter=#filter>\r\n                    <thead>\r\n                      <tr>\r\n                        <th>SN</th>\r\n                        <th>TCode</th>\r\n                        <th>TDate</th>\r\n                        <th>Source</th>\r\n                        <th>Type</th>\r\n                        <th>Amount</th>\r\n                        <th>Reference</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let t of book; let i=index\">\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{t.transcode}}</td>\r\n                        <td>{{t.date|date:'shortDate'}}</td>\r\n                        <td>{{t.source}}</td>\r\n                        <td>{{t.type}}</td>\r\n                        <td>{{t.amount|currency:'Ghc '}}</td>\r\n                        <td>{{t.reference}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                      <tr>\r\n                        <td colspan=\"7\">\r\n                          <ul class=\"pagination pull-right\"></ul>\r\n                        </td>\r\n                      </tr>\r\n                    </tfoot>\r\n                  </table>\r\n                </div>\r\n                <div class=\"col-md-7 col-md-offset-5\">\r\n                  <div class=\"form-group col-md-3\"><label>Opening</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"opening\" [(ngModel)]=\"cash.opening\" required>\r\n                  </div>\r\n                  <div class=\"form-group col-md-3\"><label>Credit</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"credit\" [(ngModel)]=\"cash.credit\" required>\r\n                  </div>\r\n                  <div class=\"form-group col-md-3\"><label>Debit</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"debit\" [(ngModel)]=\"cash.debit\" required>\r\n                  </div>\r\n                  <div class=\"form-group col-md-3\"><label>Balance</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"balance\" [(ngModel)]=\"cash.balance\" required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/views/finance/finance-daybook/finance-daybook.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/finance/finance-daybook/finance-daybook.component.ts ***!
  \****************************************************************************/
/*! exports provided: FinanceDaybookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceDaybookComponent", function() { return FinanceDaybookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinanceDaybookComponent = /** @class */ (function () {
    function FinanceDaybookComponent(_api, _use) {
        this._api = _api;
        this._use = _use;
    }
    FinanceDaybookComponent.prototype.ngOnInit = function () {
        this.init();
        this.getAll();
    };
    FinanceDaybookComponent.prototype.getAll = function () {
        var _this = this;
        this._api.getTellers().subscribe(function (data) {
            _this.teller = data;
        }, function (err) { });
    };
    FinanceDaybookComponent.prototype.getDayBook = function () {
        var _this = this;
        this._api.getDaybook(this.rp).subscribe(function (data) {
            _this.book = data.trans;
            _this.cash = data.cash;
            console.log(data);
        }, function (err) { });
    };
    FinanceDaybookComponent.prototype.init = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.rp = { tellerid: '', date: null };
            this.cash = { opening: 0, credit: 0, debit: 0, balance: 0 };
        }
    };
    FinanceDaybookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finance-daybook',
            template: __webpack_require__(/*! ./finance-daybook.component.html */ "./src/app/views/finance/finance-daybook/finance-daybook.component.html"),
            styles: [__webpack_require__(/*! ./finance-daybook.component.css */ "./src/app/views/finance/finance-daybook/finance-daybook.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__["TellerService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]])
    ], FinanceDaybookComponent);
    return FinanceDaybookComponent;
}());



/***/ }),

/***/ "./src/app/views/finance/finance-payment/finance-payment.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/views/finance/finance-payment/finance-payment.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/finance/finance-payment/finance-payment.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/finance/finance-payment/finance-payment.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-md-6\">\r\n    <h2>Financial Payment</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a>Dashboard</a></li>\r\n      <li><a>Financial</a></li>\r\n      <li class=\"active\"><strong>Payment</strong></li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"title-action\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <h5 class=\"text-navy\">Financial Payment</h5>\r\n          <div class=\"ibox-tools\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n              <i class=\"fa fa-wrench\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <form class=\"form-horizontal\" role=\"form\" method=\"Post\" #paymentForm=\"ngForm\" (ngSubmit)=\"postPayment()\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                  <label>Funding Source</label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-bandcamp\"></i></span>\r\n                      <select class=\"form-control\" name=\"nominalid\" [(ngModel)]=\"tf.id\" required>\r\n                        <option value=\"\">Choose Option..</option>\r\n                        <option *ngFor=\"let b of from\" [value]=\"b.nominalid\">{{b.code}} {{b.description}}</option>\r\n                      </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Expense</label>\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-bandcamp\"></i></span>\r\n                    <select class=\"form-control\" name=\"nominalid\" [(ngModel)]=\"tf.nominalid\" required>\r\n                      <option value=\"\">Choose Option..</option>\r\n                      <option *ngFor=\"let b of to\" [value]=\"b.nominalid\">{{b.code}} {{b.description}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Amount </label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-money\"></i></span>\r\n                      <input type=\"text\" placeholder=\"Amount\" class=\"form-control\" name=\"amount\" [(ngModel)]=\"tf.amount\"\r\n                        required>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Method: </label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-bandcamp\"></i></span>\r\n                      <select class=\"form-control\" name=\"method\" [(ngModel)]=\"tf.method\" required>\r\n                        <option value=\"cash\">Cash</option>\r\n                        <option value=\"momo\">Mobile Money</option>\r\n                        <option value=\"pos\">POS</option>\r\n                        <option value=\"cheque\">Cheque</option>\r\n                      </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Reference</label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-bandcamp\"></i></span>\r\n                      <textarea rows=\"3\" placeholder=\"Reference\" class=\"form-control\" name=\"reference\" [(ngModel)]=\"tf.reference\" required></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-md-offset-7 col-md-12\">\r\n                    <button class=\"btn btn-sm btn-rounded btn-primary\" type=\"submit\">Post Payment</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"ibox\">\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-sm-offset-6\">\r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"></span>\r\n                <input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\">\r\n                <span class=\"input-group-btn\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S/N</th>\r\n                  <th>Code</th>\r\n                  <th>Type</th>\r\n                  <th>Source</th>\r\n                  <th>Method</th>\r\n                  <th>Amount</th>\r\n                  <th>Date</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let t of trans; let i=index\">\r\n                  <td> {{i + 1}}</td>\r\n                  <td>{{t.transcode}}</td>\r\n                  <td>{{t.type}} </td>\r\n                  <td>{{t.source}}</td>\r\n                  <td>{{t.method}}</td>\r\n                  <td>{{t.amount}}</td>\r\n                  <td>{{t.date|date:'shortDate'}}</td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"8\">\r\n                    <ul class=\"pagination pull-right\"></ul>\r\n                  </td>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/finance/finance-payment/finance-payment.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/finance/finance-payment/finance-payment.component.ts ***!
  \****************************************************************************/
/*! exports provided: FinancePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancePaymentComponent", function() { return FinancePaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FinancePaymentComponent = /** @class */ (function () {
    function FinancePaymentComponent(_setup, _api, _use) {
        this._setup = _setup;
        this._api = _api;
        this._use = _use;
    }
    FinancePaymentComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAllTransactions();
        this.getAllNominals();
    };
    FinancePaymentComponent.prototype.getAllNominals = function () {
        var _this = this;
        this._setup.getNominalsByGlType('Expense').subscribe(function (data) {
            _this.to = data;
        }, function (err) { alert(err.error); });
        this._setup.getNominalsByGlType('cashbook').subscribe(function (data) {
            _this.from = data;
        }, function (err) { alert(err.error); });
    };
    FinancePaymentComponent.prototype.getAllTransactions = function () {
        var _this = this;
        this._api.getTransactions().subscribe(function (data) {
            _this.trans = data;
        }, function (err) { alert(err.error); });
    };
    FinancePaymentComponent.prototype.postPayment = function () {
        var _this = this;
        this._api.getCode('Transaction').subscribe(function (data) {
            _this.tf.transcode = data;
            _this.Next();
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Generate New Code for Employee');
        });
    };
    FinancePaymentComponent.prototype.Next = function () {
        var _this = this;
        this._api.postTransaction(this.tf).subscribe(function (data) {
            _this.res = data;
            _this.formReset();
            _this._use.showMsg('success', 'Payment Successfull', 'Payment has been posted successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Payment Fail', 'Unable to Post Payment Details');
        });
    };
    FinancePaymentComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.tf = { transcode: '', type: '',
                source: 'Financial', method: 'cash', amount: 0, nominalid: '', id: '',
                reference: '', userid: this._use.active.Id, date: this._use.date
            };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paymentForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], FinancePaymentComponent.prototype, "any", void 0);
    FinancePaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finance-payment',
            template: __webpack_require__(/*! ./finance-payment.component.html */ "./src/app/views/finance/finance-payment/finance-payment.component.html"),
            styles: [__webpack_require__(/*! ./finance-payment.component.css */ "./src/app/views/finance/finance-payment/finance-payment.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"], src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_3__["TellerService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"]])
    ], FinancePaymentComponent);
    return FinancePaymentComponent;
}());



/***/ }),

/***/ "./src/app/views/finance/finance-payroll/finance-payroll.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/views/finance/finance-payroll/finance-payroll.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/finance/finance-payroll/finance-payroll.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/finance/finance-payroll/finance-payroll.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2 *ngIf=\"!list\">Order List</h2>\r\n    <h2 *ngIf=\"list\">Recent Order</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a>Home</a></li>\r\n      <li><a>Orders</a></li>\r\n      <li class=\"active\"><strong>All</strong></li>\r\n      <li class=\"active\"><strong>{{orders.length}}</strong></li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-lg-2 pull-right\">\r\n    <div class=\"title-action\">\r\n      <a routerLink=\"/orderlist\" class=\"btn btn-primary\">Order Dashboard</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"ibox\">\r\n        <div class=\"ibox-content\">\r\n          <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\r\n            <thead>\r\n              <tr>\r\n                <th>S/N</th>\r\n                <th>OrderNo</th>\r\n                <th>Customer</th>\r\n                <th>Amount</th>\r\n                <th>VAT</th>\r\n                <th>Total</th>\r\n                <th>Date</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let o of orders; let i=index\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{o.orderno}}</td>\r\n                <td>{{o.fullname}}</td>\r\n                <td>{{o.price}}</td>\r\n                <td>{{o.vat}}</td>\r\n                <td>{{o.total}}</td>\r\n                <td>{{o.date|date:'short'}}</td>\r\n                <td>\r\n                  <span *ngIf=\"o.status == 'pending'\" class=\"label label-warning\">{{o.status}}</span>\r\n                  <span *ngIf=\"o.status == 'In-Process'\" class=\"label label-warning\">{{o.status}}</span>\r\n                  <span *ngIf=\"o.status == 'Ready'\" class=\"label label-primary\">{{o.status}}</span>\r\n                  <span *ngIf=\"o.status == 'Confirm'\" class=\"label label-info\">{{o.status}}</span>\r\n                  <span *ngIf=\"o.status == 'Delivered'\" class=\"label label-white\">{{o.status}}</span>\r\n                  <span *ngIf=\"o.status == 'Cancel'\" class=\"label label-danger\">{{o.status}}</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <td colspan=\"8\">\r\n                  <ul class=\"pagination pull-right\"></ul>\r\n                </td>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/finance/finance-payroll/finance-payroll.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/finance/finance-payroll/finance-payroll.component.ts ***!
  \****************************************************************************/
/*! exports provided: FinancePayrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancePayrollComponent", function() { return FinancePayrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FinancePayrollComponent = /** @class */ (function () {
    function FinancePayrollComponent(_api) {
        this._api = _api;
        this.orders = [];
    }
    FinancePayrollComponent.prototype.ngOnInit = function () {
        this.getAllOrders();
    };
    FinancePayrollComponent.prototype.getAllOrders = function () {
        var _this = this;
        this._api.getOrders().subscribe(function (data) {
            _this.orders = data;
        }, function (err) { alert(err.error); });
    };
    FinancePayrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finance-payroll',
            template: __webpack_require__(/*! ./finance-payroll.component.html */ "./src/app/views/finance/finance-payroll/finance-payroll.component.html"),
            styles: [__webpack_require__(/*! ./finance-payroll.component.css */ "./src/app/views/finance/finance-payroll/finance-payroll.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__["TellerService"]])
    ], FinancePayrollComponent);
    return FinancePayrollComponent;
}());



/***/ }),

/***/ "./src/app/views/finance/finance-report/finance-report.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/views/finance/finance-report/finance-report.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/finance/finance-report/finance-report.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/finance/finance-report/finance-report.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-sm-4\">\r\n    <h2>Financial Report</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a>Financial</a></li>\r\n      <li class=\"active\">\r\n        <strong>Reports</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-sm-8\">\r\n    <div class=\"title-action\">\r\n      <a (click)=\"list = true\" class=\"btn btn-primary\" *ngIf=\"!list\">Trail Balance</a> \r\n      <a (click)=\"list = false\" class=\"btn btn-primary\" *ngIf=\"list\">Enquiry</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"list\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <form class=\"m-t form-horizontal\" role=\"form\" method=\"post\" #balanceform=\"ngForm\" (ngSubmit)=\"Generate()\">\r\n        <div class=\"col-md-4 col-md-offset-8\">\r\n          <div class=\"form-group col-md-5\">\r\n            <label>Start Date</label>\r\n            <input type=\"date\" name=\"Start\" [(ngModel)]=\"rp.start\" class=\"form-control\" required>\r\n          </div>\r\n          <div class=\"form-group col-md-7\">\r\n            <label>End Date</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"date\" name=\"End\" [(ngModel)]=\"rp.end\" class=\"form-control\" required>\r\n              <span class=\"input-group-btn\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Generate</button>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"tabs-container\">\r\n            <ul class=\"nav nav-tabs\">\r\n              <li class=\"active\"><a data-toggle=\"tab\" href=\"#trans\">Financial Report</a></li>\r\n              <li class=\"active\"><a data-toggle=\"tab\" href=\"#trans\">{{trans.length}}</a></li>\r\n            </ul>\r\n            <div class=\"tab-content\">\r\n              <div id=\"trans\" class=\"tab-pane View active\">\r\n                <div class=\"panel-body\">\r\n                  <div class=\"row\">\r\n                    <div id=\"Enquiry\" class=\"table-editable\">\r\n                      <table id=\"Payment\" class=\"footable table table-stripped\" data-page-size=\"8\" data-filter=#filter>\r\n                        <thead>\r\n                          <tr>\r\n                            <th>S/N</th>\r\n                            <th>Code</th>\r\n                            <th>Nominal</th>\r\n                            <th>OpeningBalance</th>\r\n                            <th>Debits</th>\r\n                            <th>Credits</th>\r\n                            <th>ClosingBalance</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let t of trans; let i=index\">\r\n                            <td>{{i+1}}</td>\r\n                            <td>{{t.code}}</td>\r\n                            <td>{{t.name}}</td>\r\n                            <td>{{t.openingbalance}}</td>\r\n                            <th>{{t.debits}}</th>\r\n                            <th>{{t.credits}}</th>\r\n                            <th>{{t.closingbalance}}</th>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>{{trans.length}}</td>\r\n                            <td>Total</td>\r\n                            <td>Balance</td>\r\n                            <td>{{total.opening}}</td>\r\n                            <th>{{total.debit}}</th>\r\n                            <th>{{total.credit}}</th>\r\n                            <th>{{total.credit - total.debit}}</th>\r\n                          </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                          <tr>\r\n                            <td colspan=\"7\">\r\n                              <ul class=\"pagination pull-right\"></ul>\r\n                            </td>\r\n                          </tr>\r\n                        </tfoot>\r\n                      </table>\r\n                    </div>\r\n                    <div class=\"col-md-5 col-md-offset-7 hidden\">\r\n                      <div class=\"form-group col-md-4\"><label>Credit</label>\r\n                        <input type=\"text\" class=\"form-control Credit\" required>\r\n                      </div>\r\n                      <div class=\"form-group col-md-4\"><label>Debit</label>\r\n                        <input type=\"text\" class=\"form-control Debit\" required>\r\n                      </div>\r\n                      <div class=\"form-group col-md-4\"><label>Balance</label>\r\n                        <input type=\"text\" class=\"form-control Total\" required>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"!list\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <form class=\"m-t form-horizontal\" role=\"form\" method=\"post\" #enquiryform=\"ngForm\" (ngSubmit)=\"Enquiry()\">\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"form-group\">\r\n            <label>Nominal *</label>\r\n            <select class=\"form-control\" name=\"nominalid\" [(ngModel)]=\"rp.id\" required>\r\n              <option value=\"\">Choose Nominal</option>\r\n              <option *ngFor=\"let e of nominals\" [value]=\"e.nominalid\">{{e.code}} {{e.description}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-lg-offset-4\">\r\n          <div class=\"form-group col-lg-5\">\r\n            <label>Start Date</label>\r\n            <input type=\"date\" name=\"Start\" [(ngModel)]=\"rp.start\" class=\"form-control\" required>\r\n          </div>\r\n          <div class=\"form-group col-lg-7\">\r\n            <label>End Date</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"date\" name=\"End\" [(ngModel)]=\"rp.end\" class=\"form-control\" required>\r\n              <span class=\"input-group-btn\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Generate</button>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"tabs-container\">\r\n            <ul class=\"nav nav-tabs\">\r\n              <li class=\"active\"><a data-toggle=\"tab\" href=\"#trans\">Nominal Enquiry</a></li>\r\n              <li class=\"active\"><a data-toggle=\"tab\" href=\"#trans\">{{enquiry.length}}</a></li>\r\n            </ul>\r\n            <div class=\"tab-content\">\r\n              <div id=\"trans\" class=\"tab-pane View active\">\r\n                <div class=\"panel-body\">\r\n                  <div class=\"row\">\r\n                    <div id=\"Enquiry\" class=\"table-editable\">\r\n                      <table id=\"Payment\" class=\"footable table table-stripped\" data-page-size=\"8\" data-filter=#filter>\r\n                        <thead>\r\n                          <tr>\r\n                            <th>SN</th>\r\n                            <th>TCode</th>\r\n                            <th>TDate</th>\r\n                            <th>Source</th>\r\n                            <th>Type</th>\r\n                            <th>Amount</th>\r\n                            <th>Reference</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let t of enquiry; let i=index\">\r\n                            <td>{{i+1}}</td>\r\n                            <td>{{t.transcode}}</td>\r\n                            <td>{{t.date|date:'shortDate'}}</td>\r\n                            <td>{{t.source}}</td>\r\n                            <th>{{t.type}}</th>\r\n                            <th>{{t.amount}}</th>\r\n                            <th>{{t.reference}}</th>\r\n                          </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                          <tr>\r\n                            <td colspan=\"8\">\r\n                              <ul class=\"pagination pull-right\"></ul>\r\n                            </td>\r\n                          </tr>\r\n                        </tfoot>\r\n                      </table>\r\n                    </div>\r\n                    <div class=\"col-lg-5 col-lg-offset-7\">\r\n                      <div class=\"form-group col-lg-4\"><label>Credit</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"credit\" [(ngModel)]=\"cash.credit\" required>\r\n                      </div>\r\n                      <div class=\"form-group col-lg-4\"><label>Debit</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"debit\" [(ngModel)]=\"cash.debit\" required>\r\n                      </div>\r\n                      <div class=\"form-group col-lg-4\"><label>Balance</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"balance\" [(ngModel)]=\"cash.balance\" required>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/finance/finance-report/finance-report.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/finance/finance-report/finance-report.component.ts ***!
  \**************************************************************************/
/*! exports provided: FinanceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceReportComponent", function() { return FinanceReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FinanceReportComponent = /** @class */ (function () {
    function FinanceReportComponent(_api, _set, _use) {
        this._api = _api;
        this._set = _set;
        this._use = _use;
        this.trans = [];
        this.enquiry = [];
    }
    FinanceReportComponent.prototype.ngOnInit = function () {
        this.init();
        this.formReset();
        this.getAllTellers();
    };
    FinanceReportComponent.prototype.getAllTellers = function () {
        var _this = this;
        this._set.getNominals().subscribe(function (data) {
            _this.nominals = data;
        }, function (err) { });
    };
    FinanceReportComponent.prototype.Generate = function () {
        var _this = this;
        this._api.generateTrialBalance(this.rp).subscribe(function (data) {
            _this.trans = data;
        }, function (err) { });
    };
    FinanceReportComponent.prototype.Enquiry = function () {
        var _this = this;
        this._api.Enquiry(this.rp).subscribe(function (data) {
            _this.enquiry = data.trans;
            _this.cash = data.cash;
            _this.getTotal();
        }, function (err) { });
    };
    FinanceReportComponent.prototype.getTotal = function () {
        var _this = this;
        this.init();
        this.trans.forEach(function (e) {
            _this.total.opening += e.openingbalance;
            _this.total.credit += e.credit;
            _this.total.debit += e.debit;
            _this.total.balance += e.closingbalance;
        });
    };
    FinanceReportComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.rp = { id: '', start: null, end: null };
            this.cash = { opening: 0, credit: 0, debit: 0, balance: 0 };
        }
    };
    FinanceReportComponent.prototype.init = function () {
        this.total = { opening: 0, credit: 0, debit: 0, balance: 0 };
    };
    FinanceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finance-report',
            template: __webpack_require__(/*! ./finance-report.component.html */ "./src/app/views/finance/finance-report/finance-report.component.html"),
            styles: [__webpack_require__(/*! ./finance-report.component.css */ "./src/app/views/finance/finance-report/finance-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__["TellerService"], src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]])
    ], FinanceReportComponent);
    return FinanceReportComponent;
}());



/***/ }),

/***/ "./src/app/views/finance/finance-summary/finance-summary.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/views/finance/finance-summary/finance-summary.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/finance/finance-summary/finance-summary.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/finance/finance-summary/finance-summary.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-md-10\">\r\n    <h2>Finance Summary</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"dashboard\">dashboard</a></li>\r\n      <li><a>Finance</a></li>\r\n      <li class=\"active\">\r\n        <strong>Summary</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n    <div class=\"title-action\">\r\n      <a (click)=\"list = true\" class=\"btn btn-primary\" *ngIf=\"!list\">Transfer</a> \r\n      <a (click)=\"list = false\" class=\"btn btn-primary\" *ngIf=\"list\">Summary</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"!list\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <h5>Summary</h5>\r\n          <div class=\"ibox-tools\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n              <i class=\"fa fa-wrench\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-3 col-md-offset-8\">\r\n                <form class=\"form-horizontal\" method=\"Post\" #daybookForm=\"ngForm\" (ngSubmit)=\"fetchSummary()\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>Select Date *</label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-btn\">\r\n                          <button type=\"button\" class=\"btn btn-white\"><i class=\"fa fa-calendar\"></i></button></span>\r\n                        <input type=\"date\" class=\"form-control\" name=\"date\" [(ngModel)]=\"val\" required />\r\n                        <span class=\"input-group-btn\">\r\n                          <button type=\"submit\" class=\"btn btn-info\">Generate</button>\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <table class=\"footable table table-stripped\" data-page-size=\"8\" data-filter=#filter>\r\n                <thead>\r\n                  <tr>\r\n                    <th>S/N</th>\r\n                    <th>Code</th>\r\n                    <th>Teller</th>\r\n                    <th>User</th>\r\n                    <th>Trans</th>\r\n                    <!-- <th>Opening</th> -->\r\n                    <th>Credit</th>\r\n                    <th>Debit</th>\r\n                    <th>Balance</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let t of teller; let i=index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{t.code}}</td>\r\n                    <td>{{t.name}}</td>\r\n                    <td>{{t.user}}</td>\r\n                    <td>{{t.nooftrans}}</td>\r\n                    <!-- <td>{{t.opening}}</td> -->\r\n                    <td>{{t.credit}}</td>\r\n                    <td>{{t.debit}}</td>\r\n                    <td>{{t.balance}}</td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr>\r\n                    <td colspan=\"8\">\r\n                      <ul class=\"pagination pull-right\"></ul>\r\n                    </td>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <form class=\"form-horizontal\" method=\"Post\" action=\"\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\">Total Credit</label>\r\n                    <div class=\"col-md-8\">\r\n                      <input type=\"text\" class=\"form-control\" name=\"credit\" [(ngModel)]=\"total.credit\" required />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\">Total Debit</label>\r\n                    <div class=\"col-md-8\">\r\n                      <input type=\"text\" class=\"form-control\" name=\"debit\" [(ngModel)]=\"total.debit\" required />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-md-offset-4\"><br />\r\n                  <div class=\"form-group\">\r\n                    <label>Total Balance</label>\r\n                    <input type=\"number\" class=\"input-sm form-control\" name=\"Amount\" [(ngModel)]=\"total.balance\" required>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"list\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\"> {{ tf | json }} {{ cash | json }}\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <h5 class=\"text-navy\">Cash Transfer</h5>\r\n          <div class=\"ibox-tools\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n              <i class=\"fa fa-wrench\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <form class=\"form-horizontal\" role=\"form\" method=\"Post\" #transferForm=\"ngForm\" (ngSubmit)=\"postTransfer()\">\r\n              <div class=\"col-md-5\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"col-md-4 control-label\">Amount </label>\r\n                  <div class=\"col-md-8\">\r\n                    <input type=\"text\" placeholder=\"Amount\" class=\"form-control\" name=\"amount\" [(ngModel)]=\"tf.amount\" required>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"col-md-4 control-label\">From</label>\r\n                  <div class=\"col-md-8\">\r\n                    <select class=\"form-control\" name=\"tellerid\" [(ngModel)]=\"tf.tellerid\" (change)=\"from()\" required>\r\n                      <option value=\"\">Choose From Option..</option>\r\n                      <option *ngFor=\"let t of teller\" value=\"{{t.tellerid}}\">{{t.user}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"col-md-4 control-label\">To Cashbook</label>\r\n                  <div class=\"col-md-8\">\r\n                    <select class=\"form-control\" name=\"nominalid\" (change)=\"to()\" [(ngModel)]=\"tf.nominalid\" required>\r\n                      <option value=\"\" selected readonly>Choose From Option..</option>\r\n                      <option *ngFor=\"let t of cashbook\" value=\"{{t.nominalid}}\">{{t.code}} {{t.description}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"col-md-4 control-label\">Reference</label>\r\n                  <div class=\"col-md-8\">\r\n                    <input type=\"text\" name=\"reference\" [(ngModel)]=\"tf.reference\" placeholder=\"Reference\" class=\"form-control\" required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <br><br>\r\n                <div class=\"col-md-5 col-md-offset-1\">\r\n                  <div class=\"form-group\">\r\n                    <label>Current Balance</label>\r\n                    <input type=\"text\" placeholder=\"Current Balance\" class=\"form-control\" name=\"from\" [(ngModel)]=\"cash.from\"\r\n                      readonly>\r\n                    <br />\r\n                    <input type=\"text\" placeholder=\"Current Balance\" class=\"form-control\" name=\"to\" [(ngModel)]=\"cash.to\"\r\n                      readonly>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-5 col-md-offset-1\">\r\n                  <div class=\"form-group\">\r\n                    <label>Balance After</label>\r\n                    <input type=\"text\" placeholder=\"Balance After\" class=\"form-control\" name=\"frombal\" [(ngModel)]=\"cash.frombal\"\r\n                      [value]=\"cash.from - tf.amount\" readonly>\r\n                    <br />\r\n                    <input type=\"text\" placeholder=\"Balance After\" class=\"form-control\" name=\"tobal\" [(ngModel)]=\"cash.tobal\"\r\n                      [value]=\"cash.to + tf.amount\" readonly>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-md-offset-4 col-md-12\">\r\n                    <button class=\"btn btn-rounded btn-primary\" type=\"submit\">Transfer </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/finance/finance-summary/finance-summary.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/finance/finance-summary/finance-summary.component.ts ***!
  \****************************************************************************/
/*! exports provided: FinanceSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceSummaryComponent", function() { return FinanceSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FinanceSummaryComponent = /** @class */ (function () {
    function FinanceSummaryComponent(_api, _set, _use) {
        this._api = _api;
        this._set = _set;
        this._use = _use;
    }
    FinanceSummaryComponent.prototype.ngOnInit = function () {
        this.val = null;
        this.init();
        this.formReset();
        this.getAll();
        this.getAllTellers();
    };
    FinanceSummaryComponent.prototype.getAll = function () {
        var _this = this;
        this._api.getSummary().subscribe(function (data) {
            _this.teller = data;
            _this.getTotal();
        }, function (err) { });
    };
    FinanceSummaryComponent.prototype.fetchSummary = function () {
        var _this = this;
        this._api.getSummarys(this.val).subscribe(function (data) {
            _this.teller = data;
            _this.getTotal();
        }, function (err) { });
    };
    FinanceSummaryComponent.prototype.getTotal = function () {
        var _this = this;
        this.init();
        this.teller.forEach(function (e) {
            _this.total.trans += e.nooftrans;
            _this.total.credit += e.credit;
            _this.total.debit += e.debit;
            _this.total.balance += e.balance;
        });
    };
    FinanceSummaryComponent.prototype.getAllTellers = function () {
        var _this = this;
        this._api.getTellers().subscribe(function (data) {
            _this.teller = data;
            console.log(_this.teller);
        }, function (err) { });
        this._set.getNominalsByGlType('Cashbook').subscribe(function (data) {
            _this.cashbook = data;
            console.log(_this.cashbook);
        }, function (err) { });
    };
    FinanceSummaryComponent.prototype.from = function () {
        var _this = this;
        // console.log(event);
        this._api.getTellerBalance(this.tf.tellerid).subscribe(function (data) {
            _this.cash.from = data;
        }, function (err) {
            _this._use.showMsg('error', 'Teller Balance', 'Unable to Your current Balance');
        });
    };
    FinanceSummaryComponent.prototype.to = function () {
        var _this = this;
        this._api.getNominalBalance(this.tf.nominalid).subscribe(function (data) {
            _this.cash.to = data;
        }, function (err) {
            _this._use.showMsg('error', 'Teller Balance', 'Unable to Teller current Balance');
        });
    };
    FinanceSummaryComponent.prototype.postTransfer = function () {
        var _this = this;
        this._api.getCode('Transaction').subscribe(function (data) {
            _this.tf.transcode = data;
            _this.Next();
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Generate New Code for Employee');
        });
    };
    FinanceSummaryComponent.prototype.Next = function () {
        var _this = this;
        this._api.postNominalTransfer(this.tf).subscribe(function (data) {
            _this.res = data;
            _this.formReset();
            _this._use.showMsg('success', 'Transfer Successfull', 'Transfer Transaction has been posted successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Transfer Fail', 'Unable to Process Transfer');
        });
    };
    FinanceSummaryComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.tf = {
                id: 0,
                transcode: '', type: '', source: '', method: 'cash', amount: 0, nominalid: '',
                reference: '', tellerid: '', userid: this._use.active.Id, date: this._use.date
            };
            this.cash = { frombal: 0, from: 0, tobal: 0, to: 0 };
        }
    };
    FinanceSummaryComponent.prototype.init = function () {
        this.total = { trans: 0, credit: 0, debit: 0, balance: 0 };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('transferForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], FinanceSummaryComponent.prototype, "any", void 0);
    FinanceSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finance-summary',
            template: __webpack_require__(/*! ./finance-summary.component.html */ "./src/app/views/finance/finance-summary/finance-summary.component.html"),
            styles: [__webpack_require__(/*! ./finance-summary.component.css */ "./src/app/views/finance/finance-summary/finance-summary.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__["TellerService"], src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_4__["SetupService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]])
    ], FinanceSummaryComponent);
    return FinanceSummaryComponent;
}());



/***/ }),

/***/ "./src/app/views/finance/finance-transfer/finance-transfer.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/views/finance/finance-transfer/finance-transfer.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/finance/finance-transfer/finance-transfer.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/finance/finance-transfer/finance-transfer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-md-6\">\n      <h2>Teller Tranfer</h2>\n      <ol class=\"breadcrumb\">\n        <li><a>Dashboard</a></li>\n        <li><a>Teller</a></li>\n        <li class=\"active\"><strong>Cash Transfer</strong></li>\n      </ol>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"title-action\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\">\n            <h5 class=\"text-navy\">Cash Transfer</h5>\n            <div class=\"ibox-tools\">\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                <i class=\"fa fa-wrench\"></i>\n              </a>\n            </div>\n          </div>\n          <div class=\"ibox-content\">\n            <div class=\"row\">\n              <form class=\"form-horizontal\" role=\"form\" method=\"Post\" #transferForm=\"ngForm\">\n                <div class=\"col-md-5\">\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Amount </label>\n                    <div class=\"col-md-8\">\n                      <input type=\"text\" placeholder=\"Amount\" class=\"form-control\" name=\"amount\" [(ngModel)]=\"tf.amount\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">From</label>\n                    <div class=\"col-md-8\">\n                      <select class=\"form-control\" name=\"from\" [(ngModel)]=\"tf.id\" required >\n                        <option value=\"\">Choose From Option..</option>\n                        <option *ngFor=\"let n of teller\" [value]=\"n.tellerid\">{{n.user}}</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">To</label>\n                    <div class=\"col-md-8\">\n                      <select class=\"form-control\" name=\"tellerid\" [(ngModel)]=\"tf.tellerid\" required>\n                        <option value=\"\" selected readonly>Choose From Option..</option>\n                        <option *ngFor=\"let t of teller\" [value]=\"t.tellerid\">{{t.user}}</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Reference</label>\n                    <div class=\"col-md-8\">\n                      <input type=\"text\" name=\"reference\" [(ngModel)]=\"tf.reference\" placeholder=\"Reference\" class=\"form-control\" required>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-7\">\n                  <br><br>\n                  <div class=\"col-md-5 col-md-offset-1\">\n                    <div class=\"form-group\">\n                      <label>Current Balance</label>\n                      <input type=\"text\" placeholder=\"Current Balance\" class=\"form-control\" name=\"from\" [(ngModel)]=\"cash.from\" readonly>\n                      <br />\n                      <input type=\"text\" placeholder=\"Current Balance\" class=\"form-control\" name=\"to\" [(ngModel)]=\"cash.to\" readonly>\n                    </div>\n                  </div>\n                  <div class=\"col-md-5 col-md-offset-1\">\n                    <div class=\"form-group\">\n                      <label>Balance After</label>\n                      <input type=\"text\" placeholder=\"Balance After\" class=\"form-control\" name=\"frombal\" [(ngModel)]=\"cash.frombal\" [value]=\"cash.from - tf.amount\" readonly>\n                      <br />\n                      <input type=\"text\" placeholder=\"Balance After\" class=\"form-control\" name=\"tobal\" [(ngModel)]=\"cash.tobal\" [value]=\"cash.to + tf.amount\" readonly>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <div class=\"col-md-offset-4 col-md-12\">\n                      <button class=\"btn btn-rounded btn-primary\" type=\"submit\">Transfer </button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/views/finance/finance-transfer/finance-transfer.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/finance/finance-transfer/finance-transfer.component.ts ***!
  \******************************************************************************/
/*! exports provided: FinanceTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceTransferComponent", function() { return FinanceTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FinanceTransferComponent = /** @class */ (function () {
    function FinanceTransferComponent(_use) {
        this._use = _use;
    }
    FinanceTransferComponent.prototype.ngOnInit = function () {
        this.formReset();
    };
    FinanceTransferComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.tf = {
                id: 0,
                transcode: '', type: '', source: '', method: 'cash', amount: 0, nominalid: '',
                reference: '', tellerid: '', userid: this._use.active.Id, date: this._use.date
            };
            this.cash = { frombal: 0, from: 0, tobal: 0, to: 0 };
        }
    };
    FinanceTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finance-transfer',
            template: __webpack_require__(/*! ./finance-transfer.component.html */ "./src/app/views/finance/finance-transfer/finance-transfer.component.html"),
            styles: [__webpack_require__(/*! ./finance-transfer.component.css */ "./src/app/views/finance/finance-transfer/finance-transfer.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]])
    ], FinanceTransferComponent);
    return FinanceTransferComponent;
}());



/***/ }),

/***/ "./src/app/views/inventory/inventory-issue/inventory-issue.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-issue/inventory-issue.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/inventory/inventory-issue/inventory-issue.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-issue/inventory-issue.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  inventory-issue works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/inventory/inventory-issue/inventory-issue.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-issue/inventory-issue.component.ts ***!
  \******************************************************************************/
/*! exports provided: InventoryIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryIssueComponent", function() { return InventoryIssueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryIssueComponent = /** @class */ (function () {
    function InventoryIssueComponent() {
    }
    InventoryIssueComponent.prototype.ngOnInit = function () {
    };
    InventoryIssueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory-issue',
            template: __webpack_require__(/*! ./inventory-issue.component.html */ "./src/app/views/inventory/inventory-issue/inventory-issue.component.html"),
            styles: [__webpack_require__(/*! ./inventory-issue.component.css */ "./src/app/views/inventory/inventory-issue/inventory-issue.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InventoryIssueComponent);
    return InventoryIssueComponent;
}());



/***/ }),

/***/ "./src/app/views/inventory/inventory-item/additem/additem.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-item/additem/additem.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/inventory/inventory-item/additem/additem.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-item/additem/additem.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <div class=\"col-sm-4\">\r\n      <h2 *ngIf=\"!edit\">Add Item</h2>\r\n      <h2 *ngIf=\"edit\">Edit Item</h2>\r\n      <ol class=\"breadcrumb\">\r\n        <li routerLink=\"dashboard\"><a>Dashboard</a></li>\r\n        <li><a>Inventory</a></li>\r\n        <li><a>Item</a></li>\r\n        <li class=\"active\" *ngIf=\"!edit\"><strong>Add</strong></li>\r\n        <li class=\"active\" *ngIf=\"edit\"><strong>Edit</strong></li>\r\n      </ol>\r\n    </div>\r\n    <div class=\"col-sm-2 pull-right\">\r\n      <div class=\"title-action\">\r\n        <a routerLink=\"/inventory/items\" class=\"btn Add btn-primary\">Back</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <form class=\"m-t form\" method=\"Post\" #itemForm=\"ngForm\" (ngSubmit)=\"postItem()\">\r\n          <div class=\"ibox float-e-margins\">\r\n            <div class=\"ibox-title\">\r\n              <h5 class=\"text-navy\" *ngIf=\"!edit\">Add Item</h5>\r\n              <h5 class=\"text-navy\" *ngIf=\"edit\">Edit Item </h5>\r\n              <div class=\"ibox-tools\">\r\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                  <i class=\"fa fa-wrench\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"ibox-content\">\r\n              <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>Item Name</label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-user-plus\"></i></span>\r\n                        <input type=\"text\" name=\"itemName\" [(ngModel)]=\"item.name\" placeholder=\"Item Name\" class=\"form-control\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Purchase Price: </label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-money\"></i></span>\r\n                        <input type=\"text\" name=\"price\" [(ngModel)]=\"item.price\" placeholder=\"Price\" class=\"form-control\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Sales Price </label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-money\"></i></span>\r\n                        <input type=\"text\" name=\"salesprice\" [(ngModel)]=\"item.saleprice\" placeholder=\"Sales Price\" class=\"form-control\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Description</label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-newspaper-o\"></i></span>\r\n                        <textarea type=\"text\" rows=\"2\" name=\"description\" [(ngModel)]=\"item.description\" placeholder=\"Description\" class=\"form-control\" required></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-8 col-md-12\">\r\n                      <a class=\"btn btn-sm btn-white btn-rounded\" type=\"cancel\">Cancel</a>\r\n                      <button class=\"btn btn-sm btn-rounded btn-primary\" *ngIf=\"!edit\" [disabled]=\"itemForm.invalid\" type=\"submit\">Add</button>\r\n                      <button class=\"btn btn-sm btn-rounded btn-warning\" *ngIf=\"edit\"(click)=\"putItem()\" [disabled]=\"itemForm.invalid\" type=\"button\">Uptade </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/views/inventory/inventory-item/additem/additem.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-item/additem/additem.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdditemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditemComponent", function() { return AdditemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/inventory.service */ "./src/app/services/inventory.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdditemComponent = /** @class */ (function () {
    function AdditemComponent(_api, _use, _nav, _route) {
        this._api = _api;
        this._use = _use;
        this._nav = _nav;
        this._route = _route;
    }
    AdditemComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAll();
    };
    AdditemComponent.prototype.getAll = function () {
        this.id = this._route.snapshot.paramMap.get('id');
        this.getItem(this.id); // console.log(this.id);
    };
    AdditemComponent.prototype.getItem = function (id) {
        var _this = this;
        if (id && id !== 0) {
            this.edit = true;
            this._api.getItem(id).subscribe(function (data) {
                _this.item = data;
            }, function (err) { alert(err.statusText); });
        }
        else {
            this.edit = false;
            this.formReset();
        }
    };
    AdditemComponent.prototype.postItem = function () {
        var _this = this;
        this._api.getCode('Item').subscribe(function (data) {
            _this.item.code = data;
            _this.addItem(_this.item);
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Generate New Code for Item');
        });
    };
    AdditemComponent.prototype.addItem = function (item) {
        var _this = this;
        this._api.postItem(item).subscribe(function (data) {
            _this.res = data;
            _this.formReset(_this.any);
            _this._use.showMsg('success', 'Item Added', 'Added to list Successfully');
            _this._nav.navigate(['/inventory/items']);
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Add New Item');
        });
    };
    AdditemComponent.prototype.putItem = function () {
        var _this = this;
        this.item.muserid = this._use.active.Id;
        this.item.mdate = new Date();
        this._api.putItem(this.item.itemid, this.item).subscribe(function (data) {
            _this.res = data;
            _this.formReset(_this.any);
            _this._use.showMsg('success', 'Item Updated', 'Details Updated Successfully');
            _this._nav.navigate(['/inventory/items']);
        }, function (err) {
            _this._use.showMsg('error', 'Updated Fail', 'Unable to Update Details');
        });
    };
    AdditemComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.item = {
                itemid: 0, name: '', code: '', description: '', price: 0, saleprice: 0,
                userid: this._use.active.Id, date: new Date(), muserid: null, mdate: null
            };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('itemForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], AdditemComponent.prototype, "any", void 0);
    AdditemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-additem',
            template: __webpack_require__(/*! ./additem.component.html */ "./src/app/views/inventory/inventory-item/additem/additem.component.html"),
            styles: [__webpack_require__(/*! ./additem.component.css */ "./src/app/views/inventory/inventory-item/additem/additem.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_inventory_service__WEBPACK_IMPORTED_MODULE_2__["InventoryService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AdditemComponent);
    return AdditemComponent;
}());



/***/ }),

/***/ "./src/app/views/inventory/inventory-item/inventory-item.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-item/inventory-item.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/inventory/inventory-item/inventory-item.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-item/inventory-item.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-sm-6\">\r\n    <h2>View Item</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li routerLink=\"dashboard\"><a>Dashboard</a></li>\r\n      <li><a>Inventory</a></li>\r\n      <li><a>Item</a></li>\r\n      <li class=\"active\"><strong>List</strong></li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-sm-2 pull-right\">\r\n    <div class=\"title-action\">\r\n      <a routerLink=\"add\" class=\"btn btn-primary\">Add item</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"title-action\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" ng-model=\"SearchData\" id=\"data\" class=\"form-control\" required>\r\n        <span class=\"input-group-btn\">\r\n          <button type=\"button\" id=\"Search\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i></button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper View wrapper-content animated Blog fadeInRight\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-4\" *ngFor=\"let i of items; let i=index\">\r\n      <div class=\"contact-box\">\r\n        <a>\r\n          <div class=\"col-sm-9 col-xs-12\">\r\n            <h3><strong>{{ i.name }}</strong></h3>\r\n            <ul class=\"list-unstyled m-t-md\">\r\n              <li>\r\n                <span class=\"fa fa-superpowers m-r-xs\"></span>\r\n                <label></label> {{ i.code }} <br>\r\n                <span class=\"fa fa-money m-r-xs\"></span>\r\n                <label></label> {{ i.price|currency:'₵ '}}||{{i.saleprice|currency:'₵ ' }} <br>\r\n                <span class=\"fa fa-bandcamp m-r-xs\"></span>\r\n                <label></label> {{ i.stock[0].quantity }} <br>\r\n                <span class=\"fa fa-calendar m-r-xs\"></span>\r\n                <label></label> {{ i.date | date:'short' }} <br>\r\n                <span class=\"fa fa-handshake-o m-r-xs\"></span>\r\n                <label></label> {{ i.description }} <br>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </a>\r\n        <div class=\"contact-box-foot\">\r\n          <div class=\"btn-group\">\r\n            <a [routerLink]=\"['edit',i.itemid]\" class=\"btn btn-xs btn-white\">\r\n              <i class=\"fa fa-edit\"></i> Edit</a>\r\n            <a [routerLink]=\"['stock',i.itemid]\" class=\"btn btn-xs btn-primary\">\r\n              <i class=\"fa fa-edit\"></i> Add Stock</a>\r\n            <a (click)=\"delItem(i)\" class=\"btn btn-xs btn-danger\">\r\n              <i class=\"fa fa-user-plus\"></i> Delete</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12 text-center\">\r\n    <button class=\"btn btn-default btn-circle btn-lg\" type=\"button\"><i class=\"fa fa-refresh fa-spin\"></i></button>\r\n  </div><br><br>\r\n</div>"

/***/ }),

/***/ "./src/app/views/inventory/inventory-item/inventory-item.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-item/inventory-item.component.ts ***!
  \****************************************************************************/
/*! exports provided: InventoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryItemComponent", function() { return InventoryItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/inventory.service */ "./src/app/services/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryItemComponent = /** @class */ (function () {
    function InventoryItemComponent(_ser) {
        this._ser = _ser;
    }
    InventoryItemComponent.prototype.ngOnInit = function () {
        this.getAllItem();
    };
    InventoryItemComponent.prototype.getAllItem = function () {
        var _this = this;
        this._ser.getItems().subscribe(function (data) {
            _this.items = data;
        }, function (err) { alert(err.statusText); });
    };
    InventoryItemComponent.prototype.delItem = function (dat) {
        var _this = this;
        this._ser.delItem(dat.itemid).subscribe(function (data) {
            _this.res = data;
            _this.items.slice(dat);
        }, function (err) { alert(err.statusText); });
    };
    InventoryItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory-item',
            template: __webpack_require__(/*! ./inventory-item.component.html */ "./src/app/views/inventory/inventory-item/inventory-item.component.html"),
            styles: [__webpack_require__(/*! ./inventory-item.component.css */ "./src/app/views/inventory/inventory-item/inventory-item.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"]])
    ], InventoryItemComponent);
    return InventoryItemComponent;
}());



/***/ }),

/***/ "./src/app/views/inventory/inventory-stock/addstock/addstock.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-stock/addstock/addstock.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/inventory/inventory-stock/addstock/addstock.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-stock/addstock/addstock.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <div class=\"col-sm-4\">\r\n      <h2 *ngIf=\"!edit\">Add Stock</h2>\r\n      <h2 *ngIf=\"edit\">Edit Stock</h2>\r\n      <ol class=\"breadcrumb\">\r\n        <li routerLink=\"dashboard\"><a>Dashboard</a></li>\r\n        <li><a>Inventory</a></li>\r\n        <li><a>stock</a></li>\r\n        <li class=\"active\" *ngIf=\"!edit\"><strong>Add</strong></li>\r\n        <li class=\"active\" *ngIf=\"edit\"><strong>Edit</strong></li>\r\n      </ol>\r\n    </div>\r\n    <div class=\"col-sm-2 pull-right\">\r\n      <div class=\"title-action\">\r\n        <a routerLink=\"/inventory/items/stock/logs\" class=\"btn Add btn-primary\">All Logs </a>  \r\n        <a routerLink=\"/inventory/items\" class=\"btn Add btn-primary\">Back</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-5\">\r\n        <form class=\"m-t form\" method=\"Post\" #stockForm=\"ngForm\" (ngSubmit)=\"postStock()\">\r\n          <div class=\"ibox float-e-margins\">\r\n            <div class=\"ibox-title\">\r\n              <h5 class=\"text-navy\" *ngIf=\"!edit\">Add Stock</h5>\r\n              <h5 class=\"text-navy\" *ngIf=\"edit\">Edit Stock </h5>\r\n              <div class=\"ibox-tools\">\r\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                  <i class=\"fa fa-wrench\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"ibox-content\">\r\n              <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>Item</label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-pagelines\"></i></span>\r\n                        <!-- <input type=\"text\" name=\"itemid\" [(ngModel)]=\"stock.itemid\" placeholder=\"Item ID\" class=\"form-control\"> -->\r\n                        <select name=\"itemid\" [(ngModel)]=\"stock.itemid\" class=\"form-control\" required>\r\n                          <option value=\"\" selected readonly disabled>select item</option>\r\n                          <option *ngFor=\"let t of items\" value=\"{{t.itemid}}\">{{t.name}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Quantity </label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-shopping-cart\"></i></span>\r\n                        <input type=\"number\" name=\"quantity\" [(ngModel)]=\"stock.quantity\" placeholder=\"Quantity\" class=\"form-control\" required>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-6 col-md-12\">\r\n                      <a class=\"btn btn-sm btn-white btn-rounded Back\" type=\"cancel\">Cancel</a>\r\n                      <button class=\"btn btn-sm btn-rounded btn-primary\" *ngIf=\"!edit\" type=\"submit\">Add</button>\r\n                      <button class=\"btn btn-sm btn-rounded btn-warning\" *ngIf=\"edit\" type=\"button\">Uptade</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-md-7\">\r\n        <div class=\"ibox\">\r\n          <div class=\"ibox-content\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6 col-sm-offset-6\">\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\"> <span class=\"input-group-btn\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"table-responsive\">\r\n              <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>S/N</th>\r\n                    <th data-hide=\"phone\">Quantity</th>\r\n                    <th data-hide=\"phone\">Amount</th>\r\n                    <th data-hide=\"phone\">Date</th>\r\n                    <th data-hide=\"phone\">User</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let l of logs; let i=index\">\r\n                    <td> {{i + 1}}</td>\r\n                    <td>{{l.quantity}}</td>\r\n                    <td>{{l.price}}</td>\r\n                    <td>{{l.date|date:'short'}}</td>\r\n                    <td>{{l.userid}}</td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr>\r\n                    <td colspan=\"7\">\r\n                      <ul class=\"pagination pull-right\"></ul>\r\n                    </td>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/views/inventory/inventory-stock/addstock/addstock.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-stock/addstock/addstock.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddstockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddstockComponent", function() { return AddstockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/inventory.service */ "./src/app/services/inventory.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddstockComponent = /** @class */ (function () {
    function AddstockComponent(_api, _use, _nav, _route) {
        this._api = _api;
        this._use = _use;
        this._nav = _nav;
        this._route = _route;
    }
    AddstockComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAll();
    };
    AddstockComponent.prototype.getAll = function () {
        var _this = this;
        this.id = this._route.snapshot.paramMap.get('id');
        this.getStock(this.id); // console.log(this.id);
        this._api.getItems().subscribe(function (data) {
            _this.items = data;
            _this.stock.itemid = _this.id;
        }, function (err) {
            _this._use.showMsg('error', 'Item Fetching Fail', 'Unable to Fetch List of Item in Database');
        });
    };
    AddstockComponent.prototype.getStock = function (id) {
        var _this = this;
        if (id && id !== 0) {
            this.edit = false;
            this._api.getStockLog(id).subscribe(function (data) {
                _this.logs = data;
            }, function (err) {
                _this._use.showMsg('error', 'Stock Log Fetching Fail', 'Unable to Fetch Stock Log for Selected item');
            });
        }
        else {
            this.edit = false;
            this._nav.navigate(['/inventory/items']);
        }
    };
    AddstockComponent.prototype.postStock = function () {
        var _this = this;
        this._api.postStock(this.stock).subscribe(function (data) {
            _this.res = data;
            _this.formReset(_this.any);
            _this._use.showMsg('success', 'Stock Added', 'Added to list Successfully');
            _this._nav.navigate(['/inventory/items']);
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Add New Stock');
        });
    };
    AddstockComponent.prototype.putStock = function () {
        var _this = this;
        this.stock.muserid = this._use.active.Id;
        this.stock.mdate = new Date();
        this._api.putStock(this.stock.stockid, this.stock).subscribe(function (data) {
            _this.res = data;
            _this.formReset(_this.any);
            _this._use.showMsg('success', 'Stock Updated', 'Details Updated Successfully');
            _this._nav.navigate(['/inventory/stock']);
        }, function (err) {
            _this._use.showMsg('error', 'Updated Fail', 'Unable to Update Details');
        });
    };
    AddstockComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.stock = { stockid: 0, itemid: null, quantity: null, userid: this._use.active.Id, date: new Date(), muserid: null, mdate: null };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stockForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], AddstockComponent.prototype, "any", void 0);
    AddstockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addstock',
            template: __webpack_require__(/*! ./addstock.component.html */ "./src/app/views/inventory/inventory-stock/addstock/addstock.component.html"),
            styles: [__webpack_require__(/*! ./addstock.component.css */ "./src/app/views/inventory/inventory-stock/addstock/addstock.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_inventory_service__WEBPACK_IMPORTED_MODULE_2__["InventoryService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AddstockComponent);
    return AddstockComponent;
}());



/***/ }),

/***/ "./src/app/views/inventory/inventory-stock/inventory-stock.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-stock/inventory-stock.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/inventory/inventory-stock/inventory-stock.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-stock/inventory-stock.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-sm-6\">\r\n    <h2>View Stock</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li routerLink=\"dashboard\"><a>Dashboard</a></li>\r\n      <li><a>Inventory</a></li>\r\n      <li><a>Stock</a></li>\r\n      <li class=\"active\"><strong>List</strong></li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-sm-2 pull-right\">\r\n    <div class=\"title-action\">\r\n      <a routerLink=\"add\" class=\"btn btn-primary\">Add Stock</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"title-action\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" id=\"data\" class=\"form-control\" required>\r\n        <span class=\"input-group-btn\">\r\n          <button type=\"button\" id=\"Search\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i></button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"ibox\">\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-sm-offset-7\">\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\"> <span class=\"input-group-btn\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S/N</th>\r\n                  <th data-hide=\"phone\">Item</th>\r\n                  <th data-hide=\"phone\">Quantity</th>\r\n                  <th data-hide=\"phone\">Amount</th>\r\n                  <th data-hide=\"phone\">Date</th>\r\n                  <th data-hide=\"phone\">User</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let l of stocklogs; let i=index\">\r\n                  <td> {{i + 1}}</td>\r\n                  <td>{{l.name}}</td>\r\n                  <td>{{l.quantity}}</td>\r\n                  <td>{{l.price}}</td>\r\n                  <td>{{l.date|date:'short'}}</td>\r\n                  <td>{{l.userid}}</td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"7\">\r\n                    <ul class=\"pagination pull-right\"></ul>\r\n                  </td>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\" *ngFor=\"let s of stock; let s=index\">\r\n      <div class=\"contact-box\">\r\n        <a>\r\n          <div class=\"col-sm-3 col-xs-06 hidden\">\r\n            <div class=\"text-center\">\r\n              <img alt=\"image\" class=\"img-circle m-t-xs img-responsive\" src=\"\" onerror=\"this.src='assets/images/acyst-logo.png'\">\r\n              <div class=\"m-t-xs font-bold\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-9 col-xs-12\">\r\n            <h3><strong>{{ s.Name }}</strong></h3>\r\n            <ul class=\"list-unstyled m-t-md\">\r\n              <li>\r\n                <span class=\"fa fa-calendar m-r-xs\"></span>\r\n                <label></label> {{ s.CreatedDate | date:'medium' }} <br>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </a>\r\n        <div class=\"contact-box-foot\">\r\n          <div class=\"btn-group\">\r\n            <a [routerLink]=\"['edit',s.stockid]\" class=\"btn btn-xs btn-white\"><i class=\"fa fa-edit\"></i> Edit</a>\r\n            <a (click)=\"delete(s)\" class=\"btn btn-xs btn-danger\"><i class=\"fa fa-user-plus\"></i> Delete</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12 text-center\">\r\n    <button class=\"btn btn-default btn-circle btn-lg\" type=\"button\"><i class=\"fa fa-refresh fa-spin\"></i></button>\r\n  </div><br><br>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/inventory/inventory-stock/inventory-stock.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-stock/inventory-stock.component.ts ***!
  \******************************************************************************/
/*! exports provided: InventoryStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryStockComponent", function() { return InventoryStockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/inventory.service */ "./src/app/services/inventory.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryStockComponent = /** @class */ (function () {
    function InventoryStockComponent(_ser, _use) {
        this._ser = _ser;
        this._use = _use;
    }
    InventoryStockComponent.prototype.ngOnInit = function () {
        this.getAllStock();
    };
    InventoryStockComponent.prototype.getAllStock = function () {
        var _this = this;
        this._ser.getStockLogs().subscribe(function (data) {
            _this.stocklogs = data;
        }, function (err) {
            _this._use.showMsg('error', 'Stock Log Fetching Fail', 'Unable to Fetch Stock Log from database');
        });
    };
    InventoryStockComponent.prototype.delStock = function (dat) {
        var _this = this;
        this._ser.delStock(dat.stockid).subscribe(function (data) {
            _this.res = data;
            _this.stocklogs.slice(dat);
        }, function (err) { alert(err.statusText); });
    };
    InventoryStockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory-stock',
            template: __webpack_require__(/*! ./inventory-stock.component.html */ "./src/app/views/inventory/inventory-stock/inventory-stock.component.html"),
            styles: [__webpack_require__(/*! ./inventory-stock.component.css */ "./src/app/views/inventory/inventory-stock/inventory-stock.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]])
    ], InventoryStockComponent);
    return InventoryStockComponent;
}());



/***/ }),

/***/ "./src/app/views/inventory/inventory-supply/inventory-supply.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-supply/inventory-supply.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/inventory/inventory-supply/inventory-supply.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-supply/inventory-supply.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-sm-4\">\r\n    <h2 *ngIf=\"!edit\">Add Supply</h2>\r\n    <h2 *ngIf=\"edit\">Edit Supply</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li routerLink=\"dashboard\"><a>Dashboard</a></li>\r\n      <li><a>Inventory</a></li>\r\n      <li><a>Supply</a></li>\r\n      <li class=\"active\" *ngIf=\"!edit\"><strong>Add</strong></li>\r\n      <li class=\"active\" *ngIf=\"edit\"><strong>Edit</strong></li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-sm-2 pull-right\">\r\n    <div class=\"title-action\">\r\n      <a routerLink=\"/inventory/supply\" class=\"btn Add btn-primary\">Refresh</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\">\r\n  {{ sal | json }}\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n      <form class=\"m-t form\" method=\"Post\" #saleForm=\"ngForm\" (ngSubmit)=\"postSupply()\">\r\n        <div class=\"ibox float-e-margins\">\r\n          <div class=\"ibox-title\">\r\n            <h5 class=\"text-navy\" *ngIf=\"!edit\">Add Supply</h5>\r\n            <h5 class=\"text-navy\" *ngIf=\"edit\">Edit Supply </h5>\r\n            <div class=\"ibox-tools\">\r\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                <i class=\"fa fa-wrench\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"ibox-content\">\r\n            <div class=\"panel-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"form-group\">\r\n                    <label>Item: </label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-pagelines\"></i></span>\r\n                      <select name=\"itemid\" [(ngModel)]=\"sal.itemid\" (change)=\"getItem(sal.itemid)\" class=\"form-control\" required>\r\n                        <option value=\"\" selected readonly disabled>select Item</option>\r\n                        <option *ngFor=\"let t of items\" value=\"{{t.itemid}}\">{{t.name}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group hidden\">\r\n                    <label>Price: </label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-money\"></i></span>\r\n                      <input type=\"number\" name=\"price\" [(ngModel)]=\"sal.price\" placeholder=\"Price Per Item\" class=\"form-control\" required readonly>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Quantity: </label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-shopping-cart\"></i></span>\r\n                      <input type=\"number\" name=\"quantity\" [(ngModel)]=\"sal.quantity\" placeholder=\"Quantity\" class=\"form-control\" (change)=\"amount()\" required>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Amount: </label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-money\"></i></span>\r\n                      <input type=\"number\" name=\"amount\" [(ngModel)]=\"sal.amount\" placeholder=\"Amount\" class=\"form-control\" value=\"{{sal.quantity * sal.price}}\" required readonly>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Type: </label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-pagelines\"></i></span>\r\n                      <select name=\"type\" [(ngModel)]=\"sal.type\" class=\"form-control\" required>\r\n                        <option value=\"\" selected readonly disabled>Choose Type</option>\r\n                        <option value=\"Kitchen\">Kitchen</option>\r\n                        <option value=\"Customer\">Customer</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Reference: </label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-bandcamp\"></i></span>\r\n                      <input type=\"text\" name=\"reference\" [(ngModel)]=\"sal.reference\" placeholder=\"Reference\" class=\"form-control\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-md-offset-6 col-md-12\">\r\n                    <a class=\"btn btn-sm btn-white btn-rounded\" type=\"cancel\">Cancel</a>\r\n                    <button class=\"btn btn-sm btn-rounded btn-primary\" *ngIf=\"!edit\" type=\"submit\">Supply</button>\r\n                    <button class=\"btn btn-sm btn-rounded btn-warning\" *ngIf=\"edit\" (click)=\"putSupply()\" type=\"button\">Uptade</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n      <div class=\"ibox\">\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-sm-offset-6\">\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\"> \r\n                <span class=\"input-group-btn\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S/N</th>\r\n                  <th>Item</th>\r\n                  <th>Price</th>\r\n                  <th>Quantity</th>\r\n                  <th>Amount</th>\r\n                  <th>Date</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let l of logs; let i=index\">\r\n                  <td> {{i + 1}}</td>\r\n                  <td>{{l.item.name}}</td>\r\n                  <td>{{l.price}}</td>\r\n                  <td>{{l.quantity}}</td>\r\n                  <td>{{l.amount}}</td>\r\n                  <td>{{l.date|date:'short'}}</td>\r\n                  <td>\r\n                    <div class=\"btn-group\">\r\n                      <button (click)=\"editSup(l.saleid)\" class=\"btn-white btn btn-xs\">Edit</button>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"7\">\r\n                    <ul class=\"pagination pull-right\"></ul>\r\n                  </td>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/inventory/inventory-supply/inventory-supply.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/inventory/inventory-supply/inventory-supply.component.ts ***!
  \********************************************************************************/
/*! exports provided: InventorySupplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventorySupplyComponent", function() { return InventorySupplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/inventory.service */ "./src/app/services/inventory.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InventorySupplyComponent = /** @class */ (function () {
    function InventorySupplyComponent(_api, _use, _nav, _route) {
        this._api = _api;
        this._use = _use;
        this._nav = _nav;
        this._route = _route;
    }
    InventorySupplyComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAll();
    };
    InventorySupplyComponent.prototype.getAll = function () {
        var _this = this;
        this.edit = false;
        this._api.getItems().subscribe(function (data) {
            _this.items = data;
        }, function (err) {
            _this._use.showMsg('error', 'Item Fetching Fail', 'Unable to Fetch List of Item in Database');
        });
        this._api.getSales().subscribe(function (data) {
            _this.logs = data;
        }, function (err) {
            _this._use.showMsg('error', 'Supply Log Fetching Fail', 'Unable to Fetch Stock Log for Selected item');
        });
    };
    InventorySupplyComponent.prototype.amount = function () {
        this.sal.amount = this.sal.quantity * this.sal.price;
    };
    InventorySupplyComponent.prototype.editSup = function (id) {
        this.sal = this.logs.find(function (s) { return s.saleid === id; });
        this.edit = true;
    };
    InventorySupplyComponent.prototype.getItem = function (id) {
        var _this = this;
        this._api.getItem(id).subscribe(function (data) {
            _this.sal.price = data.saleprice;
            _this._use.showMsg('success', 'Item Detail Fetching', 'Item Details Fetched Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Details Fetching', 'Unable to get Item Details');
        });
    };
    InventorySupplyComponent.prototype.postSupply = function () {
        var _this = this;
        this._api.postSale(this.sal).subscribe(function (data) {
            _this.res = data;
            _this.formReset();
            _this.getAll();
            _this._use.showMsg('success', 'Supply Added', 'Added to list Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Add New Supply');
        });
    };
    InventorySupplyComponent.prototype.putSupply = function () {
        var _this = this;
        this.sal.muserid = this._use.active.Id;
        this.sal.mdate = new Date();
        this._api.putSale(this.sal.saleid, this.sal).subscribe(function (data) {
            _this.res = data;
            _this.formReset();
            _this.getAll();
            _this._use.showMsg('success', 'Supply Updated', 'Details Updated Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Updated Fail', 'Unable to Update Details');
        });
    };
    InventorySupplyComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.sal = {
                saleid: 0, itemid: '', price: null, amount: null,
                quantity: 0, type: '', reference: '',
                userid: this._use.active.Id, date: new Date(), muserid: null, mdate: null
            };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('saleForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], InventorySupplyComponent.prototype, "any", void 0);
    InventorySupplyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory-supply',
            template: __webpack_require__(/*! ./inventory-supply.component.html */ "./src/app/views/inventory/inventory-supply/inventory-supply.component.html"),
            styles: [__webpack_require__(/*! ./inventory-supply.component.css */ "./src/app/views/inventory/inventory-supply/inventory-supply.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], InventorySupplyComponent);
    return InventorySupplyComponent;
}());



/***/ }),

/***/ "./src/app/views/login/forget-password/forget-password.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/views/login/forget-password/forget-password.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/login/forget-password/forget-password.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/login/forget-password/forget-password.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"passwordBox animated fadeInDown\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"ibox-content\">\n        <h2 class=\"font-bold\">Forgot password</h2>\n        <p>Enter your email address, your password will be reset and emailed to you.</p>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <form class=\"m-t\" role=\"form\" #resetForm=\"ngForm\" (ngSubmit)=\"Reset()\">\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" name=\"email\" [(ngModel)]=\"log.email\" required>\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary block full-width m-b\">Reset Password</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr />\n  <div class=\"row white\">\n    <div class=\"col-md-8\">\n      Copyright ACYST TECHNOLOGY\n    </div>\n    <div class=\"col-md-4 text-right\">\n      <small>© 2018</small>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/login/forget-password/forget-password.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/login/forget-password/forget-password.component.ts ***!
  \**************************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_signin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/signin.service */ "./src/app/services/signin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(_api, router) {
        this._api = _api;
        this.router = router;
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        this.init();
    };
    ForgetPasswordComponent.prototype.Reset = function () {
        var _this = this;
        this._api.resetUser(this.log).subscribe(function (data) {
            _this.router.navigate(['/login']);
            location.reload(true);
        }, function (err) { _this.isLoginError = true; console.log(err); });
    };
    ForgetPasswordComponent.prototype.init = function (form) {
        if (form != null) {
            form.reset();
        }
        this.log = { email: '' };
    };
    ForgetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/views/login/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.css */ "./src/app/views/login/forget-password/forget-password.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_signin_service__WEBPACK_IMPORTED_MODULE_1__["SigninService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/views/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginColumns\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 hidden\" align=\"center\">\r\n      <h2 class=\"font-bold text-white\">Welcome to Kentrud Catering Services</h2>\r\n      <h4 class=\"text-white\">Management All Resturant Activities in Realtime.</h4>\r\n      <br><br>\r\n    </div>\r\n    <div class=\"col-md-offset-2 col-md-7 col-md-offset-2\" align=\"center\">\r\n      <div class=\"ibox-content\">\r\n        <img src=\"assets/img/acyst-logo.png\" class=\"img-responsive img-circle img-thumbnail\" width=\"100px\">\r\n        <h2 class=\"font-bold text-center\">Kentrud Catering Services</h2>\r\n        <h4 class=\"font-bold text-center\">Login</h4>\r\n        <form class=\"m-t\" role=\"form\" #loginform=\"ngForm\" (ngSubmit)=\"login()\">\r\n          <div class=\"form-group msg\" id=\"msg\" *ngIf=\"isLoginError\">\r\n            <p id=\"text\">{{res}}</p>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group date\">\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\r\n              <input type=\"text\" name=\"username\" [(ngModel)]=\"log.username\" class=\"form-control input-md\" placeholder=\"Username\"\r\n                required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group date\">\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-eye\"></i></span>\r\n              <input type=\"password\" name=\"password\" [(ngModel)]=\"log.password\" class=\"form-control input-md\" placeholder=\"Password\"\r\n                required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"checkbox i-checks-rem pull-left\">\r\n              <label><input type=\"checkbox\"><i></i> Remember Me </label>\r\n            </div>\r\n          </div>\r\n          <button class=\"btn btn-md block full-width m-b btn-primary\" type=\"submit\">Login</button>\r\n          <a class=\"pull-right\" routerLink=\"/forgot_password\"><small>Forgot password?</small></a> <br>\r\n          <!-- <div class=\"hr-line-dashed\"></div> -->\r\n        </form>\r\n        <hr />\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <small>© 2018</small>\r\n          </div>\r\n          <div class=\"col-md-8 text-right\">\r\n            Copyright <a href=\"http://acyst.tech\"> ACYST TECHNOLOGY</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_signin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/signin.service */ "./src/app/services/signin.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_api, router, route, _msg) {
        this._api = _api;
        this.router = router;
        this.route = route;
        this._msg = _msg;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.resetLogin();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        // console.log(this.returnUrl);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._api.loginUser(this.log).subscribe(function (data) {
            localStorage.setItem('Token', JSON.stringify(data.access_token));
            localStorage.setItem('Date', JSON.stringify(data.date));
            _this.router.navigate([_this.returnUrl]);
            location.reload(true);
        }, function (err) { _this.isLoginError = true; console.log(err); });
    };
    LoginComponent.prototype.resetLogin = function (form) {
        if (form != null) {
            form.reset();
        }
        this.log = { username: '', password: '' };
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_signin_service__WEBPACK_IMPORTED_MODULE_2__["SigninService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/orders/order-list/order-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/orders/order-list/order-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/orders/order-list/order-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/orders/order-list/order-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  \n  <div>\n\n    <div class=\"wrapper wrapper-content animated fadeInRight\">\n      <div class=\"row\">\n        <div class=\"col-md-2 col-sm-3 col-xs-04\" *ngFor=\"let o of ready\">\n          <div class=\"ibox\">\n            <div class=\"ibox-content\" (click)=\"confirmOrder(o.orderid)\">\n              <h5>{{o.fullname}}</h5>\n              <h1 class=\"no-margins\">{{o.orderno}}</h1>\n              <div class=\"stat-percent font-bold text-navy\" *ngIf=\"o.status == 'Ready'\">{{o.status}} <i class=\"fa fa-bolt\"></i></div>\n              <!-- <div class=\"stat-percent font-bold text-danger\" *ngIf=\"o.status != 'Ready'\">{{o.status}} <i class=\"fa fa-level-down\"></i></div> -->\n              <small>{{o.date|date:'shortTime'}}</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2 col-sm-3 col-xs-04\" *ngFor=\"let o of orders\">\n          <div class=\"ibox\">\n            <div class=\"ibox-content\">\n              <h5>{{o.fullname}}</h5>\n              <h1 class=\"no-margins\">{{o.orderno}}</h1>\n              <div class=\"stat-percent font-bold text-navy\" *ngIf=\"o.status == 'Ready'\">{{o.status}} <i class=\"fa fa-bolt\"></i></div>\n              <div class=\"stat-percent font-bold text-danger\" *ngIf=\"o.status != 'ready'\">{{o.status}} <i class=\"fa fa-level-down\"></i></div>\n              <small>{{o.date|date:'shortTime'}}</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 hidden\">\n          <div class=\"ibox\">\n            <div class=\"ibox-content\">\n              <h5>Income last month</h5>\n              <h1 class=\"no-margins\">1 738,200</h1>\n              <div class=\"stat-percent font-bold text-navy\">98% <i class=\"fa fa-bolt\"></i></div>\n              <small>Total income</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 hidden\">\n          <div class=\"ibox\">\n            <div class=\"ibox-content\">\n              <h5>Income last day</h5>\n              <h1 class=\"no-margins\">-200,100</h1>\n              <div class=\"stat-percent font-bold text-danger\">12% <i class=\"fa fa-level-down\"></i></div>\n              <small>Total income</small>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n<app-foot></app-foot>"

/***/ }),

/***/ "./src/app/views/orders/order-list/order-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/orders/order-list/order-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';
var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(toastr, _api) {
        this.toastr = toastr;
        this._api = _api;
        this.ready = [];
        this.orders = [];
        this.app = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["config"];
        this.type = _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HttpTransportType"].LongPolling;
        this._hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]().withUrl(this.app.ordUrl, { transport: this.type }).build();
    }
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getData();
        this.getAllOrder();
        // this.setdata();
        this._hubConnection.start().then(function () {
            // console.log('Hub connection started');
            _this.getOrders();
        }).catch(function (err) {
            console.log('Error establishing connection');
        });
    };
    OrderListComponent.prototype.getData = function () {
        var _this = this;
        this._hubConnection.on('pending', function (data) {
            console.log(data);
            _this.orders = data;
        });
        this._hubConnection.on('ready', function (data) {
            console.log(data);
            _this.ready = data;
        });
        this._hubConnection.on('send', function (data) {
            console.log(data);
            _this.showMsg('success', 'Broadcast', data);
        });
        // this._hubConnection.on('Error', (data: any) => {
        //   this.showMsg('error', 'Error Message', 'Message:' + data);
        // });
    };
    OrderListComponent.prototype.getOrders = function () {
        this._hubConnection.invoke('Orders');
        this._hubConnection.invoke('SendAsync', 'Orders Dashboard');
    };
    OrderListComponent.prototype.showMsg = function (type, title, message) {
        if (type === 'success') {
            this.toastr.success(message, title);
        }
        else if (type === 'warning') {
            this.toastr.warning(message, title);
        }
        else if (type === 'error') {
            this.toastr.error(message, title);
        }
    };
    OrderListComponent.prototype.confirmOrder = function (id) {
        var _this = this;
        this._api.confirmOrder(id).subscribe(function (data) {
            _this.sendSms(data);
            _this.getAllOrder();
        }, function (err) { alert(err.statusText); });
    };
    OrderListComponent.prototype.sendSms = function (order) {
        var _this = this;
        this._api.postConfirmSms(order).subscribe(function (data) {
            _this.showMsg('success', 'Order Collected', 'Order Confirm Successfully And User has been sent Confirmation');
        }, function (err) {
            _this.showMsg('error', 'Sms Fail', 'Unable to Send Confirmation to Customer');
        });
    };
    OrderListComponent.prototype.getAllOrder = function () {
        var _this = this;
        this._api.getOrderScreen().subscribe(function (data) {
            console.log(data);
            _this.ready = data.ready;
            _this.orders = data.pending;
        }, function (err) { alert(err.statusText); });
    };
    OrderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-list',
            template: __webpack_require__(/*! ./order-list.component.html */ "./src/app/views/orders/order-list/order-list.component.html"),
            styles: [__webpack_require__(/*! ./order-list.component.css */ "./src/app/views/orders/order-list/order-list.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_4__["TellerService"]])
    ], OrderListComponent);
    return OrderListComponent;
}());



/***/ }),

/***/ "./src/app/views/orders/orders.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/orders/orders.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/orders/orders.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/orders/orders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-md-6\">\r\n    <h2 *ngIf=\"!list\">Order List</h2>\r\n    <h2 *ngIf=\"list\">Recent Order</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a>Home</a></li>\r\n      <li><a>Orders</a></li>\r\n      <li class=\"active\" *ngIf=\"!list\"><strong>List</strong></li>\r\n      <li class=\"active\" *ngIf=\"list\"><strong>Recent</strong></li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-md-6 pull-right\">\r\n    <div class=\"title-action\">\r\n      <a (click)=\"getAllOrder()\" class=\"btn btn-primary\">Refresh</a> \r\n      <a routerLink=\"/orderlist\" class=\"btn btn-primary\">Order Dashboard</a> \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"!list\">\r\n  <div class=\"ibox-content m-b-sm border-bottom\">\r\n    <form class=\"m-t form\" method=\"Post\" #orderForm=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"contact-box\">\r\n            <a>\r\n              <div class=\"col-sm-9 col-xs-12\">\r\n                <h3><strong>{{order.fullname}}</strong></h3>\r\n                <ul class=\"list-unstyled m-t-md\">\r\n                  <li>\r\n                    <span class=\"fa fa-handshake-o m-r-xs\"></span>\r\n                    <label></label> {{order.orderno}} <br>\r\n                    <span class=\"fa fa-phone m-r-xs\"></span>\r\n                    <label></label> {{order.mobile}} <br>\r\n                    <span class=\"fa fa-money m-r-xs\"></span>\r\n                    <label></label> {{order.total}}<br>\r\n                    <span class=\"fa fa-calendar m-r-xs\"></span>\r\n                    <label></label> {{order.date | date:'short'}} <br>\r\n                    <span class=\"fa fa-at m-r-xs\"></span>\r\n                    <label></label> {{order.location.name}}\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <table class=\"invoice-items\" cellpadding=\"0\" cellspacing=\"0\">\r\n            <tr *ngFor=\"let l of orderlist\">\r\n              <td>{{l.food.name}}</td>\r\n              <td>{{l.food.description}}</td>\r\n              <td>{{l.quantity}}</td>\r\n              <!-- <td class=\"alignright\" width=\"10px\">{{l.amount|currency:'₵ '}}</td> -->\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4 col-sm-offset-4\" *ngIf=\"order.status == 'pending'\">\r\n          <div class=\"form-group\">\r\n            <button [disabled]=\"order.status == 'pending'\" (click)=\"acceptOrder(order.orderid)\" class=\"btn-warning btn-block btn\">Accept</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4 col-sm-offset-4\" *ngIf=\"order.status == 'In-Process'\">\r\n          <div class=\"form-group\">\r\n            <button [disabled]=\"order.status == 'In-Process'\" (click)=\"readyOrder(order.orderid)\" class=\"btn-primary btn-block btn\">Ready</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"ibox\">\r\n        <div class=\"ibox-content\">\r\n          <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\r\n            <thead>\r\n              <tr>\r\n                <th>S/N</th>\r\n                <th>OrderNo</th>\r\n                <th>Customer</th>\r\n                <th>Mobile</th>\r\n                <th>Amount</th>\r\n                <th>Time</th>\r\n                <!-- <th>PlaceOfWork</th> -->\r\n                <th>Status</th>\r\n                <th class=\"text-right\">Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let l of lists; let i=index\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{l.orderno}}</td>\r\n                <td>{{l.fullname}}</td>\r\n                <td>{{l.mobile}}</td>\r\n                <td>{{l.total}}</td>\r\n                <td>{{l.date|date:'shortTime'}}</td>\r\n                <!-- <td>{{l.location.name}}</td> -->\r\n                <td>\r\n                  <span *ngIf=\"l.status == 'pending'\" class=\"label label-primary\">{{l.status}}</span>\r\n                  <span *ngIf=\"l.status == 'In-Process'\" class=\"label label-info\">{{l.status}}</span>\r\n                  <!-- <span class=\"label label-primary\">{{l.status}}</span> -->\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div class=\"btn-group\">\r\n                    <button (click)=\"getOrder(l)\" class=\"btn-info btn btn-xs\">View</button> \r\n                    <button *ngIf=\"l.status == 'pending'\" (click)=\"acceptOrder(l.orderid)\" class=\"btn-warning btn btn-xs\">Accept</button> \r\n                    <button *ngIf=\"l.status == 'In-Process'\" (click)=\"readyOrder(l.orderid)\" class=\"btn-primary btn btn-xs\">Ready</button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <td colspan=\"6\">\r\n                  <ul class=\"pagination pull-right\"></ul>\r\n                </td>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"list\">\r\n  <div class=\"row\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/orders/orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/orders/orders.component.ts ***!
  \**************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(_nav, _api) {
        this._nav = _nav;
        this._api = _api;
        this.app = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["config"];
        this.type = _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HttpTransportType"].ServerSentEvents;
        this._hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]().withUrl(this.app.ordUrl, { transport: this.type }).build();
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAllOrder();
        // this.getData();
        // this._hubConnection.start().then(() => {
        //   console.log('Hub connection started');
        //   this.getOrders();
        // }).catch(err => {
        //   console.log('Error establishing connection');
        // });
    };
    OrdersComponent.prototype.getData = function () {
        var _this = this;
        this._hubConnection.on('pending', function (data) {
            console.log(data);
            _this.lists = data;
        });
        this._hubConnection.on('order', function (data) {
            console.log(data);
            _this.lists.push(data);
        });
        this._hubConnection.on('send', function (data) {
            console.log(data);
            _this.getAllOrder();
            _this._nav.showMsg('success', 'Broadcast', data);
        });
        // this._hubConnection.on('Error', (data: any) => {
        //   this._nav.showMsg('error', 'Error Message', data);
        // });
    };
    OrdersComponent.prototype.getOrders = function () {
        this._hubConnection.invoke('orders');
        this._hubConnection.invoke('SendAsync', 'Orders List');
    };
    OrdersComponent.prototype.getAllOrder = function () {
        var _this = this;
        this._api.getOrderScreen().subscribe(function (data) {
            _this.lists = data.pending;
        }, function (err) { alert(err.statusText); });
    };
    OrdersComponent.prototype.getOrder = function (dat) {
        var _this = this;
        this.order = dat;
        this._api.getOrderbyCode(dat.orderno).subscribe(function (data) {
            _this.orderlist = data.list;
            _this.order = data.order;
        }, function (err) { alert(err.statusText); });
    };
    OrdersComponent.prototype.cancelOrder = function (id) {
        var _this = this;
        this._api.cancelOrder(id).subscribe(function (data) {
            _this.order = data;
        }, function (err) { alert(err.statusText); });
    };
    OrdersComponent.prototype.acceptOrder = function (id) {
        var _this = this;
        this._api.acceptOrder(id).subscribe(function (data) {
            _this.order = data;
            _this.getAllOrder();
        }, function (err) { alert(err.statusText); });
    };
    OrdersComponent.prototype.readyOrder = function (id) {
        var _this = this;
        this._api.readyOrder(id).subscribe(function (data) {
            _this.order = data;
            _this.getAllOrder();
        }, function (err) { alert(err.statusText); });
    };
    OrdersComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.order = {
                orderid: '', orderno: '', fullname: '', mobile: '', total: 0, status: 'pending', date: new Date,
                location: { name: '', Discount: 0 }
            };
        }
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/views/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/views/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_4__["TellerService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/views/setup/setup-discount/setup-discount.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/setup/setup-discount/setup-discount.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/setup/setup-discount/setup-discount.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/setup/setup-discount/setup-discount.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-md-8\">\n    <h2 *ngIf=\"!list\">Discounts List</h2>\n    <h2 *ngIf=\"list\">Add Discount</h2>\n    <ol class=\"breadcrumb\">\n      <li><a>Home</a></li>\n      <li><a>Setup</a></li>\n      <li><a>Discount</a></li>\n      <li class=\"active\" *ngIf=\"!list\"><strong>List</strong></li>\n      <li class=\"active\" *ngIf=\"list\"><strong>Add</strong></li>\n    </ol>\n  </div>\n  <div class=\"col-md-4 pull-right\">\n    <div class=\"title-action\">\n      <a routerLink=\"/setup/workplace\" class=\"btn btn-primary\" *ngIf=\"!list\">WorkPlace</a> \n      <a (click)=\"listView()\" class=\"btn btn-primary\" *ngIf=\"!list\">Add</a> \n      <a (click)=\"back()\" class=\"btn btn-primary\" *ngIf=\"list\">List</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"!list\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"ibox\">\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 m-b-xs\">\n              <b class=\"control-label col-sm-2\">Show </b>\n              <div class=\"col-sm-6\">\n                <select class=\"input-sm form-control input-s-sm inline\">\n                  <option value=\"25\">25</option>\n                  <option value=\"50\">50</option>\n                  <option value=\"100\">100</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-sm-4 col-sm-offset-4\">\n              <div class=\"input-group\">\n                <input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\"> <span class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span>\n              </div>\n            </div>\n          </div>\n          <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\n            <thead>\n              <tr>\n                <th>S/N</th>\n                <th data-hide=\"phone\">Name</th>\n                <th data-hide=\"phone\">Mobile</th>\n                <th data-hide=\"phone\">Percent</th>\n                <th data-hide=\"phone\">Work</th>\n                <th class=\"text-right\">Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let d of discount; let i=index\">\n                <td> {{i + 1}}</td>\n                <td>{{d.name}}</td>\n                <td>{{d.mobile}}</td>\n                <td>{{d.percent}}</td>\n                <td>{{d.location.name}}</td>\n                <td class=\"text-right\">\n                  <div class=\"btn-group\">\n                    <button (click)=\"editDt(d)\" class=\"btn-white btn btn-xs\">Edit</button>\n                    <button (click)=\"delDt(d)\" class=\"btn-white btn btn-xs\">Delete</button>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <tr>\n                <td colspan=\"6\">\n                  <ul class=\"pagination pull-right\"></ul>\n                </td>\n              </tr>\n            </tfoot>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Add New food form -->\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"list\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5 class=\"text-navy\" *ngIf=\"!edit\">Add Discount</h5>\n          <h5 class=\"text-navy\" *ngIf=\"edit\">Edit Discount</h5>\n          <div class=\"ibox-tools\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n              <i class=\"fa fa-wrench\"></i>\n            </a>\n          </div>\n        </div>\n        <div class=\"ibox-content\">\n          <form class=\"form-horizontal\" method=\"Post\" #discountForm=\"ngForm\" (ngSubmit)=\"postDiscount()\">\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <div class=\"form-group\">\n                    <label>Name: </label>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-id-badge\"></i></span>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"dct.name\" name=\"name\" placeholder=\"Name\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Mobile: </label>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-money\"></i></span>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"dct.mobile\" name=\"mobile\" placeholder=\"Mobile\" required>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-1\"></div>\n                <div class=\"col-md-5\">\n                  <div class=\"form-group\">\n                    <label>Discount: </label>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-money\"></i></span>\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"dct.percent\" name=\"percent\" placeholder=\"Discount\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Workplace</label>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-address-card\"></i></span>\n                      <select class=\"form-control\" name=\"locationid\" [(ngModel)]=\"dct.locationid\" required>\n                        <option value=\"\" selected disabled hidden>Choose Workplace</option>\n                        <option *ngFor=\"let l of loc\" value=\"{{l.locationid}}\">{{l.name}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"col-md-offset-9 col-md-10\">\n                    <a class=\"btn btn-sm btn-white\" (click)=\"back()\" type=\"cancel\">Cancel</a>\n                    <button class=\"btn btn-sm btn-rounded btn-primary\" *ngIf=\"!edit\" [disabled]=\"discountForm.invalid\" type=\"submit\">Add</button>\n                    <button class=\"btn btn-sm btn-rounded btn-warning\" *ngIf=\"edit\" (click)=\"putDiscount()\" [disabled]=\"discountForm.invalid\" type=\"button\">Update</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/setup/setup-discount/setup-discount.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/setup/setup-discount/setup-discount.component.ts ***!
  \************************************************************************/
/*! exports provided: SetupDiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupDiscountComponent", function() { return SetupDiscountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetupDiscountComponent = /** @class */ (function () {
    function SetupDiscountComponent(_setup, _use) {
        this._setup = _setup;
        this._use = _use;
    }
    SetupDiscountComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAllDiscount();
    };
    SetupDiscountComponent.prototype.getAllDiscount = function () {
        var _this = this;
        this._setup.getDiscounts().subscribe(function (data) {
            _this.discount = data;
        }, function (err) { alert(err.statusText); });
        this._setup.getLocations().subscribe(function (data) {
            _this.loc = data;
        }, function (err) { alert(err.statusText); });
    };
    SetupDiscountComponent.prototype.editDt = function (data) {
        // this.dct = this.discount.find(s => s.discountid === id).
        this.dct = data;
        this.edit = true;
        this.list = true;
    };
    SetupDiscountComponent.prototype.delDt = function (dat) {
        var _this = this;
        this._setup.delDiscount(dat.discountid).subscribe(function (data) {
            _this.res = data;
            _this.discount.slice(dat);
        }, function (err) { alert(err.statusText); });
    };
    SetupDiscountComponent.prototype.postDiscount = function () {
        var _this = this;
        this._setup.postDiscount(this.dct).subscribe(function (data) {
            _this.res = data;
            _this.discount.push(data);
            _this.formReset(_this.any);
            _this.list = false;
            _this._use.showMsg('success', 'Discount Added', 'Added to list Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Add New Discount');
        });
    };
    SetupDiscountComponent.prototype.putDiscount = function () {
        var _this = this;
        this.dct.muserid = this._use.active.Id;
        this.dct.mdate = new Date();
        this._setup.putDiscount(this.dct.discountid, this.dct).subscribe(function (data) {
            _this.res = data;
            _this.getAllDiscount();
            _this.formReset(_this.any);
            _this.list = false;
            _this._use.showMsg('success', 'Discount Updated', 'Details Updated Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Updated Fail', 'Unable to Update Details');
        });
    };
    SetupDiscountComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.dct = {
                discountid: 0, name: '', mobile: '', locationid: null, percent: 0,
                userid: this._use.active.Id, date: new Date(), muserid: null, mdate: null
            };
        }
    };
    SetupDiscountComponent.prototype.listView = function () {
        this.list = true;
        this.edit = false;
    };
    SetupDiscountComponent.prototype.back = function () {
        this.list = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('discountForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SetupDiscountComponent.prototype, "any", void 0);
    SetupDiscountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-discount',
            template: __webpack_require__(/*! ./setup-discount.component.html */ "./src/app/views/setup/setup-discount/setup-discount.component.html"),
            styles: [__webpack_require__(/*! ./setup-discount.component.css */ "./src/app/views/setup/setup-discount/setup-discount.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]])
    ], SetupDiscountComponent);
    return SetupDiscountComponent;
}());



/***/ }),

/***/ "./src/app/views/setup/setup-food/setup-food.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/setup/setup-food/setup-food.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/setup/setup-food/setup-food.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/setup/setup-food/setup-food.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2 *ngIf=\"!list\">Foods List</h2>\r\n    <h2 *ngIf=\"list\">Add Food</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a>Home</a></li>\r\n      <li><a>Setup</a></li>\r\n      <li><a>Food</a></li>\r\n      <li class=\"active\" *ngIf=\"!list\"><strong>List</strong></li>\r\n      <li class=\"active\" *ngIf=\"list\"><strong>Add</strong></li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-lg-2 pull-right\">\r\n    <div class=\"title-action\">\r\n      <a (click)=\"listView()\" class=\"btn btn-primary\" *ngIf=\"!list\">Add Food</a>\r\n      <a (click)=\"back()\" class=\"btn btn-primary\" *ngIf=\"list\">List</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"!list\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"ibox\">\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 m-b-xs\">\r\n              <b class=\"control-label col-sm-2\">Show </b>\r\n              <div class=\"col-sm-6\">\r\n                <select class=\"input-sm form-control input-s-sm inline\" ng-model=\"Limit\" ng-init=\"Limit=25\">\r\n                  <option ng-selected=\"Limit == 25\" value=\"25\">25</option>\r\n                  <option ng-selected=\"Limit == 50\" value=\"50\">50</option>\r\n                  <option ng-selected=\"Limit == 100\" value=\"100\">100</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 col-sm-offset-4\">\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\"> <span\r\n                  class=\"input-group-btn\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\r\n            <thead>\r\n              <tr>\r\n                <th>S/N</th>\r\n                <th data-hide=\"phone\">Code</th>\r\n                <th data-hide=\"phone\">FoodName</th>\r\n                <th data-hide=\"phone\">Description</th>\r\n                <th data-hide=\"phone\">Price</th>\r\n                <th data-hide=\"phone\">Discount</th>\r\n                <th class=\"text-right\">Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let f of food; let i=index\">\r\n                <td> {{i + 1}}</td>\r\n                <td>{{f.code}}</td>\r\n                <td>{{f.name}}</td>\r\n                <td>{{f.description}}</td>\r\n                <td>{{f.price}}</td>\r\n                <td>{{f.discount}} %</td>\r\n                <td class=\"text-right\">\r\n                  <div class=\"btn-group\">\r\n                    <button (click)=\"editFd(f)\" class=\"btn-white btn btn-xs\">Edit</button>\r\n                    <button (click)=\"delFd(d)\" class=\"btn-white btn btn-xs\">Delete</button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <td colspan=\"7\">\r\n                  <ul class=\"pagination pull-right\"></ul>\r\n                </td>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Add New food form -->\r\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"list\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <h5 class=\"text-navy\" *ngIf=\"!edit\">Add Food</h5>\r\n          <h5 class=\"text-navy\" *ngIf=\"edit\">Edit Food</h5>\r\n          <div class=\"ibox-tools\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n              <i class=\"fa fa-wrench\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <form class=\"form-horizontal\" method=\"Post\" #foodForm=\"ngForm\" (ngSubmit)=\"postFood()\">\r\n            <div class=\"panel-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-5\">\r\n                  <div class=\"form-group\">\r\n                    <label>Name: </label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-id-badge\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fd.name\" name=\"name\" placeholder=\"Name\" required>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Price: </label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-money\"></i></span>\r\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"fd.price\" name=\"price\" placeholder=\"Price\"\r\n                        required>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Discount: </label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-money\"></i></span>\r\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"fd.discount\" name=\"discount\" placeholder=\"Discount (Percentage)\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-1\"></div>\r\n                <div class=\"col-md-5\">\r\n                  <div class=\"form-group\">\r\n                    <label>Image</label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-image\"></i></span>\r\n                      <input type=\"file\" name=\"image\" (change)=\"fileUpload($event)\" class=\"form-control\" accept=\"image/*\" required>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Description</label>\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-address-card\"></i></span>\r\n                      <textarea type=\"text\" rows=\"4\" name=\"description\" [(ngModel)]=\"fd.description\" placeholder=\"Description\"\r\n                        class=\"form-control\" required></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-md-offset-9 col-md-10\">\r\n                    <a class=\"btn btn-sm btn-white\" (click)=\"back()\" type=\"cancel\">Cancel</a>\r\n                    <button class=\"btn btn-sm btn-rounded btn-primary\" *ngIf=\"!edit\" [disabled]=\"foodForm.invalid\" type=\"submit\">Add</button>\r\n                    <button class=\"btn btn-sm btn-rounded btn-warning\" *ngIf=\"edit\" [disabled]=\"foodForm.invalid\" (click)=\"putFood()\" type=\"button\">Update</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/setup/setup-food/setup-food.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/setup/setup-food/setup-food.component.ts ***!
  \****************************************************************/
/*! exports provided: SetupFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupFoodComponent", function() { return SetupFoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetupFoodComponent = /** @class */ (function () {
    function SetupFoodComponent(_setup, _use) {
        this._setup = _setup;
        this._use = _use;
    }
    SetupFoodComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAllFood();
    };
    SetupFoodComponent.prototype.getAllFood = function () {
        var _this = this;
        this._setup.getFoods().subscribe(function (data) {
            _this.food = data;
        }, function (err) { alert(err.statusText); });
    };
    SetupFoodComponent.prototype.editFd = function (data) {
        // this.fd = this.sequence.find(s => s.sequenceId === id).
        this.fd = data;
        this.edit = true;
        this.list = true;
    };
    SetupFoodComponent.prototype.delFd = function (dat) {
        var _this = this;
        this._setup.delFood(dat.foodid).subscribe(function (data) {
            _this.res = data;
            _this.food.slice(dat);
        }, function (err) { alert(err.statusText); });
    };
    SetupFoodComponent.prototype.fileUpload = function (event) {
        var _this = this;
        // console.log(event);
        this._setup.Upload(event.target.files[0], 'Food').subscribe(function (data) {
            _this.fd.image = data;
            console.log(data);
        });
    };
    SetupFoodComponent.prototype.postFood = function () {
        var _this = this;
        this._setup.getCode('Food').subscribe(function (data) {
            _this.fd.code = data;
            _this.addFood(_this.fd);
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Generate New Code for Food');
        });
    };
    SetupFoodComponent.prototype.addFood = function (food) {
        var _this = this;
        this._setup.postFood(food).subscribe(function (data) {
            _this.res = data;
            _this.food.push(data);
            _this.formReset(_this.any);
            _this.list = false;
            _this._use.showMsg('success', 'Food Added', 'Added to list Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Add New Food');
        });
    };
    SetupFoodComponent.prototype.putFood = function () {
        var _this = this;
        this.fd.muserid = this._use.active.Id;
        this.fd.mdate = new Date();
        this._setup.putFood(this.fd.foodid, this.fd).subscribe(function (data) {
            _this.res = data;
            _this.getAllFood();
            _this.formReset(_this.any);
            _this.list = false;
            _this._use.showMsg('success', 'Food Updated', 'Details Updated Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Updated Fail', 'Unable to Update Details');
        });
    };
    SetupFoodComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.fd = { foodid: 0, code: '', name: '', image: '', description: '',
                price: 0, discount: 0, userid: this._use.active.Id, date: new Date(), muserid: null, mdate: null };
        }
    };
    SetupFoodComponent.prototype.listView = function () {
        this.list = true;
        this.edit = false;
    };
    SetupFoodComponent.prototype.back = function () {
        this.list = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('foodForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SetupFoodComponent.prototype, "any", void 0);
    SetupFoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-food',
            template: __webpack_require__(/*! ./setup-food.component.html */ "./src/app/views/setup/setup-food/setup-food.component.html"),
            styles: [__webpack_require__(/*! ./setup-food.component.css */ "./src/app/views/setup/setup-food/setup-food.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]])
    ], SetupFoodComponent);
    return SetupFoodComponent;
}());



/***/ }),

/***/ "./src/app/views/setup/setup-location/setup-location.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/setup/setup-location/setup-location.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/setup/setup-location/setup-location.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/setup/setup-location/setup-location.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-md-10\">\n    <h2 *ngIf=\"!list\">Locations Manager</h2>\n    <h2 *ngIf=\"list\">Add Location</h2>\n    <ol class=\"breadcrumb\">\n      <li><a>Home</a></li>\n      <li><a>Setup</a></li>\n      <li><a>Location</a></li>\n      <li class=\"active\" *ngIf=\"!list\"><strong>List</strong></li>\n      <li class=\"active\" *ngIf=\"list\"><strong>Add</strong></li>\n    </ol>\n  </div>\n  <div class=\"col-md-2 pull-right\">\n    <div class=\"title-action\">\n\n    </div>\n  </div>\n</div>\n\n<!-- Add New Location form -->\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5 class=\"text-navy\" *ngIf=\"!edit\">Add WorkPlace</h5>\n          <h5 class=\"text-navy\" *ngIf=\"edit\">Edit WorkPlace</h5>\n          <div class=\"ibox-tools\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n              <i class=\"fa fa-wrench\"></i>\n            </a>\n          </div>\n        </div>\n        <div class=\"ibox-content\">\n          <form class=\"form-horizontal\" method=\"Post\" #locationForm=\"ngForm\" (ngSubmit)=\"postLocation()\">\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label>Name: </label>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-id-badge\"></i></span>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"loc.name\" name=\"name\" placeholder=\"Name\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Discount Percent: </label>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-money\"></i></span>\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"loc.discount\" name=\"discount\" placeholder=\"Percent\" required>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"col-md-offset-8 col-md-12\">\n                    <a class=\"btn btn-sm btn-white\" (click)=\"back()\" type=\"cancel\">Cancel</a>\n                    <button class=\"btn btn-sm btn-rounded btn-primary\" *ngIf=\"!edit\" [disabled]=\"locationForm.invalid\"\n                      type=\"submit\">Add</button>\n                    <button class=\"btn btn-sm btn-rounded btn-warning\" *ngIf=\"edit\" (click)=\"putLocation()\" [disabled]=\"locationForm.invalid\"\n                      type=\"button\">Update</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"ibox\">\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-sm-offset-6\">\n              <div class=\"input-group\">\n                <input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\">\n                <span class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\n              <thead>\n                <tr>\n                  <th>S/N</th>\n                  <th data-hide=\"phone\">Name</th>\n                  <th data-hide=\"phone\">Percent</th>\n                  <th data-hide=\"phone\">NoOfDiscount</th>\n                  <th class=\"text-right\">Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let d of location; let i=index\">\n                  <td> {{i + 1}}</td>\n                  <td>{{d.name}}</td>\n                  <td>{{d.discount}} %</td>\n                  <td>{{d.discounts.length}}</td>\n                  <td class=\"text-right\">\n                    <div class=\"btn-group\">\n                      <button (click)=\"editLoc(d)\" class=\"btn-white btn btn-xs\">Edit</button>\n                      <button (click)=\"delLoc(d)\" class=\"btn-white btn btn-xs\">Delete</button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <td colspan=\"5\">\n                    <ul class=\"pagination pull-right\"></ul>\n                  </td>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/setup/setup-location/setup-location.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/setup/setup-location/setup-location.component.ts ***!
  \************************************************************************/
/*! exports provided: SetupLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupLocationComponent", function() { return SetupLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetupLocationComponent = /** @class */ (function () {
    function SetupLocationComponent(_setup, _use) {
        this._setup = _setup;
        this._use = _use;
    }
    SetupLocationComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAllLocation();
    };
    SetupLocationComponent.prototype.getAllLocation = function () {
        var _this = this;
        this._setup.getLocations().subscribe(function (data) {
            _this.location = data;
            _this._use.showMsg('success', 'Location List', 'Fetched Location list Successfully');
        }, function (err) { alert(err.statusText); });
    };
    SetupLocationComponent.prototype.editLoc = function (data) {
        // this.loc = this.location.find(s => s.locationid === id).
        this.loc = data;
        this.edit = true;
    };
    SetupLocationComponent.prototype.delLoc = function (dat) {
        var _this = this;
        this._setup.delLocation(dat.locationid).subscribe(function (data) {
            _this.res = data;
            _this.location.slice(dat);
        }, function (err) { alert(err.statusText); });
    };
    SetupLocationComponent.prototype.postLocation = function () {
        var _this = this;
        this._setup.postLocation(this.loc).subscribe(function (data) {
            _this.res = data;
            _this.location.push(data);
            _this.formReset(_this.any);
            _this.list = false;
            _this._use.showMsg('success', 'Location Added', 'Added to list Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Add New Location');
        });
    };
    SetupLocationComponent.prototype.putLocation = function () {
        var _this = this;
        this.loc.muserid = this._use.active.Id;
        this.loc.mdate = new Date();
        this._setup.putLocation(this.loc.locationid, this.loc).subscribe(function (data) {
            _this.res = data;
            _this.getAllLocation();
            _this.formReset(_this.any);
            _this.list = false;
            _this._use.showMsg('success', 'Location Updated', 'Details Updated Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Updated Fail', 'Unable to Update Details');
        });
    };
    SetupLocationComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.loc = {
                locationid: 0, name: '', location: 0,
                userid: this._use.active.Id, date: new Date(), muserid: null, mdate: null
            };
        }
    };
    SetupLocationComponent.prototype.listView = function () {
        this.list = true;
        this.edit = false;
    };
    SetupLocationComponent.prototype.back = function () {
        this.list = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('locationForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SetupLocationComponent.prototype, "any", void 0);
    SetupLocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-location',
            template: __webpack_require__(/*! ./setup-location.component.html */ "./src/app/views/setup/setup-location/setup-location.component.html"),
            styles: [__webpack_require__(/*! ./setup-location.component.css */ "./src/app/views/setup/setup-location/setup-location.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]])
    ], SetupLocationComponent);
    return SetupLocationComponent;
}());



/***/ }),

/***/ "./src/app/views/setup/setup-norminal/setup-norminal.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/setup/setup-norminal/setup-norminal.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/setup/setup-norminal/setup-norminal.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/setup/setup-norminal/setup-norminal.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-md-8\">\r\n    <h2 *ngIf=\"!list\">Norminal List</h2>\r\n    <h2 *ngIf=\"list\">Add Norminal</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a>Home</a></li>\r\n      <li><a>Setup</a></li>\r\n      <li><a>Norminal</a></li>\r\n      <li class=\"active\" *ngIf=\"!list\"><strong>Norminal List</strong></li>\r\n      <li class=\"active\" *ngIf=\"list\"><strong>Add</strong></li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-md-4 pull-right\">\r\n    <div class=\"title-action\">\r\n      <a routerLink=\"/setup/transit\" class=\"btn btn-primary\" *ngIf=\"!list\">Transit</a> \r\n      <a (click)=\"listView()\" class=\"btn btn-primary\" *ngIf=\"!list\"> Add</a>\r\n      <a (click)=\"back()\" class=\"btn btn-primary\" *ngIf=\"list\"> List</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"list\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n      <form class=\"form-horizontal\" method=\"Post\" #nominalForm=\"ngForm\" (ngSubmit)=\"postNominal()\">\r\n        <div class=\"ibox float-e-margins\">\r\n          <div class=\"ibox-title\">\r\n            <h5 class=\"text-navy\" *ngIf=\"!edit\">Add New Nominal</h5>\r\n            <h5 class=\"text-navy\" *ngIf=\"edit\">Edit Nominal </h5>\r\n            <div class=\"ibox-tools\">\r\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"fa fa-wrench\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"ibox-content\">\r\n            <div class=\"panel-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"form-group\">\r\n                    <label>Name </label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nom.description\" name=\"description\" placeholder=\"Nominal Name\" required>\r\n                    <textarea rows=\"1\" class=\"form-control hidden\" placeholder=\"Description\" required></textarea>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>GLType</label>\r\n                    <select class=\"form-control\" [(ngModel)]=\"nom.gltype\" name=\"gltype\" required>\r\n                      <option value=\"\"> Choose GLType</option>\r\n                      <option value=\"Asset\">Asset</option>\r\n                      <option value=\"Cashbook\">Cashbook</option>\r\n                      <option value=\"Expense\">Expense</option>\r\n                      <option value=\"Income\">Income</option>\r\n                      <option value=\"Liability\">Liability</option>\r\n                      <option value=\"Teller\">Teller</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"form-group hidden\">\r\n                    <label>Code</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nom.code\" name=\"code\" placeholder=\"Nominal Code\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Balance </label>\r\n                    <select class=\"form-control\" [(ngModel)]=\"nom.balancetype\" name=\"balancetype\" required>\r\n                      <option value=\"\"> Choose Balance Type</option>\r\n                      <option value=\"Credit\">Credit</option>\r\n                      <option value=\"Debit\">Debit</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Status </label>\r\n                    <select class=\"form-control\" [(ngModel)]=\"nom.status\" name=\"status\" required>\r\n                      <option value=\"\">Select One</option>\r\n                      <option value=\"Active\">Active</option>\r\n                      <option value=\"Disable\">Disable</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-md-offset-8 col-md-12\">\r\n                    <a class=\"btn btn-sm btn-white\" (click)=\"back()\"type=\"cancel\">Cancel</a>\r\n                    <button class=\"btn btn-sm btn-primary\" *ngIf=\"!edit\" [disabled]=\"nominalForm.invalid\" type=\"submit\">Add</button>\r\n                    <button class=\"btn btn-sm btn-warning\" *ngIf=\"edit\" (click)=\"putNominal()\" [disabled]=\"nominalForm.invalid\" type=\"button\">Update</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"!list\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <h5>Nomimals </h5>\r\n          <div class=\"ibox-tools\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n              <i class=\"fa fa-wrench\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 m-b-xs\">\r\n              <b class=\"control-label col-sm-2\">Show </b>\r\n              <div class=\"col-sm-6\">\r\n                <select class=\"input-sm form-control input-s-sm inline\">\r\n                  <option value=\"25\">25</option>\r\n                  <option value=\"50\">50</option>\r\n                  <option value=\"100\">100</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 col-sm-offset-4\">\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\">\r\n                <span class=\"input-group-btn\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"footable table table-stripped toggle-arrow-tiny table-hover\" data-filter=#filter>\r\n              <thead>\r\n                <tr>\r\n                  <th>S/N</th>\r\n                  <th>Code</th>\r\n                  <th>Description</th>\r\n                  <th>GLType</th>\r\n                  <th>BalanceType</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let n of nominal; let i=index\">\r\n                  <td>{{ i + 1 }}</td>\r\n                  <td>{{ n.code }}</td>\r\n                  <td>{{ n.description }}</td>\r\n                  <td>{{ n.gltype }}</td>\r\n                  <td>{{ n.balancetype }}</td>\r\n                  <td>{{ n.status }}</td>\r\n                  <td>\r\n                    <a (click)=\"editNom(n)\" class=\"btn btn-xs btn-warning\">Edit</a>\r\n                    <a (click)=\"delNom(n)\" class=\"btn btn-xs btn-primary\">Delete</a></td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"7\">\r\n                    <ul class=\"pagination pull-right\"></ul>\r\n                  </td>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/setup/setup-norminal/setup-norminal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/setup/setup-norminal/setup-norminal.component.ts ***!
  \************************************************************************/
/*! exports provided: SetupNorminalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupNorminalComponent", function() { return SetupNorminalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetupNorminalComponent = /** @class */ (function () {
    function SetupNorminalComponent(_setup, _use) {
        this._setup = _setup;
        this._use = _use;
    }
    SetupNorminalComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAllNominal();
    };
    SetupNorminalComponent.prototype.getAllNominal = function () {
        var _this = this;
        this._setup.getNominals().subscribe(function (data) {
            _this.nominal = data;
        }, function (err) { alert(err.statusText); });
    };
    SetupNorminalComponent.prototype.editNom = function (data) {
        // this.nom = this.sequence.find(s => s.sequenceId === id).
        this.nom = data;
        this.edit = true;
        this.list = true;
    };
    SetupNorminalComponent.prototype.delNom = function (dat) {
        var _this = this;
        this._setup.delNominal(dat.nominalid).subscribe(function (data) {
            _this.res = data;
            _this.nominal.slice(dat);
        }, function (err) { alert(err.statusText); });
    };
    SetupNorminalComponent.prototype.postNominal = function () {
        var _this = this;
        this._setup.getCode('Nominal').subscribe(function (data) {
            _this.nom.code = data;
            _this.addNominal(_this.nom);
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Generate New Code for Nominal');
        });
    };
    SetupNorminalComponent.prototype.addNominal = function (nom) {
        var _this = this;
        this._setup.postNominal(nom).subscribe(function (data) {
            _this.res = data;
            _this.nominal.push(data);
            _this.formReset();
            _this.list = false;
            _this._use.showMsg('success', 'Nominal Added', 'Added to list Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Add New Nominal');
        });
    };
    SetupNorminalComponent.prototype.putNominal = function () {
        var _this = this;
        this.nom.muserid = this._use.active.Id;
        this.nom.mdate = new Date();
        this._setup.putNominal(this.nom.nominalid, this.nom).subscribe(function (data) {
            _this.res = data;
            _this.getAllNominal();
            _this.formReset();
            _this.list = false;
            _this._use.showMsg('success', 'Nominal Updated', 'Details Updated Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Updated Fail', 'Unable to Update Details');
        });
    };
    SetupNorminalComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.nom = { nominalid: 0, gltype: '', code: '', description: '', balancetype: '',
                status: 'Active', userid: this._use.active.Id, date: new Date(), muserid: null, mdate: null };
        }
    };
    SetupNorminalComponent.prototype.listView = function () {
        this.list = true;
        this.edit = false;
    };
    SetupNorminalComponent.prototype.back = function () {
        this.list = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nominalForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SetupNorminalComponent.prototype, "any", void 0);
    SetupNorminalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-norminal',
            template: __webpack_require__(/*! ./setup-norminal.component.html */ "./src/app/views/setup/setup-norminal/setup-norminal.component.html"),
            styles: [__webpack_require__(/*! ./setup-norminal.component.css */ "./src/app/views/setup/setup-norminal/setup-norminal.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]])
    ], SetupNorminalComponent);
    return SetupNorminalComponent;
}());



/***/ }),

/***/ "./src/app/views/setup/setup-sequence/setup-sequence.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/setup/setup-sequence/setup-sequence.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/setup/setup-sequence/setup-sequence.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/setup/setup-sequence/setup-sequence.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-md-10\">\r\n    <h2 *ngIf=\"!list\">List</h2>\r\n    <h2 *ngIf=\"list\">Add</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a>Home</a></li>\r\n      <li><a>Setup</a></li>\r\n      <li><a>Sequence</a></li>\r\n      <li class=\"active\" *ngIf=\"!list\"><strong>List</strong></li>\r\n      <li class=\"active\" *ngIf=\"list\"><strong>Add</strong></li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-md-2 pull-right\">\r\n    <div class=\"title-action\">\r\n      <a (click)=\"listView()\" class=\"btn btn-primary\" *ngIf=\"!list\">Add Sequence</a>\r\n      <a (click)=\"back()\" class=\"btn btn-primary\" *ngIf=\"list\">Sequence List</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\" *ngIf=\"!list\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <h5 *ngIf=\"!edit\"> Add Sequence</h5>\r\n          <h5 *ngIf=\"edit\"> Edit Sequence</h5>\r\n          <div class=\"ibox-tools\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n              <i class=\"fa fa-wrench\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <form class=\"form-horizontal\" method=\"Post\" #sequenceForm=\"ngForm\" (ngSubmit)=\"postSequence()\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label>Name </label>\r\n                <input type=\"text\" [(ngModel)]=\"seq.name\" name=\"name\" placeholder=\"Sequence Name\" class=\"form-control\" required>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Counter</label>\r\n                <input type=\"text\" [(ngModel)]=\"seq.counter\" name=\"counter\" placeholder=\"Counter\" class=\"form-control\" required>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Prefix</label>\r\n                <input type=\"text\" [(ngModel)]=\"seq.prefix\" name=\"prefix\" placeholder=\"Prefix \" class=\"form-control\" required>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Length</label>\r\n                <input type=\"text\" [(ngModel)]=\"seq.length\" name=\"length\" placeholder=\"Length \" class=\"form-control\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"col-md-offset-7 col-md-12\">\r\n                <a class=\"btn btn-sm btn-white\" (click)=\"back()\" type=\"cancel\">Cancel</a>\r\n                <button class=\"btn btn-sm btn-rounded btn-primary\" *ngIf=\"!edit\" [disabled]=\"sequenceForm.invalid\" type=\"submit\">Add</button>\r\n                <button class=\"btn btn-sm btn-rounded btn-warning\" *ngIf=\"edit\" [disabled]=\"sequenceForm.invalid\" (click)=\"putSequence()\" type=\"button\">Update </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"ibox\">\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-8\">\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" placeholder=\"Search\" id=\"filter\" class=\"input-sm form-control\">\r\n                <span class=\"input-group-btn\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\" data-filter=#filter>\r\n              <thead>\r\n                <tr>\r\n                  <th>S/N</th>\r\n                  <th> Name</th>\r\n                  <th> Prefix</th>\r\n                  <th>Counter</th>\r\n                  <th>Length</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let s of sequence; let i=index\">\r\n                  <td> {{ i + 1}} </td>\r\n                  <td>{{s.name}}</td>\r\n                  <td>{{s.prefix}}</td>\r\n                  <td>{{s.counter}}</td>\r\n                  <td>{{s.length}}</td>\r\n                  <td>\r\n                    <div class=\"btn-group\">\r\n                      <button (click)=\"editSeq(s.sequenceid)\" class=\"btn-white btn btn-xs\">Edit</button>\r\n                      <button (click)=\"delSeq(s)\" class=\"btn-white btn btn-xs\">Delete</button>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"6\">\r\n                    <ul class=\"pagination pull-right\"></ul>\r\n                  </td>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Add New sequence form -->\r\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"list\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <h5> Add Sequence</h5>\r\n          <div class=\"ibox-tools\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n              <i class=\"fa fa-wrench\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <form class=\"form-horizontal\" method=\"Post\" #sequenceForm=\"ngForm\" (ngSubmit)=\"postSequence()\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-3 control-label\">Name </label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" [(ngModel)]=\"seq.name\" name=\"name\" placeholder=\"Sequence Name\" class=\"form-control\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-3 control-label\">Counter</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" [(ngModel)]=\"seq.counter\" name=\"counter\" placeholder=\"Counter\" class=\"form-control\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-3 control-label\">Prefix</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" [(ngModel)]=\"seq.prefix\" name=\"prefix\" placeholder=\"Prefix \" class=\"form-control\" required>\r\n                </div>\r\n              </div><div class=\"form-group\">\r\n                <label class=\"col-md-3 control-label\">Length</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" [(ngModel)]=\"seq.length\" name=\"length\" placeholder=\"Length \" class=\"form-control\" required>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"col-md-offset-8 col-md-10\">\r\n                <a class=\"btn btn-sm btn-white\" (click)=\"back()\" type=\"cancel\">Cancel</a>\r\n                <button class=\"btn btn-sm btn-rounded btn-primary\" *ngIf=\"!edit\" [disabled]=\"sequenceForm.invalid\" type=\"submit\">Add</button>\r\n                <button class=\"btn btn-sm btn-rounded btn-warning\" *ngIf=\"edit\" [disabled]=\"sequenceForm.invalid\"(click)=\"putSequence()\" type=\"button\">Update </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/setup/setup-sequence/setup-sequence.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/setup/setup-sequence/setup-sequence.component.ts ***!
  \************************************************************************/
/*! exports provided: SetupSequenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupSequenceComponent", function() { return SetupSequenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetupSequenceComponent = /** @class */ (function () {
    function SetupSequenceComponent(_setup, _use) {
        this._setup = _setup;
        this._use = _use;
    }
    SetupSequenceComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAllSequence();
    };
    SetupSequenceComponent.prototype.getAllSequence = function () {
        var _this = this;
        this._setup.getSequences().subscribe(function (data) {
            _this.sequence = data;
        }, function (err) { alert(err.statusText); });
    };
    SetupSequenceComponent.prototype.editSeq = function (data) {
        this.seq = this.sequence.find(function (s) { return s.sequenceid === data; });
        // this.seq = data;
        this.edit = true;
        this.list = true;
    };
    SetupSequenceComponent.prototype.delSeq = function (dat) {
        var _this = this;
        this._setup.delSequence(dat.sequenceid).subscribe(function (data) {
            _this.res = data;
            _this.sequence.slice(dat);
        }, function (err) { alert(err.statusText); });
    };
    SetupSequenceComponent.prototype.postSequence = function () {
        var _this = this;
        this._setup.postSequence(this.seq).subscribe(function (data) {
            _this.res = data;
            _this.sequence.push(data);
            _this.formReset(_this.any);
            _this.list = false;
            _this._use.showMsg('success', 'Sequence Added', 'Added to list Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Add New Sequence');
        });
    };
    SetupSequenceComponent.prototype.putSequence = function () {
        var _this = this;
        this.seq.muserid = this._use.active.Id;
        this.seq.mdate = new Date();
        this._setup.putSequence(this.seq.sequenceid, this.seq).subscribe(function (data) {
            _this.res = data;
            _this.getAllSequence();
            _this.formReset(_this.any);
            _this.list = false;
            _this._use.showMsg('success', 'Sequence Updated', 'Details Updated Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Updated Fail', 'Unable to Update Details');
        });
    };
    SetupSequenceComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.seq = { sequenceid: 0, name: '', prefix: '', counter: '', length: 0,
                userid: this._use.active.Id, date: new Date(), muserid: null, mdate: null };
        }
    };
    SetupSequenceComponent.prototype.listView = function () {
        this.list = true;
        this.edit = false;
    };
    SetupSequenceComponent.prototype.back = function () {
        this.list = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sequenceForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SetupSequenceComponent.prototype, "any", void 0);
    SetupSequenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-sequence',
            template: __webpack_require__(/*! ./setup-sequence.component.html */ "./src/app/views/setup/setup-sequence/setup-sequence.component.html"),
            styles: [__webpack_require__(/*! ./setup-sequence.component.css */ "./src/app/views/setup/setup-sequence/setup-sequence.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]])
    ], SetupSequenceComponent);
    return SetupSequenceComponent;
}());



/***/ }),

/***/ "./src/app/views/setup/setup-sms/setup-sms.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/setup/setup-sms/setup-sms.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/setup/setup-sms/setup-sms.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/setup/setup-sms/setup-sms.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-md-6\">\n    <h2 *ngIf=\"!list\">SMS Api List</h2>\n    <h2 *ngIf=\"list\">Add SMS Api</h2>\n    <ol class=\"breadcrumb\">\n      <li><a>Setup</a> </li>\n      <li><a>Sms Api</a> </li>\n      <li class=\"active\" *ngIf=\"!list\"><strong>List</strong></li>\n      <li class=\"active\" *ngIf=\"list\"><strong>Add</strong></li>\n    </ol>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"title-action\">\n      <a (click)=\"listView()\" class=\"btn btn-primary\" *ngIf=\"!list\">Add Sms Api</a>\n      <a (click)=\"back()\" class=\"btn btn-primary\" *ngIf=\"list\">Back</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"!list\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5 class=\"text-navy\">Sms Api Details</h5>\n          <div class=\"ibox-tools\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n              <i class=\"fa fa-wrench\"></i>\n            </a>\n          </div>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"table-responsive\">\n            <div class=\"row\">\n              <div class=\"col-sm-4 m-b-xs\">\n                <b class=\"control-label col-sm-2\">Show </b>\n                <div class=\"col-sm-6\">\n                  <select class=\"input-sm form-control input-s-sm inline\">\n                    <option value=\"25\">25</option>\n                    <option value=\"50\">50</option>\n                    <option value=\"100\">100</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-sm-4 col-sm-offset-4\">\n                <div class=\"input-group\">\n                  <input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\">\n                  <span class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\n              <thead>\n                <tr>\n                  <th>S/N</th>\n                  <th>Name</th>\n                  <th>SenderId</th>\n                  <th>Username</th>\n                  <th>Password</th>\n                  <th>Status</th>\n                  <th class=\"text-right\">Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let a of smsapi; let i=index\">\n                  <td>{{i+1}}</td>\n                  <td>{{a.name}} </td>\n                  <td>{{a.senderid}}</td>\n                  <td>{{a.username}}</td>\n                  <td>{{a.password}}</td>\n                  <td>{{a.status}}</td>\n                  <td class=\"text-right\">\n                    <div class=\"btn-group\">\n                      <button (click)=\"editApi(a.smsapiid)\" class=\"btn-white btn btn-xs\">Edit</button>\n                      <button (click)=\"delApi(a)\" class=\"btn-white btn btn-xs\">Delete</button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <td colspan=\"7\">\n                    <ul class=\"pagination pull-right\"></ul>\n                  </td>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"list\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5 class=\"text-navy\" *ngIf=\"!edit\">Add Sms Api</h5>\n          <h5 class=\"text-navy\" *ngIf=\"edit\">Edit Sms Api</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <form class=\"form-horizontal\" method=\"Post\" #smsapiForm=\"ngForm\" (ngSubmit)=\"postSmsApi()\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Name: </label>\n                <div class=\"col-lg-9\">\n                  <input type=\"text\" placeholder=\"Account Name\" class=\"form-control\" name=\"name\" [(ngModel)]=\"api.name\" required>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Api URL</label>\n                <div class=\"col-lg-9\">\n                  <input type=\"text\" placeholder=\"Api URL\" class=\"form-control\" name=\"url\" [(ngModel)]=\"api.url\" required>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Sender ID</label>\n                <div class=\"col-lg-9\">\n                  <input type=\"text\" placeholder=\"Sender ID\" class=\"form-control\" name=\"senderid\" [(ngModel)]=\"api.senderid\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Username</label>\n                <div class=\"col-lg-9\">\n                  <input type=\"text\" placeholder=\"UserName\" class=\"form-control\" name=\"username\" [(ngModel)]=\"api.username\" required>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Password</label>\n                <div class=\"col-lg-9\">\n                  <input type=\"text\" placeholder=\"Password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"api.password\" required>\n                </div>\n              </div>\n              <div class=\"form-group col-lg-6\">\n                <label class=\"col-lg-3 control-label\">Status</label>\n                <div class=\"col-lg-9\">\n                  <select id=\"Status\" name=\"Status\" class=\"form-control\" required>\n                    <option value=\"Active\">Active</option>\n                    <option value=\"Diabled\">Disabled</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group col-lg-6\">\n                <label class=\"col-lg-8 control-label\">Set as Default</label>\n                <div class=\"switch col-lg-2\">\n                  <div class=\"onoffswitch\">\n                    <input type=\"checkbox\" class=\"onoffswitch-checkbox\" name=\"default\" [(ngModel)]=\"api.default\" id=\"Default\" required>\n                    <label class=\"onoffswitch-label\" for=\"Default\">\n                      <span class=\"onoffswitch-inner\"></span>\n                      <span class=\"onoffswitch-switch\"></span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-lg-12 col-lg-offset-8\">\n                <a class=\"btn btn-sm btn-white\" type=\"cancel\">Cancel</a>\n                <button class=\"btn btn-sm btn-rounded btn-primary\" *ngIf=\"!edit\" [disabled]=\"smsapiForm.invalid\" type=\"submit\">Save</button>\n                <button class=\"btn btn-sm btn-rounded btn-warning\" *ngIf=\"edit\" [disabled]=\"smsapiForm.invalid\" (click)=\"putSmsApi()\" type=\"button\">Update</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/setup/setup-sms/setup-sms.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/setup/setup-sms/setup-sms.component.ts ***!
  \**************************************************************/
/*! exports provided: SetupSmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupSmsComponent", function() { return SetupSmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetupSmsComponent = /** @class */ (function () {
    function SetupSmsComponent(_setup, _use) {
        this._setup = _setup;
        this._use = _use;
    }
    SetupSmsComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAllSmsApi();
    };
    SetupSmsComponent.prototype.getAllSmsApi = function () {
        var _this = this;
        this._setup.getSmsApis().subscribe(function (data) {
            _this.smsapi = data;
        }, function (err) { alert(err.statusText); });
    };
    SetupSmsComponent.prototype.editApi = function (data) {
        this.api = this.smsapi.find(function (s) { return s.smsapiid === data; });
        // this.api = data;
        this.edit = true;
        this.list = true;
    };
    SetupSmsComponent.prototype.delApi = function (dat) {
        var _this = this;
        this._setup.delSmsApi(dat.smsapiid).subscribe(function (data) {
            _this.res = data;
            _this.smsapi.slice(dat);
        }, function (err) { alert(err.statusText); });
    };
    SetupSmsComponent.prototype.postSmsApi = function () {
        var _this = this;
        this._setup.postSmsApi(this.api).subscribe(function (data) {
            _this.res = data;
            _this.smsapi.push(data);
            _this.formReset(_this.any);
            _this.list = false;
            _this._use.showMsg('success', 'SmsApi Added', 'Added to list Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Add New SmsApi');
        });
    };
    SetupSmsComponent.prototype.putSmsApi = function () {
        var _this = this;
        this.api.muserid = this._use.active.Id;
        this.api.mdate = new Date();
        this._setup.putSmsApi(this.api.smsapiid, this.api).subscribe(function (data) {
            _this.res = data;
            _this.getAllSmsApi();
            _this.formReset(_this.any);
            _this.list = false;
            _this._use.showMsg('success', 'SmsApi Updated', 'Details Updated Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Updated Fail', 'Unable to Update Details');
        });
    };
    SetupSmsComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.api = { smsapiid: 0, name: '', senderid: '', url: '',
                username: '', password: '', default: false, status: 'Active',
                userid: this._use.active.Id, date: new Date(), muserid: null, mdate: null };
        }
    };
    SetupSmsComponent.prototype.listView = function () {
        this.list = true;
        this.edit = false;
    };
    SetupSmsComponent.prototype.back = function () {
        this.list = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('smsapiForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SetupSmsComponent.prototype, "any", void 0);
    SetupSmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-sms',
            template: __webpack_require__(/*! ./setup-sms.component.html */ "./src/app/views/setup/setup-sms/setup-sms.component.html"),
            styles: [__webpack_require__(/*! ./setup-sms.component.css */ "./src/app/views/setup/setup-sms/setup-sms.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]])
    ], SetupSmsComponent);
    return SetupSmsComponent;
}());



/***/ }),

/***/ "./src/app/views/setup/setup-smslogs/setup-smslogs.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/setup/setup-smslogs/setup-smslogs.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/setup/setup-smslogs/setup-smslogs.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/setup/setup-smslogs/setup-smslogs.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>     \r\n    <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n        <div class=\"col-sm-6\">\r\n            <h2>Sms Logs Manager</h2>\r\n            <ol class=\"breadcrumb\">\r\n                <li><a routerLink=\"dashboard\">Dashboard</a></li>\r\n                <li class=\"active\">\r\n                    <strong>Smslog  / {{smslog.length}}</strong>\r\n                </li>\r\n            </ol>\r\n        </div>\r\n        <div class=\"col-sm-2 pull-right\">\r\n            <div class=\"title-action\">\r\n                <a routerLink=\"/setup\" class=\"btn Add btn-primary\">Sms Setup</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"title-action\">\r\n                <div class=\"input-group\">\r\n                    <input type=\"text\" name=\"search\" [(ngModel)]=\"search\" class=\"form-control\" required>\r\n                    <span class=\"input-group-btn\">\r\n                        <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i></button>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper View wrapper-content animated fadeInRight\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\" *ngFor=\"let s of smslog\">\r\n                <div class=\"contact-box\">\r\n                    <a>\r\n                        <div class=\"col-sm-12 col-xs-12\">\r\n                            <h3><strong>Length: {{s.message.length}}</strong></h3>\r\n                            <ul class=\"list-unstyled m-t-md\">\r\n                                <li>\r\n                                    <span class=\"fa fa-phone m-r-xs\"></span>\r\n                                    <label> </label> {{s.mobile}} <br>\r\n                                    <span class=\"fa fa-calendar m-r-xs\"></span>\r\n                                    <label> </label> {{s.date | date}} <br>\r\n                                    <span class=\"fa fa-handshake-o m-r-xs\"></span>\r\n                                    <label> </label> {{s.code}}<br>\r\n                                    <span class=\"fa fa-envelope m-r-xs\"></span>\r\n                                    <label> </label> {{s.response}}\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    </a>\r\n                    <div class=\"btn-group\">\r\n                        <a ng-click=\"retry(s.smsid)\" class=\"btn btn-xs btn-white\"><i class=\"fa fa-refresh\"></i> Resend</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 text-center\"> \r\n            <button class=\"btn btn-default btn-circle btn-lg\" type=\"button\"><i class=\"fa fa-refresh fa-spin\"></i></button>\r\n        </div><br>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/views/setup/setup-smslogs/setup-smslogs.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/setup/setup-smslogs/setup-smslogs.component.ts ***!
  \**********************************************************************/
/*! exports provided: SetupSmslogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupSmslogsComponent", function() { return SetupSmslogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetupSmslogsComponent = /** @class */ (function () {
    function SetupSmslogsComponent(_setup, _use) {
        this._setup = _setup;
        this._use = _use;
        this.smslog = [];
    }
    SetupSmslogsComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAllSmsLog();
        this.search = '';
    };
    SetupSmslogsComponent.prototype.getAllSmsLog = function () {
        var _this = this;
        this._setup.getSmslogs().subscribe(function (data) {
            _this.smslog = data;
        }, function (err) { alert(err.statusText); });
    };
    SetupSmslogsComponent.prototype.retry = function (id) {
        var _this = this;
        this._setup.postSmslog(id).subscribe(function (data) {
            _this.res = data;
        }, function (err) { alert(err.statusText); });
    };
    SetupSmslogsComponent.prototype.searchData = function (data) {
        console.log(data);
    };
    SetupSmslogsComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.sms = { id: '', muserid: this._use.active.Id, mdate: new Date() };
        }
    };
    SetupSmslogsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-smslogs',
            template: __webpack_require__(/*! ./setup-smslogs.component.html */ "./src/app/views/setup/setup-smslogs/setup-smslogs.component.html"),
            styles: [__webpack_require__(/*! ./setup-smslogs.component.css */ "./src/app/views/setup/setup-smslogs/setup-smslogs.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_1__["SetupService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]])
    ], SetupSmslogsComponent);
    return SetupSmslogsComponent;
}());



/***/ }),

/***/ "./src/app/views/setup/setup-teller/setup-teller.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/setup/setup-teller/setup-teller.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/setup/setup-teller/setup-teller.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/setup/setup-teller/setup-teller.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-md-10\">\n    <h2 *ngIf=\"!list\">Tellers Manager</h2>\n    <h2 *ngIf=\"list\">Add Teller</h2>\n    <ol class=\"breadcrumb\">\n      <li><a>Home</a></li>\n      <li><a>Setup</a></li>\n      <li><a>Teller</a></li>\n      <li class=\"active\" *ngIf=\"!list\"><strong>List</strong></li>\n      <li class=\"active\" *ngIf=\"list\"><strong>Add</strong></li>\n    </ol>\n  </div>\n  <div class=\"col-md-2 pull-right\">\n    <div class=\"title-action\">\n      <a routerLink=\"/setup/users\" class=\"btn btn-primary\">Users Manager</a>\n    </div>\n  </div>\n</div>\n\n<!-- Add New Teller form -->\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5 class=\"text-navy\" *ngIf=\"!edit\">Add Teller</h5>\n          <h5 class=\"text-navy\" *ngIf=\"edit\">Edit Teller</h5>\n          <div class=\"ibox-tools\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n              <i class=\"fa fa-wrench\"></i>\n            </a>\n          </div>\n        </div>\n        <div class=\"ibox-content\">\n          <form class=\"form-horizontal\" method=\"Post\" #tellerForm=\"ngForm\" (ngSubmit)=\"postTeller()\">\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label>User: </label>\n                    <div class=\"input-group date\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-bandcamp\"></i></span>\n                      <select class=\"form-control\" name=\"id\" [(ngModel)]=\"tel.id\" required>\n                        <option value=\"\">Choose User</option>\n                        <option *ngFor=\"let u of users\" [value]=\"u.id\">{{u.username}}</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Nominal: </label>\n                    <div class=\"input-group date\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-bandcamp\"></i></span>\n                      <select class=\"form-control\" name=\"nominalid\" [(ngModel)]=\"tel.nominalid\" required>\n                        <option value=\"\">Choose Nominal</option>\n                        <option *ngFor=\"let n of nom\" [value]=\"n.nominalid\">{{n.code}} {{n.description}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"col-md-offset-7 col-md-12\">\n                    <a class=\"btn btn-sm btn-white\" type=\"cancel\">Cancel</a>\n                    <button class=\"btn btn-sm btn-rounded btn-primary\" *ngIf=\"!edit\" [disabled]=\"tellerForm.invalid\" type=\"submit\">Add</button>\n                    <button class=\"btn btn-sm btn-rounded btn-warning\" *ngIf=\"edit\" [disabled]=\"tellerForm.invalid\" (click)=\"putTeller()\" type=\"button\">Update</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"ibox\">\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-sm-offset-6\">\n              <div class=\"input-group\">\n                <input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\">\n                <span class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\n              <thead>\n                <tr>\n                  <th>S/N</th>\n                  <th>Code</th>\n                  <th>Nominal</th>\n                  <th>User</th>\n                  <th>NoOfTran</th>\n                  <th class=\"text-right\">Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let d of tellers; let i=index\">\n                  <td> {{i + 1}}</td>\n                  <td>{{d.code}}</td>\n                  <td>{{d.name}}</td>\n                  <td>{{d.user}}</td>\n                  <td>{{d.nooftrans}}</td>\n                  <td class=\"text-right\">\n                    <div class=\"btn-group\">\n                      <button (click)=\"editTel(d)\" class=\"btn-white btn btn-xs\">Edit</button>\n                      <button (click)=\"delTel(d)\" class=\"btn-white btn btn-xs\">Delete</button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <td colspan=\"6\">\n                    <ul class=\"pagination pull-right\"></ul>\n                  </td>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/setup/setup-teller/setup-teller.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/setup/setup-teller/setup-teller.component.ts ***!
  \********************************************************************/
/*! exports provided: SetupTellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupTellerComponent", function() { return SetupTellerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SetupTellerComponent = /** @class */ (function () {
    function SetupTellerComponent(_setup, _api, _use) {
        this._setup = _setup;
        this._api = _api;
        this._use = _use;
    }
    SetupTellerComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAll();
        this.getAllTellers();
    };
    SetupTellerComponent.prototype.getAll = function () {
        var _this = this;
        this._setup.getUsers().subscribe(function (data) {
            _this.users = data;
        }, function (err) {
            _this._use.showMsg('error', 'Users Lists', 'Unable to Get All Users');
        });
        this._setup.getNominalsByGlType('Teller').subscribe(function (data) {
            _this.nom = data;
        }, function (err) {
            _this._use.showMsg('error', 'Nominal Lists', 'Unable to Get All Nominal');
        });
    };
    SetupTellerComponent.prototype.getAllTellers = function () {
        var _this = this;
        this._api.getTellers().subscribe(function (data) {
            _this.tellers = data;
        }, function (err) {
            _this._use.showMsg('error', 'Teller Lists', 'Unable to Get All Tellers');
        });
    };
    SetupTellerComponent.prototype.editTel = function (dat) {
        var _this = this;
        // this.tel = this.tellers.find(s => s.tellersid === data);
        // this.tel = data;
        this._api.getTeller(dat.tellerid).subscribe(function (data) {
            _this.tel = data;
            JSON.stringify(_this.tel);
            _this.edit = true;
            _this.list = true;
        }, function (err) { alert(err.error); });
    };
    SetupTellerComponent.prototype.delTel = function (dat) {
        var _this = this;
        this._api.delTeller(dat.tellerid).subscribe(function (data) {
            _this.res = data;
            _this.getAllTellers();
        }, function (err) { alert(err.error); });
    };
    SetupTellerComponent.prototype.postTeller = function () {
        var _this = this;
        this._api.postTeller(this.tel).subscribe(function (data) {
            _this.res = data;
            _this.tellers.push(data);
            _this.formReset();
            _this.list = false;
            _this._use.showMsg('success', 'Teller Added', 'Added to list Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Add New Teller');
        });
    };
    SetupTellerComponent.prototype.putTeller = function () {
        var _this = this;
        this.tel.muserid = this._use.active.Id;
        this.tel.mdate = new Date();
        this._api.putTeller(this.tel.tellerid, this.tel).subscribe(function (data) {
            _this.res = data;
            _this.getAllTellers();
            _this.formReset();
            _this.list = false;
            _this._use.showMsg('success', 'Teller Updated', 'Details Updated Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Updated Fail', 'Unable to Update Details');
        });
    };
    SetupTellerComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.tel = { id: '', name: '', nominalid: '',
                userid: this._use.active.Id, date: new Date(), muserid: null, mdate: null
            };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tellerForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SetupTellerComponent.prototype, "any", void 0);
    SetupTellerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-teller',
            template: __webpack_require__(/*! ./setup-teller.component.html */ "./src/app/views/setup/setup-teller/setup-teller.component.html"),
            styles: [__webpack_require__(/*! ./setup-teller.component.css */ "./src/app/views/setup/setup-teller/setup-teller.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"], src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_3__["TellerService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"]])
    ], SetupTellerComponent);
    return SetupTellerComponent;
}());



/***/ }),

/***/ "./src/app/views/setup/setup-transit/setup-transit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/setup/setup-transit/setup-transit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/setup/setup-transit/setup-transit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/setup/setup-transit/setup-transit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-md-10\">\n    <h2 *ngIf=\"!list\">Transits Manager</h2>\n    <h2 *ngIf=\"list\">Add Transit</h2>\n    <ol class=\"breadcrumb\">\n      <li><a>Home</a></li>\n      <li><a>Setup</a></li>\n      <li><a>Transit</a></li>\n      <li class=\"active\" *ngIf=\"!list\"><strong>List</strong></li>\n      <li class=\"active\" *ngIf=\"list\"><strong>Add</strong></li>\n    </ol>\n  </div>\n  <div class=\"col-md-2 pull-right\">\n    <div class=\"title-action\">\n      <a routerLink=\"/setup/nominal\" class=\"btn btn-primary\">Nominal</a>\n    </div>\n  </div>\n</div>\n\n<!-- Add New Transit form -->\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5 class=\"text-navy\" *ngIf=\"!edit\">Add Transit</h5>\n          <h5 class=\"text-navy\" *ngIf=\"edit\">Edit Transit</h5>\n          <div class=\"ibox-tools\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n              <i class=\"fa fa-wrench\"></i>\n            </a>\n          </div>\n        </div>\n        <div class=\"ibox-content\">\n          <form class=\"form-horizontal\" method=\"Post\" #transitForm=\"ngForm\" (ngSubmit)=\"postTransit()\">\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label>Name: </label>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-id-badge\"></i></span>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"api.name\" name=\"name\" placeholder=\"Name\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-group hidden\">\n                    <label>Code: </label>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-money\"></i></span>\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"api.code\" name=\"code\" placeholder=\"Transit Code\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Payment Method: </label>\n                    <div class=\"input-group date\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-bandcamp\"></i></span>\n                      <select class=\"form-control\" name=\"method\" [(ngModel)]=\"api.method\" required>\n                        <option value=\"\">Select From Options</option>\n                        <option value=\"cash\">Cash</option>\n                        <option value=\"momo\">Mobile Money</option>\n                        <option value=\"pos\">POS</option>\n                        <option value=\"cheque\">Cheque</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Nominal: </label>\n                    <div class=\"input-group date\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-bandcamp\"></i></span>\n                      <select class=\"form-control\" name=\"nominalid\" [(ngModel)]=\"api.nominalid\" required>\n                        <option value=\"\">Choose Nominal</option>\n                        <option *ngFor=\"let n of nom\" [value]=\"n.nominalid\">{{n.code}} {{n.description}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"col-md-offset-7 col-md-12\">\n                    <a class=\"btn btn-sm btn-white\" (click)=\"back()\" type=\"cancel\">Cancel</a>\n                    <button class=\"btn btn-sm btn-rounded btn-primary\" *ngIf=\"!edit\" [disabled]=\"transitForm.invalid\" type=\"submit\">Add</button>\n                    <button class=\"btn btn-sm btn-rounded btn-warning\" *ngIf=\"edit\" [disabled]=\"transitForm.invalid\" (click)=\"putTransit()\" type=\"button\">Update</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"ibox\">\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-sm-offset-6\">\n              <div class=\"input-group\">\n                <input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\">\n                <span class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\n              <thead>\n                <tr>\n                  <th>S/N</th>\n                  <th>Code</th>\n                  <th>Name</th>\n                  <th>Method</th>\n                  <th data-hide=\"phone\">Nominal</th>\n                  <th class=\"text-right\">Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let d of transit; let i=index\">\n                  <td> {{i + 1}}</td>\n                  <td>{{d.code}}</td>\n                  <td>{{d.name}}</td>\n                  <td>{{d.method}}</td>\n                  <td>{{d.nominal.description}}</td>\n                  <td class=\"text-right\">\n                    <div class=\"btn-group\">\n                      <button (click)=\"editTr(d)\" class=\"btn-white btn btn-xs\">Edit</button>\n                      <button (click)=\"delTr(d)\" class=\"btn-white btn btn-xs\">Delete</button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <td colspan=\"6\">\n                    <ul class=\"pagination pull-right\"></ul>\n                  </td>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/setup/setup-transit/setup-transit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/setup/setup-transit/setup-transit.component.ts ***!
  \**********************************************************************/
/*! exports provided: SetupTransitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupTransitComponent", function() { return SetupTransitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetupTransitComponent = /** @class */ (function () {
    function SetupTransitComponent(_setup, _use) {
        this._setup = _setup;
        this._use = _use;
    }
    SetupTransitComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAllTransit();
    };
    SetupTransitComponent.prototype.getAllTransit = function () {
        var _this = this;
        this._setup.getTransits().subscribe(function (data) {
            _this.transit = data;
            _this._use.showMsg('success', 'Transit Fetch', 'Fetch Transit list Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Fetching Fail', 'Unable to Fetch Transit List');
        });
        this._setup.getNominalsByGlType('income').subscribe(function (data) {
            _this.nom = data;
        }, function (err) { alert(err.statusText); });
    };
    SetupTransitComponent.prototype.editTr = function (data) {
        // this.api = this.transit.find(s => s.transitid === data);
        this.api = data;
        this.edit = true;
        this.list = true;
    };
    SetupTransitComponent.prototype.delTr = function (dat) {
        var _this = this;
        this._setup.delTransit(dat.transitid).subscribe(function (data) {
            _this.res = data;
            _this.transit.slice(dat);
        }, function (err) { alert(err.statusText); });
    };
    SetupTransitComponent.prototype.postTransit = function () {
        var _this = this;
        this._setup.getCode('Transit').subscribe(function (data) {
            _this.api.code = data;
            _this.addTransit(_this.api);
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Generate New Code for Nominal');
        });
    };
    SetupTransitComponent.prototype.addTransit = function (dat) {
        var _this = this;
        this._setup.postTransit(dat).subscribe(function (data) {
            _this.res = data;
            _this.transit.push(data);
            _this.formReset();
            _this._use.showMsg('success', 'Transit Added', 'Added to list Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Add New Transit');
        });
    };
    SetupTransitComponent.prototype.putTransit = function () {
        var _this = this;
        this.api.muserid = this._use.active.Id;
        this.api.mdate = new Date();
        this._setup.putTransit(this.api.transitid, this.api).subscribe(function (data) {
            _this.res = data;
            _this.getAllTransit();
            _this.formReset(_this.any);
            _this.list = false;
            _this._use.showMsg('success', 'Transit Updated', 'Details Updated Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Updated Fail', 'Unable to Update Details');
        });
    };
    SetupTransitComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.api = {
                transitid: 0, name: '', method: '', code: '', nominalid: '',
                userid: this._use.active.Id, date: new Date(), muserid: null, mdate: null
            };
        }
    };
    SetupTransitComponent.prototype.listView = function () {
        this.list = true;
        this.edit = false;
    };
    SetupTransitComponent.prototype.back = function () {
        this.list = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('transitForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SetupTransitComponent.prototype, "any", void 0);
    SetupTransitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-transit',
            template: __webpack_require__(/*! ./setup-transit.component.html */ "./src/app/views/setup/setup-transit/setup-transit.component.html"),
            styles: [__webpack_require__(/*! ./setup-transit.component.css */ "./src/app/views/setup/setup-transit/setup-transit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]])
    ], SetupTransitComponent);
    return SetupTransitComponent;
}());



/***/ }),

/***/ "./src/app/views/setup/setup-user/setup-user.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/setup/setup-user/setup-user.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/setup/setup-user/setup-user.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/setup/setup-user/setup-user.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-md-8\">\r\n    <h2 *ngIf=\"!list\">Users List</h2>\r\n    <h2 *ngIf=\"list\">Add User</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a>Home</a></li>\r\n      <li><a>SetUp</a></li>\r\n      <li><a>Users</a></li>\r\n      <li class=\"active\" *ngIf=\"!list\"><strong>List</strong></li>\r\n      <li class=\"active\" *ngIf=\"list\"><strong>Add</strong></li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-md-4 pull-right\">\r\n    <div class=\"title-action\">\r\n      <a routerLink=\"/setup/teller\" class=\"btn btn-primary\" *ngIf=\"!list\">Tellers</a> \r\n      <a (click)=\"listView()\" class=\"btn btn-primary\" *ngIf=\"!list\">Add User</a>\r\n      <a (click)=\"back()\" class=\"btn btn-primary\" *ngIf=\"list\">List</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\" *ngIf=\"!list\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"ibox\">\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 m-b-xs\">\r\n              <b class=\"control-label col-sm-2\">Show </b>\r\n              <div class=\"col-sm-6\">\r\n                <select class=\"input-sm form-control input-s-sm inline\" ng-model=\"Limit\" ng-init=\"Limit=25\">\r\n                  <option ng-selected=\"Limit == 25\" value=\"25\">25</option>\r\n                  <option ng-selected=\"Limit == 50\" value=\"50\">50</option>\r\n                  <option ng-selected=\"Limit == 100\" value=\"100\">100</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 col-sm-offset-4\">\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" placeholder=\"Search\" ng-model=\"SearchData\" class=\"input-sm form-control\"> <span\r\n                  class=\"input-group-btn\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\r\n            <thead>\r\n              <tr>\r\n                <th>S/N</th>\r\n                <th data-hide=\"phone\">FullName</th>\r\n                <!-- <th data-hide=\"phone\">Mobile</th> -->\r\n                <th data-hide=\"phone\">UserType</th>\r\n                <th data-hide=\"phone\">Username</th>\r\n                <th data-hide=\"phone\">Status</th>\r\n                <th data-hide=\"phone\">Logout</th>\r\n                <th data-hide=\"phone\">Login</th>\r\n                <th class=\"text-right\">Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let u of users; let i=index\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{u.fullname}} </td>\r\n                <!-- <td>{{u.mobile}}</td> -->\r\n                <td>{{u.usertype}}</td>\r\n                <td>{{u.username}}</td>\r\n                <td>\r\n                  <span *ngIf=\"!u.isloggedin\" class=\"label label-warning\">Offline</span>\r\n                  <span *ngIf=\"u.isloggedin\" class=\"label label-primary\">Online</span>\r\n                </td>\r\n                <td>{{u.logout|date:'short'}}</td>\r\n                <td>{{u.login|date:'short'}}</td>\r\n                <td class=\"text-right\">\r\n                  <div class=\"btn-group\">\r\n                    <button (click)=\"editUser(u)\" class=\"btn-white btn btn-xs\">Edit</button>\r\n                    <button (click)=\"reset(u)\" class=\"btn-white btn btn-xs\">Reset</button>\r\n                    <button (click)=\"delUser(u)\" class=\"btn-white btn btn-xs\">Delete</button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <td colspan=\"8\">\r\n                  <ul class=\"pagination pull-right\"></ul>\r\n                </td>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Add New user form -->\r\n<div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"list\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <h5 class=\"text-navy\" *ngIf=\"!edit\">Add New User</h5>\r\n          <h5 class=\"text-navy\" *ngIf=\"edit\">Edit User </h5>\r\n          <div class=\"ibox-tools\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n              <i class=\"fa fa-wrench\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <form class=\"form-horizontal\" method=\"Post\" #userForm=\"ngForm\" (ngSubmit)=\"postUser()\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label>Employee: </label>\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-id-badge\"></i></span>\r\n                  <select class=\"form-control\" [(ngModel)]=\"usr.employeeid\" name=\"employeeid\" required>\r\n                    <option value=\"\">Select Employee..</option>\r\n                    <option *ngFor=\"let l of emp\" [value]=\"l.employeeid\">{{l.fullname}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>UserType: </label>\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-users\"></i></span>\r\n                  <select class=\"form-control\" [(ngModel)]=\"usr.usertype\" name=\"usertype\" required>\r\n                    <option value=\"\">Select User Type..</option>\r\n                    <option value=\"Kitchen\">Kitchen</option>\r\n                    <option value=\"Cashier\">Cashier</option>\r\n                    <option value=\"Accountant\">Accountant</option>\r\n                    <option value=\"Admin\">Administrator</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Username: </label>\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usr.username\" name=\"username\" placeholder=\"UserName\" autocomplete=\"username\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Password: </label>\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-eye\"></i></span>\r\n                  <input type=\"password\" class=\"form-control\" [(ngModel)]=\"usr.password\" name=\"password\" placeholder=\"Password\" autocomplete=\"new-password\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Confirm Password: </label>\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-eye\"></i></span>\r\n                  <input type=\"password\" class=\"form-control\" [(ngModel)]=\"usr.conpassword\" name=\"conpassword\" placeholder=\"Repeat Password\" autocomplete=\"new-password\" required>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"col-md-offset-7 col-md-12\">\r\n                <a class=\"btn btn-sm btn-white\" (click)=\"back()\" type=\"cancel\">Cancel</a>\r\n                <button class=\"btn btn-sm btn-rounded btn-primary\" *ngIf=\"!edit\" [disabled]=\"userForm.invalid\" type=\"submit\">Add User</button>\r\n                <button class=\"btn btn-sm btn-rounded btn-warning\" *ngIf=\"edit\" [disabled]=\"userForm.invalid\" (click)=\"putUser()\" type=\"button\">Update</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/setup/setup-user/setup-user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/setup/setup-user/setup-user.component.ts ***!
  \****************************************************************/
/*! exports provided: SetupUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupUserComponent", function() { return SetupUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SetupUserComponent = /** @class */ (function () {
    function SetupUserComponent(_setup, _emp, _use) {
        this._setup = _setup;
        this._emp = _emp;
        this._use = _use;
    }
    SetupUserComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getEmployees();
        this.getAllUsers();
    };
    SetupUserComponent.prototype.getEmployees = function () {
        var _this = this;
        this._emp.getEmployees().subscribe(function (data) {
            _this.emp = data;
        }, function (err) { alert(err.statusText); });
    };
    SetupUserComponent.prototype.getAllUsers = function () {
        var _this = this;
        this._setup.getUsers().subscribe(function (data) {
            _this.users = data;
        }, function (err) {
            _this._use.showMsg('error', 'User Lists', 'Unable to Get All Users');
        });
    };
    SetupUserComponent.prototype.editUser = function (data) {
        // this.usr = this.users.find(s => s.usersid === data);
        this.usr = data;
        this.edit = true;
        this.list = true;
    };
    SetupUserComponent.prototype.delUser = function (dat) {
        var _this = this;
        this._setup.delUser(dat.userid).subscribe(function (data) {
            _this.res = data;
            _this.users.slice(dat);
        }, function (err) { alert(err.statusText); });
    };
    SetupUserComponent.prototype.postUser = function () {
        var _this = this;
        if (this.usr.password === this.usr.conpassword) {
            this._setup.postUser(this.usr).subscribe(function (data) {
                _this.res = data;
                _this.getAllUsers();
                _this.formReset(_this.any);
                _this.list = false;
                _this._use.showMsg('success', 'User Added', 'Added to list Successfully');
            }, function (err) {
                _this._use.showMsg('error', 'Adding Fail', 'Unable to Add New User');
            });
        }
        else {
            this._use.showMsg('error', 'Adding Fail', 'User password do not match');
        }
    };
    SetupUserComponent.prototype.putUser = function () {
        var _this = this;
        this.usr.muserid = this._use.active.Id;
        this.usr.mdate = new Date();
        this._setup.putUser(this.usr.usersid, this.usr).subscribe(function (data) {
            _this.res = data;
            _this.getAllUsers();
            _this.formReset(_this.any);
            _this.list = false;
            _this._use.showMsg('success', 'User Updated', 'Details Updated Successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Updated Fail', 'Unable to Update Details');
        });
    };
    SetupUserComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.usr = {
                employeeid: '', username: '', password: '', conpassword: '', usertype: '',
                userid: this._use.active.Id, date: new Date(), muserid: null, mdate: null
            };
        }
    };
    SetupUserComponent.prototype.listView = function () {
        this.list = true;
        this.edit = false;
    };
    SetupUserComponent.prototype.back = function () {
        this.list = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SetupUserComponent.prototype, "any", void 0);
    SetupUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-user',
            template: __webpack_require__(/*! ./setup-user.component.html */ "./src/app/views/setup/setup-user/setup-user.component.html"),
            styles: [__webpack_require__(/*! ./setup-user.component.css */ "./src/app/views/setup/setup-user/setup-user.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"], src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_4__["TellerService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]])
    ], SetupUserComponent);
    return SetupUserComponent;
}());



/***/ }),

/***/ "./src/app/views/teller/teller-placeorder/teller-placeorder.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/teller/teller-placeorder/teller-placeorder.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* -------------------------------------\r\n    INVOICE\r\n    Styles for the billing table\r\n------------------------------------- */\r\n.invoice {\r\n  margin: 40px auto;\r\n  text-align: left;\r\n  width: 80%;\r\n}\r\n.invoice td {\r\n  padding: 5px 0;\r\n}\r\n.invoice .invoice-items {\r\n  width: 100%;\r\n}\r\n.invoice .invoice-items td {\r\n  border-top: #eee 1px solid;\r\n}\r\n.invoice .invoice-items .total td {\r\n  border-top: 2px solid #333;\r\n  border-bottom: 2px solid #333;\r\n  font-weight: 700;\r\n}\r\n"

/***/ }),

/***/ "./src/app/views/teller/teller-placeorder/teller-placeorder.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/teller/teller-placeorder/teller-placeorder.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ng-controller=\"customersctrl\">\r\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <div class=\"col-sm-4\">\r\n      <h2>Place Order</h2>\r\n      <ol class=\"breadcrumb\">\r\n        <li><a>Home</a></li>\r\n        <li><a>Teller</a></li>\r\n        <li class=\"active\"><strong>Place Order</strong></li>\r\n      </ol>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"title-action\">\r\n        <a (click)=\"checkOut()\" class=\"btn btn-primary\" title=\"Check Out\">{{totalPrice()|currency:'Ghc '}}</a>\r\n        <ul class=\"nav navbar-top-links navbar-right\">\r\n          <li class=\"dropdown\">\r\n            <a class=\"dropdown-toggle count-info\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-shopping-cart fa-3x\"></i> <span class=\"label label-warning\">{{cartTotal()}}</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu dropdown-messages\">\r\n              <li>\r\n                <span class=\"m-r-sm text-muted welcome-message\">Place</span>\r\n              </li>\r\n              <li *ngFor=\"let c of cart\">\r\n                <div class=\"dropdown-messages-box\">\r\n                  <a class=\"pull-left\">\r\n                    <img alt=\"image\" class=\"img-circle\" [src]=\"img + c.img\" onerror=\"this.src='assets/img/acyst-logo.png'\">\r\n                  </a>\r\n                  <div class=\"media-body\">\r\n                    <small class=\"pull-right\">{{c.date|date:'m'}} min ago</small>\r\n                    <strong>{{c.name}} </strong> <br> {{c.description}}.<br />\r\n                    <small class=\"text-muted\">{{c.date|date:'fullDate'}}</small><br />\r\n                  </div>\r\n                </div>\r\n                <p class=\"divider\"></p>\r\n              </li>\r\n              <li>\r\n                <div class=\"text-center link-block\">\r\n                  <a (click)=\"checkOut()\">\r\n                    <strong>Proceed to checkout </strong><i class=\"fa fa-money\"></i>{{totalPrice()|currency:'Ghc '}}\r\n                  </a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"!checkout\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\" *ngFor=\"let f of food\">\r\n        <div class=\"ibox\">\r\n          <div class=\"ibox-content product-box\">\r\n            <!-- <div class=\"product-imitation\">\r\n              <img class=\"img-responsive\" src=\"{{img + f.image}}\">\r\n            </div> -->\r\n            <div class=\"product-desc\">\r\n              <span class=\"product-price\">\r\n                {{f.price - ((f.price * f.discount) / 100) | currency:'Ghc '}}\r\n              </span>\r\n              <small class=\"text-muted\"></small>\r\n              <a href=\"#\" class=\"product-name\">{{f.name}}</a>\r\n              <div class=\"small m-t-xs\">\r\n                {{f.description}}\r\n              </div>\r\n              <div class=\"m-t text-righ\">\r\n                <a (click)=\"addCart(f);\" class=\"btn btn-xs btn-outline btn-primary\"><i class=\"fa fa-cart-plus\"></i> Add to Cart </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"checkout\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-sm-6\">\r\n        <form class=\"m-t form\" method=\"Post\" #orderForm=\"ngForm\" (ngSubmit)=\"postOrder()\">\r\n          <div class=\"ibox float-e-margins\">\r\n            <div class=\"ibox-title\">\r\n              <h5 class=\"text-navy\">Place Order</h5>\r\n              <div class=\"ibox-tools\">\r\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                  <i class=\"fa fa-wrench\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"ibox-content\">\r\n              <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>Full Name</label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-id-badge\"></i></span>\r\n                        <input type=\"text\" name=\"fullname\" [(ngModel)]=\"order.fullname\" placeholder=\"Full Name\" class=\"form-control\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Phone Number</label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-phone\"></i></span>\r\n                        <input type=\"text\" name=\"mobile\" [(ngModel)]=\"order.mobile\" placeholder=\"Phone Number\" class=\"form-control\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group hidden\">\r\n                      <label>Email Address</label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-at\"></i></span>\r\n                        <input type=\"text\" name=\"email\" [(ngModel)]=\"order.email\" placeholder=\"Email Address\" class=\"form-control\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group hidden\">\r\n                      <label>Place of work</label>\r\n                      <div class=\"input-group date\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-id-badge\"></i></span>\r\n                        <select class=\"form-control\" name=\"locationid\" [(ngModel)]=\"order.locationid\">\r\n                          <option value=\"\">Place Of Work</option>\r\n                          <option *ngFor=\"let l of loc\" [value]=\"l.locationid\">{{l.name}}</option>\r\n\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Payment Method: </label>\r\n                      <div class=\"input-group date\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-bandcamp\"></i></span>\r\n                        <select class=\"form-control\" name=\"method\" [(ngModel)]=\"order.method\" required>\r\n                          <option value=\"cash\">Cash</option>\r\n                          <option value=\"momo\">Mobile Money</option>\r\n                          <option value=\"pos\">POS</option>\r\n                          <option value=\"cheque\">Cheque</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-7 col-md-12\">\r\n                      <a class=\"btn btn-sm btn-white btn-rounded\" (click)=\"cancel()\" type=\"cancel\">Cancel</a>\r\n                      <button class=\"btn btn-sm btn-rounded btn-primary\" *ngIf=\"!edit\" [disabled]=\"orderForm.invalid\" type=\"submit\">Place Order</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-6\">\r\n        <div class=\"ibox float-e-margins\">\r\n          <div class=\"ibox-title\">\r\n            <h5 class=\"text-navy\">Order Reciept</h5>\r\n          </div>\r\n          <div class=\"ibox-content\">\r\n            <div class=\"panel-body hidden\">\r\n              <table class=\"body-wrap\">\r\n                <tr>\r\n                  <td></td>\r\n                  <td class=\"container\" width=\"600\">\r\n                    <div class=\"content\">\r\n                      <table class=\"main\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\r\n                        <tr>\r\n                          <td class=\"content-wrap aligncenter\">\r\n                            <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\r\n                              <tr>\r\n                                <td class=\"content-block\">\r\n                                  <h2>{{order.fullname}}</h2>\r\n                                  <h4>{{order.mobile}}</h4>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td class=\"content-block\">\r\n                                  <table class=\"invoice\">\r\n                                    <tr>\r\n                                      <td>{{ _use.active.Username}}<br>Invoice #12345<br>June 01 2015</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                      <td>\r\n                                        <table class=\"invoice-items\" cellpadding=\"0\" cellspacing=\"0\">\r\n                                          <tr *ngFor=\"let l of cart\">\r\n                                            <td>{{l.name}}</td>\r\n                                            <td>{{l.quantity}}</td>\r\n                                            <td class=\"alignright\" width=\"10px\">{{l.amount|currency:'₵ '}}</td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <td>VAT</td>\r\n                                            <td></td>\r\n                                            <td class=\"alignright\">{{order.vat|currency:'₵ '}}</td>\r\n                                          </tr>\r\n                                          <tr class=\"total\">\r\n                                            <td class=\"alignright\" width=\"80%\">Total</td>\r\n                                            <td></td>\r\n                                            <td class=\"alignright\">{{total+vat|currency:'GHC '}}</td>\r\n                                          </tr>\r\n                                        </table>\r\n                                      </td>\r\n                                    </tr>\r\n                                  </table>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td class=\"text-center content-block\">\r\n                                  Application Developed By Acyst Technology.\r\n                                </td>\r\n                              </tr>\r\n                            </table>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </div>\r\n                  </td>\r\n                  <td></td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <div class=\"body-wrap\">\r\n                <div class=\"table-responsive\" width=\"600\">\r\n                  <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\r\n                    <tr>\r\n                      <td class=\"content-block\">\r\n                        <h2>{{order.fullname}}</h2>\r\n                        <h4>{{order.mobile}}</h4>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>{{user}}<br>Orderno: {{order.orderno}}<br>{{order.date|date:'short'}}</td>\r\n                    </tr>\r\n                  </table>\r\n                  <table class=\"footable table table-stripped toggle-arrow-tiny\">\r\n                    <thead class=\"hidden\">\r\n                      <tr>\r\n                        <th>Food</th>\r\n                        <th width=\"20%\">Quantity</th>\r\n                        <th width=\"30%\">Amount</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let l of order.orderlist\">\r\n                        <td>{{l.name}}</td>\r\n                        <td>{{l.quantity}}</td>\r\n                        <td class=\"alignright\">{{l.amount|currency:'₵ '}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>VAT</td>\r\n                        <td></td>\r\n                        <td class=\"alignright\">{{order.vat|currency:'₵ '}}</td>\r\n                      </tr>\r\n                      <tr class=\"total\">\r\n                        <td class=\"alignright\" width=\"60%\"><b>Total</b></td>\r\n                        <td></td>\r\n                        <td class=\"alignright\">{{order.total|currency:'GHC '}}</td>\r\n                      </tr>\r\n                      <tr colSpan=\"3\"></tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                      <tr>\r\n                        <td colspan=\"3\" class=\"text-center content-block\">\r\n                          Application Developed By Acyst Technology.\r\n                        </td>\r\n                      </tr>\r\n                    </tfoot>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/teller/teller-placeorder/teller-placeorder.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/teller/teller-placeorder/teller-placeorder.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TellerPlaceorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TellerPlaceorderComponent", function() { return TellerPlaceorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TellerPlaceorderComponent = /** @class */ (function () {
    function TellerPlaceorderComponent(_setup, _api, _use) {
        this._setup = _setup;
        this._api = _api;
        this._use = _use;
        this.cart = [];
        this.img = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["config"].imageUrl + 'food/';
    }
    TellerPlaceorderComponent.prototype.ngOnInit = function () {
        this.totalPrice();
        this.formReset();
        this.getAllFood();
        this.user = this._use.active.unique_name;
    };
    TellerPlaceorderComponent.prototype.getAllFood = function () {
        var _this = this;
        this._setup.getFoods().subscribe(function (data) {
            _this.food = data;
        }, function (err) { alert(err.statusText); });
        this._setup.getLocations().subscribe(function (data) {
            _this.loc = data;
        }, function (err) { alert(err.statusText); });
    };
    TellerPlaceorderComponent.prototype.postOrder = function () {
        var _this = this;
        this._api.getCode('Order').subscribe(function (data) {
            _this.order.orderno = data;
            _this.addOrder(_this.order);
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Generate New Order No');
        });
    };
    TellerPlaceorderComponent.prototype.addOrder = function (order) {
        var _this = this;
        this._api.postOrder(order).subscribe(function (data) {
            _this.res = data;
            _this.sendSms(data);
            // this.formReset(this.any); this.cancel();
            _this._use.showMsg('success', 'Order Added', 'Order Placed Successfully And User has been sent Order No');
        }, function (err) {
            _this._use.showMsg('error', 'Adding Fail', 'Unable to Add New Order');
        });
    };
    TellerPlaceorderComponent.prototype.sendSms = function (order) {
        var _this = this;
        this._setup.postSmslog(order).subscribe(function (data) {
            _this.res = data;
            _this._use.showMsg('success', 'Order Added', 'Order Placed Successfully And User has been sent Order No');
        }, function (err) {
            _this._use.showMsg('error', 'Sms Fail', 'Unable to Send OrderNo to Customer');
        });
    };
    TellerPlaceorderComponent.prototype.addCart = function (item) {
        // console.log(item);
        var value = this.check(item);
        if (!value) {
            this.init(item);
            this.cart.push(this.cat);
        }
        // this.totalPrice();
    };
    TellerPlaceorderComponent.prototype.check = function (val) {
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].foodid === val.foodid) {
                this.cart[i].quantity++;
                // this.cart[i].amount += (val.price - ((val.price * val.discount) / 100));
                return true;
            }
        }
        return false;
    };
    TellerPlaceorderComponent.prototype.totalPrice = function () {
        this.total = 0;
        for (var i = 0; i < this.cart.length; i++) {
            this.total += (this.cart[i].amount * this.cart[i].quantity);
        }
        return this.total;
    };
    TellerPlaceorderComponent.prototype.cartTotal = function () {
        var quantity = 0;
        this.cart.forEach(function (e) {
            quantity = quantity + e.quantity;
        });
        return quantity;
    };
    TellerPlaceorderComponent.prototype.checkOut = function () {
        console.log(this.cart);
        this.order.vat = 0;
        this.order.price = this.total,
            this.order.total = this.total + this.order.vat;
        // this.order.orderlist = this.cart;
        this.checkout = true;
    };
    TellerPlaceorderComponent.prototype.cancel = function () {
        this.cart = [];
        this.totalPrice();
        this.checkout = false;
        this.formReset();
    };
    TellerPlaceorderComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.order = {
                fullname: '', mobile: '', email: 'none@acyst.tech', price: 0, vat: 0, total: 0,
                locationid: '1', address: 'N/A', source: 'Software',
                orderno: 'None', method: 'cash', status: 'pending',
                userid: this._use.active.Id, date: this._use.date, orderlist: this.cart
            };
        }
    };
    TellerPlaceorderComponent.prototype.init = function (d) {
        this.cat = {
            foodid: d.foodid, name: d.name, img: d.image, description: d.description,
            quantity: 1, amount: d.price - ((d.price * d.discount) / 100), date: new Date()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('orderForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], TellerPlaceorderComponent.prototype, "any", void 0);
    TellerPlaceorderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teller-placeorder',
            template: __webpack_require__(/*! ./teller-placeorder.component.html */ "./src/app/views/teller/teller-placeorder/teller-placeorder.component.html"),
            styles: [__webpack_require__(/*! ./teller-placeorder.component.css */ "./src/app/views/teller/teller-placeorder/teller-placeorder.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"], src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_5__["TellerService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]])
    ], TellerPlaceorderComponent);
    return TellerPlaceorderComponent;
}());



/***/ }),

/***/ "./src/app/views/teller/teller-summary/teller-summary.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/teller/teller-summary/teller-summary.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/teller/teller-summary/teller-summary.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/teller/teller-summary/teller-summary.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-md-10\">\r\n    <h2>Teller Summary</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <!-- routerLink=\"/dashboard\" -->\r\n      <li><a>Dashboard</a></li>\r\n      <li><a>Teller</a></li>\r\n      <li class=\"active\">\r\n        <strong>Summary</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <h5>Teller Summary</h5>\r\n          <div class=\"ibox-tools\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n              <i class=\"fa fa-wrench\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <form class=\"form-horizontal col-md-3\" method=\"Post\" #optionForm=\"ngForm\" (ngSubmit)=\"getSummary(search.dat)\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"form-group\" id=\"data_5\">\r\n                    <label>Select Date *</label>\r\n                    <div class=\"col-md-06 input-group\" id=\"datepicker\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n                      <input type=\"date\" class=\"form-control\" name=\"dat\" required>\r\n                      <span class=\"input-group-btn\">\r\n                        <button type=\"submit\" class=\"btn btn-info\">Generate</button>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n              <div class=\"col-md-3 col-md-offset-6\">\r\n                <div class=\"form-group\">\r\n                  <label>Filter*</label>\r\n                  <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"search\" required>\r\n                    <span class=\"input-group-btn hidden\">\r\n                      <button type=\"button\" (click)=\"search()\" class=\"btn btn-info\">Search</button>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <table class=\"footable table table-stripped\" data-filter=#filter>\r\n                <thead>\r\n                  <tr>\r\n                    <th>S/N</th>\r\n                    <th>OrderNo</th>\r\n                    <th>FullName</th>\r\n                    <th>Mobile</th>\r\n                    <th>Amount</th>\r\n                    <th>Status</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <!-- *ngIf=\"orders.length > 0\" -->\r\n                <tbody>\r\n                  <tr *ngFor=\"let o of lists; let i=index\">\r\n                    <td>{{i + 1}}</td>\r\n                    <td>{{o.orderno}}</td>\r\n                    <td>{{o.fullname}}</td>\r\n                    <td>{{o.mobile}}</td>\r\n                    <td>{{o.total}}</td>\r\n                    <td>{{o.status}}</td>\r\n                    <td>\r\n                      <div class=\"btn-group\">\r\n                        <button (click)=\"cancel(o)\" *ngIf=\"o.status == 'pending'\" class=\"btn-danger btn btn-xs\">Cancel</button>\r\n                        <button (click)=\"ready(o)\" *ngIf=\"o.status == 'ready'\" class=\"btn-danger btn btn-xs\">Confirm</button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr>\r\n                    <td colspan=\"6\">\r\n                      <ul class=\"pagination pull-right\"></ul>\r\n                    </td>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-7 col-md-offset-5\">\r\n                <div class=\"form-group col-md-3\"><label>Opening</label>\r\n                  <input type=\"text\" [(ngModel)]=\"cash.opening\" name=\"opening\" class=\"form-control\" required>\r\n                </div>\r\n                <div class=\"form-group col-md-3\"><label>Credit</label>\r\n                  <input type=\"text\" [(ngModel)]=\"cash.credit\" name=\"cancel\" class=\"form-control\" required>\r\n                </div>\r\n                <div class=\"form-group col-md-3\"><label>Debit</label>\r\n                  <input type=\"text\" [(ngModel)]=\"cash.debit\" class=\"form-control\" required>\r\n                </div>\r\n                <div class=\"form-group col-md-3\"><label>Balance</label>\r\n                  <input type=\"text\" [(ngModel)]=\"cash.balance\" class=\"form-control\" required>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/teller/teller-summary/teller-summary.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/teller/teller-summary/teller-summary.component.ts ***!
  \*************************************************************************/
/*! exports provided: TellerSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TellerSummaryComponent", function() { return TellerSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TellerSummaryComponent = /** @class */ (function () {
    function TellerSummaryComponent(_api, _use) {
        this._api = _api;
        this._use = _use;
        this.lists = [];
    }
    TellerSummaryComponent.prototype.ngOnInit = function () {
        this.init();
        this.getTodaySummary();
    };
    TellerSummaryComponent.prototype.getTodaySummary = function () {
        var _this = this;
        var id = this._use.active.Id;
        var date = this._use.date;
        this._api.getOrderSummary(id, date).subscribe(function (data) {
            _this.cash = data;
            _this.lists = data.trans;
            console.log(data);
            _this._use.showMsg('success', 'Orders Summary', 'Successfully fetch current Order Summary');
        }, function (err) {
            _this._use.showMsg('error', 'Orders Summary Fail', 'Unable to Get Current Balance');
        });
    };
    TellerSummaryComponent.prototype.getSummary = function (value) {
        var _this = this;
        this._api.getOrderSummary(this._use.active.Id, value).subscribe(function (data) {
            _this.cash = data.cash;
            _this.lists = data.trans;
            _this._use.showMsg('success', 'Orders Summary', 'Successfully fetch Teller Balance for Date: ' + value);
        }, function (err) {
            _this._use.showMsg('error', 'Orders Summary Fail', 'Unable to Get Summary for Date: ' + value);
        });
    };
    TellerSummaryComponent.prototype.init = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.lists = [];
            this.cash = { opening: 0, credit: 0, debit: 0, balance: 0 };
            this.search = { data: '', dat: null };
            // this.date = new Date();
        }
    };
    TellerSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teller-summary',
            template: __webpack_require__(/*! ./teller-summary.component.html */ "./src/app/views/teller/teller-summary/teller-summary.component.html"),
            styles: [__webpack_require__(/*! ./teller-summary.component.css */ "./src/app/views/teller/teller-summary/teller-summary.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__["TellerService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]])
    ], TellerSummaryComponent);
    return TellerSummaryComponent;
}());



/***/ }),

/***/ "./src/app/views/teller/teller-transfer/teller-transfer.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/views/teller/teller-transfer/teller-transfer.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/teller/teller-transfer/teller-transfer.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/views/teller/teller-transfer/teller-transfer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <div class=\"col-md-6\">\r\n      <h2>Teller Tranfer</h2>\r\n      <ol class=\"breadcrumb\">\r\n        <li><a>Dashboard</a></li>\r\n        <li><a>Teller</a></li>\r\n        <li class=\"active\"><strong>Cash Transfer</strong></li>\r\n      </ol>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"title-action\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"grant\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-5 col-md-offset-3\">\r\n        <div class=\"ibox loginColumns float-e-margins\">\r\n          <div class=\"ibox-title\">\r\n            <h5>Sign in to get Access</h5>\r\n            <div class=\"ibox-tools\">\r\n              <a class=\"close-link\">\r\n                <i class=\"fa fa-times\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"ibox-content\">\r\n            <form class=\"form-horizontal\" method=\"Post\">\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-4 control-label\">Teller Name</label>\r\n                <div class=\"col-md-8\">\r\n                  <select class=\"form-control\" name=\"teller\" required disabled>\r\n                    <option></option>\r\n                    <!-- <option *ngFor=\"let b of teller\" value=\"{{b.GeneralLedgerCodeId}}\">{{b.SubCode}} {{b.Description}}</option> -->\r\n                  </select>\r\n                  <span class=\"help-block m-b-none\">You Can Not Edit this Field.</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-4 control-label\">Password</label>\r\n                <div class=\"col-md-8\">\r\n                  <input type=\"text\" id=\"tellerid\" class=\"form-control hidden\">\r\n                  <input type=\"password\" id=\"pin\" placeholder=\"Password\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"col-md-offset-9 col-md-12\">\r\n                  <button class=\"btn btn-sm btn-rounded btn-white\" type=\"button\">Sign in</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"!grant\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"ibox float-e-margins\">\r\n          <div class=\"ibox-title\">\r\n            <h5 class=\"text-navy\">Cash Transfer</h5>\r\n            <div class=\"ibox-tools\">\r\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                <i class=\"fa fa-wrench\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"ibox-content\">\r\n            <div class=\"row\">\r\n              <form class=\"form-horizontal\" role=\"form\" method=\"Post\" #transferForm=\"ngForm\" (ngSubmit)=\"postTransfer()\">\r\n                <div class=\"col-md-5\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\">Amount </label>\r\n                    <div class=\"col-md-8\">\r\n                      <input type=\"text\" placeholder=\"Amount\" class=\"form-control\" name=\"amount\" [(ngModel)]=\"tf.amount\" required>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\">From</label>\r\n                    <div class=\"col-md-8\">\r\n                      <select class=\"form-control\" name=\"from\" [(ngModel)]=\"tf.id\" required >\r\n                        <option value=\"\">Choose From Option..</option>\r\n                        <option *ngFor=\"let n of teller\" [value]=\"n.tellerid\">{{n.user}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\">To</label>\r\n                    <div class=\"col-md-8\">\r\n                      <select class=\"form-control\" name=\"tellerid\" (change)=\"to(tf.tellerid)\" [(ngModel)]=\"tf.tellerid\" required>\r\n                        <option value=\"\" selected readonly>Choose From Option..</option>\r\n                        <option *ngFor=\"let t of teller\" [value]=\"t.tellerid\">{{t.user}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\">Reference</label>\r\n                    <div class=\"col-md-8\">\r\n                      <input type=\"text\" name=\"reference\" [(ngModel)]=\"tf.reference\" placeholder=\"Reference\" class=\"form-control\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-7 hidden\">\r\n                  <br><br>\r\n                  <div class=\"col-md-5 col-md-offset-1\">\r\n                    <div class=\"form-group\">\r\n                      <label>Current Balance</label>\r\n                      <input type=\"text\" placeholder=\"Current Balance\" class=\"form-control\" name=\"from\" [(ngModel)]=\"cash.from\" readonly>\r\n                      <br />\r\n                      <input type=\"text\" placeholder=\"Current Balance\" class=\"form-control\" name=\"to\" [(ngModel)]=\"cash.to\" readonly>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-5 col-md-offset-1\">\r\n                    <div class=\"form-group\">\r\n                      <label>Balance After</label>\r\n                      <input type=\"text\" placeholder=\"Balance After\" class=\"form-control\" name=\"frombal\" [(ngModel)]=\"cash.frombal\" [value]=\"cash.from - tf.amount\" readonly>\r\n                      <br />\r\n                      <input type=\"text\" placeholder=\"Balance After\" class=\"form-control\" name=\"tobal\" [(ngModel)]=\"cash.tobal\" [value]=\"cash.to + tf.amount\" readonly>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-4 col-md-12\">\r\n                      <button class=\"btn btn-rounded btn-primary\" type=\"submit\">Transfer </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/teller/teller-transfer/teller-transfer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/teller/teller-transfer/teller-transfer.component.ts ***!
  \***************************************************************************/
/*! exports provided: TellerTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TellerTransferComponent", function() { return TellerTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TellerTransferComponent = /** @class */ (function () {
    function TellerTransferComponent(_api, _use) {
        this._api = _api;
        this._use = _use;
    }
    TellerTransferComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAllTellers();
    };
    TellerTransferComponent.prototype.getAllTellers = function () {
        var _this = this;
        this._api.getTellers().subscribe(function (data) {
            _this.teller = data;
            _this.from(_this._use.active.Id);
        }, function (err) { location.reload(true); });
    };
    TellerTransferComponent.prototype.from = function (val) {
        var _this = this;
        console.log(val);
        this.teller.forEach(function (e) {
            if (e.id === val) {
                _this.tf.id = JSON.stringify(e.tellerid);
                _this._api.getTellerBalance(e.tellerid).subscribe(function (data) {
                    _this.cash.from = data;
                }, function (err) {
                    _this._use.showMsg('error', 'Teller Balance', 'Unable to Your current Balance');
                });
            }
        });
    };
    TellerTransferComponent.prototype.to = function (val) {
        var _this = this;
        console.log(val);
        this.teller.forEach(function (e) {
            if (e.tellerid === val) {
                _this.tf.nominalid = e.nominalid;
                _this._api.getTellerBalance(e.tellerid).subscribe(function (data) {
                    _this.cash.to = data;
                }, function (err) {
                    _this._use.showMsg('error', 'Teller Balance', 'Unable to Teller current Balance');
                });
            }
        });
    };
    TellerTransferComponent.prototype.postTransfer = function () {
        var _this = this;
        this._api.postTransfer(this.tf).subscribe(function (data) {
            _this.res = data;
            _this.formReset();
            _this._use.showMsg('success', 'Transfer Successfull', 'Transfer Transaction has been posted successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Transfer Fail', 'Unable to Process Transfer');
        });
    };
    TellerTransferComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.tf = { id: 0,
                transcode: '', type: '', source: '', method: 'cash', amount: 0, nominalid: 0,
                reference: '', tellerid: '', userid: this._use.active.Id, date: this._use.date
            };
            this.cash = { frombal: 0, from: 0, tobal: 0, to: 0 };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('transferForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], TellerTransferComponent.prototype, "any", void 0);
    TellerTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teller-transfer',
            template: __webpack_require__(/*! ./teller-transfer.component.html */ "./src/app/views/teller/teller-transfer/teller-transfer.component.html"),
            styles: [__webpack_require__(/*! ./teller-transfer.component.css */ "./src/app/views/teller/teller-transfer/teller-transfer.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_2__["TellerService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]])
    ], TellerTransferComponent);
    return TellerTransferComponent;
}());



/***/ }),

/***/ "./src/app/views/teller/teller-voucher/teller-voucher.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/teller/teller-voucher/teller-voucher.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/teller/teller-voucher/teller-voucher.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/teller/teller-voucher/teller-voucher.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <div class=\"col-md-6\">\r\n      <h2>Teller Voucher</h2>\r\n      <ol class=\"breadcrumb\">\r\n        <li><a>Dashboard</a></li>\r\n        <li><a>Teller</a></li>\r\n        <li class=\"active\"><strong>Voucher</strong></li>\r\n      </ol>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"title-action\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"grant\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-5 col-md-offset-3\">\r\n        <div class=\"ibox loginColumns float-e-margins\">\r\n          <div class=\"ibox-title\">\r\n            <h5>Sign in to get Access</h5>\r\n            <div class=\"ibox-tools\">\r\n              <a class=\"close-link\">\r\n                <i class=\"fa fa-times\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"ibox-content\">\r\n            <form class=\"form-horizontal\" method=\"Post\">\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-4 control-label\">Teller Name</label>\r\n                <div class=\"col-md-8\">\r\n                  <select class=\"form-control\" id=\"Tellername\" required disabled>\r\n                    <option></option>\r\n                    <!-- <option *ngFor=\"let b of teller\" value=\"{{b.GeneralLedgerCodeId}}\">{{b.SubCode}} {{b.Description}}</option> -->\r\n                  </select>\r\n                  <span class=\"help-block m-b-none\">You Can Not Edit this Field.</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-4 control-label\">Password</label>\r\n                <div class=\"col-md-8\">\r\n                  <input type=\"text\" id=\"tellerid\" class=\"form-control hidden\">\r\n                  <input type=\"password\" id=\"pin\" placeholder=\"Password\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"col-md-offset-9 col-md-12\">\r\n                  <button class=\"btn btn-sm btn-rounded btn-white\" type=\"button\">Sign in</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wrapper wrapper-content animated fadeInRight\" *ngIf=\"!grant\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"ibox float-e-margins\">\r\n          <div class=\"ibox-title\">\r\n            <h5 class=\"text-navy\">Teller Voucher</h5>\r\n            <div class=\"ibox-tools\">\r\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                <i class=\"fa fa-wrench\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"ibox-content\">\r\n            <div class=\"row\">\r\n              <form class=\"form-horizontal\" role=\"form\" method=\"Post\" #voucherForm=\"ngForm\" (ngSubmit)=\"postVoucher()\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"form-group hidden\">\r\n                    <label class=\"col-md-2 control-label\">Type</label>\r\n                    <div class=\"col-md-8\">\r\n                      <select class=\"form-control\" id=\"Typr\" required>\r\n                        <option>Choose Type..</option>\r\n                        <option value=\"CREDIT\">CREDIT</option>\r\n                        <option value=\"DEBIT\">DEBIT</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"col-md-2 control-label\">Nominal</label>\r\n                    <div class=\"col-md-10\">\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-bandcamp\"></i></span>\r\n                        <select class=\"form-control\" name=\"nominalid\" [(ngModel)]=\"tf.nominalid\" required>\r\n                          <option>Choose One Option..</option>\r\n                          <option *ngFor=\"let b of nom\" [value]=\"b.nominalid\">{{b.code}} {{b.description}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"col-md-2 control-label\">Amount </label>\r\n                    <div class=\"col-md-10\">\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-money\"></i></span>\r\n                        <input type=\"text\" placeholder=\"Amount\" class=\"form-control\" name=\"amount\" [(ngModel)]=\"tf.amount\" required>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"col-md-2 control-label\"> Method: </label>\r\n                    <div class=\"col-md-10\">\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-bandcamp\"></i></span>\r\n                        <select class=\"form-control\" name=\"method\" [(ngModel)]=\"tf.method\" required>\r\n                          <option value=\"cash\">Cash</option>\r\n                          <option value=\"momo\">Mobile Money</option>\r\n                          <option value=\"pos\">POS</option>\r\n                          <option value=\"cheque\">Cheque</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"col-md-2 control-label\">Reference</label>\r\n                    <div class=\"col-md-10\">\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-bandcamp\"></i></span>\r\n                        <textarea rows=\"6\" placeholder=\"Reference\" class=\"form-control\" name=\"reference\" [(ngModel)]=\"tf.reference\" required></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-8 col-md-12\">\r\n                      <button class=\"btn btn-sm btn-rounded btn-primary\" [disabled]=\"voucherForm.invalid\" type=\"submit\">Post Payment</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/views/teller/teller-voucher/teller-voucher.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/teller/teller-voucher/teller-voucher.component.ts ***!
  \*************************************************************************/
/*! exports provided: TellerVoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TellerVoucherComponent", function() { return TellerVoucherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teller.service */ "./src/app/services/teller.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/traits/nav/nav.component */ "./src/app/traits/nav/nav.component.ts");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TellerVoucherComponent = /** @class */ (function () {
    function TellerVoucherComponent(_setup, _api, _use) {
        this._setup = _setup;
        this._api = _api;
        this._use = _use;
    }
    TellerVoucherComponent.prototype.ngOnInit = function () {
        this.formReset();
        this.getAllNominals();
    };
    TellerVoucherComponent.prototype.getAllNominals = function () {
        var _this = this;
        this._setup.getNominalsByGlType('Expense').subscribe(function (data) {
            _this.nom = data;
        }, function (err) { alert(err.statusText); });
        this._api.getTellers().subscribe(function (data) {
            _this.tellers = data;
            _this.from(_this._use.active.Id);
        }, function (err) { alert(err.statusText); });
    };
    TellerVoucherComponent.prototype.findId = function (data) {
        var _this = this;
        this.tf.tellerid = data.find(function (i) { return i.id === _this._use.active.Id; });
    };
    TellerVoucherComponent.prototype.from = function (val) {
        var _this = this;
        console.log(val);
        this.tellers.forEach(function (e) {
            if (e.id === val) {
                _this.tf.tellerid = JSON.stringify(e.tellerid);
            }
        });
    };
    TellerVoucherComponent.prototype.postVoucher = function () {
        var _this = this;
        this._api.getCode('Transaction').subscribe(function (data) {
            _this.tf.transcode = data;
            _this.Next();
        }, function (err) {
            _this._use.showMsg('error', 'Payment Fail', 'Unable to Generate Payment Code');
        });
    };
    TellerVoucherComponent.prototype.Next = function () {
        var _this = this;
        this._api.postVoucher(this.tf).subscribe(function (data) {
            _this.res = data;
            _this.formReset();
            _this._use.showMsg('success', 'Voucher Successfull', 'Payment has been posted successfully');
        }, function (err) {
            _this._use.showMsg('error', 'Payment Fail', 'Unable to Post Payment Details');
        });
    };
    TellerVoucherComponent.prototype.formReset = function (form) {
        if (form != null) {
            form.reset();
        }
        else {
            this.tf = {
                transcode: '', type: '', source: '', method: 'cash', amount: 0, nominalid: '',
                reference: '', tellerid: '', userid: this._use.active.Id, date: this._use.date
            };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('voucherForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], TellerVoucherComponent.prototype, "any", void 0);
    TellerVoucherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teller-voucher',
            template: __webpack_require__(/*! ./teller-voucher.component.html */ "./src/app/views/teller/teller-voucher/teller-voucher.component.html"),
            styles: [__webpack_require__(/*! ./teller-voucher.component.css */ "./src/app/views/teller/teller-voucher/teller-voucher.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_4__["SetupService"], src_app_services_teller_service__WEBPACK_IMPORTED_MODULE_1__["TellerService"], src_app_traits_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]])
    ], TellerVoucherComponent);
    return TellerVoucherComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
// export const config = {
//   apiUrl: 'https://soft.acyst.tech/',
//   ordUrl: 'https://soft.acyst.tech/orders',
//   imageUrl: 'https://soft.acyst.tech/Files/'
// };
var config = {
    apiUrl: 'http://192.168.43.201/',
    ordUrl: 'http://192.168.43.201/orders',
    imageUrl: 'http://192.168.43.201/Files/'
};
// export const config = {
//   apiUrl: 'http://localhost:53720/',
//   ordUrl: 'http://localhost:53720/orders',
//   imageUrl: 'http://localhost:53720/Files/'
// };
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

module.exports = __webpack_require__(/*! C:\Angular\restuarant-admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map