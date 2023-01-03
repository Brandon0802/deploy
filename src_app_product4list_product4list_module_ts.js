(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_product4list_product4list_module_ts"],{

/***/ 41412:
/*!*************************************************************!*\
  !*** ./src/app/product4list/product4list-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product4listPageRoutingModule": () => (/* binding */ Product4listPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _product4list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product4list.page */ 1666);




const routes = [
    {
        path: '',
        component: _product4list_page__WEBPACK_IMPORTED_MODULE_0__.Product4listPage
    }
];
let Product4listPageRoutingModule = class Product4listPageRoutingModule {
};
Product4listPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Product4listPageRoutingModule);



/***/ }),

/***/ 64017:
/*!*****************************************************!*\
  !*** ./src/app/product4list/product4list.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product4listPageModule": () => (/* binding */ Product4listPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _product4list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product4list-routing.module */ 41412);
/* harmony import */ var _product4list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product4list.page */ 1666);







let Product4listPageModule = class Product4listPageModule {
};
Product4listPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _product4list_routing_module__WEBPACK_IMPORTED_MODULE_0__.Product4listPageRoutingModule
        ],
        declarations: [_product4list_page__WEBPACK_IMPORTED_MODULE_1__.Product4listPage]
    })
], Product4listPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_product4list_product4list_module_ts.js.map