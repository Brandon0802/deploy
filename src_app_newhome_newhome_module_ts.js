(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_newhome_newhome_module_ts"],{

/***/ 92629:
/*!***************************************************!*\
  !*** ./src/app/newhome/newhome-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewhomePageRoutingModule": () => (/* binding */ NewhomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _newhome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newhome.page */ 80073);




const routes = [
    {
        path: '',
        component: _newhome_page__WEBPACK_IMPORTED_MODULE_0__.NewhomePage
    }
];
let NewhomePageRoutingModule = class NewhomePageRoutingModule {
};
NewhomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewhomePageRoutingModule);



/***/ }),

/***/ 97946:
/*!*******************************************!*\
  !*** ./src/app/newhome/newhome.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewhomePageModule": () => (/* binding */ NewhomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _productlist_productlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../productlist/productlist.page */ 11043);
/* harmony import */ var _product2list_product2list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product2list/product2list.page */ 42099);
/* harmony import */ var _product3list_product3list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product3list/product3list.page */ 58620);
/* harmony import */ var _product4list_product4list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product4list/product4list.page */ 1666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _newhome_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newhome-routing.module */ 92629);
/* harmony import */ var _newhome_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newhome.page */ 80073);











let NewhomePageModule = class NewhomePageModule {
};
NewhomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _newhome_routing_module__WEBPACK_IMPORTED_MODULE_4__.NewhomePageRoutingModule
        ],
        declarations: [_newhome_page__WEBPACK_IMPORTED_MODULE_5__.NewhomePage, _productlist_productlist_page__WEBPACK_IMPORTED_MODULE_0__.ProductlistPage, _product2list_product2list_page__WEBPACK_IMPORTED_MODULE_1__.Product2listPage, _product3list_product3list_page__WEBPACK_IMPORTED_MODULE_2__.Product3listPage, _product4list_product4list_page__WEBPACK_IMPORTED_MODULE_3__.Product4listPage
        ], entryComponents: [_productlist_productlist_page__WEBPACK_IMPORTED_MODULE_0__.ProductlistPage, _product2list_product2list_page__WEBPACK_IMPORTED_MODULE_1__.Product2listPage, _product3list_product3list_page__WEBPACK_IMPORTED_MODULE_2__.Product3listPage, _product4list_product4list_page__WEBPACK_IMPORTED_MODULE_3__.Product4listPage]
    })
], NewhomePageModule);



/***/ }),

/***/ 80073:
/*!*****************************************!*\
  !*** ./src/app/newhome/newhome.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewhomePage": () => (/* binding */ NewhomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_newhome_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./newhome.page.html */ 46118);
/* harmony import */ var _newhome_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newhome.page.scss */ 19693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navparam.service */ 61731);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ 22600);










let NewhomePage = class NewhomePage {
    constructor(router, menuCtrl, dataService, loadingController, toastController, alertController, accessProviders, navController, storage, platform, activatedRoute, navParamService) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.dataService = dataService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.accessProviders = accessProviders;
        this.navController = navController;
        this.storage = storage;
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.navParamService = navParamService;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        this.prods = [];
        this.id = 0;
        this.device = true;
        this.web = true;
        this.key = "";
        this.device = this.platform.is('mobile');
        this.web = this.platform.is('desktop');
        if (this.web == true) {
            //this.menuCtrl.enable(false);
        }
        ;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((data) => {
            this.id = data.id;
            console.log(this.id);
        });
    }
    newhome() {
        this.router.navigate(['/newhome']);
    }
    search() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.key == "") {
                this.presentToast('Please type keyword');
            }
            else {
                const loader = yield this.loadingController.create({
                    message: 'Please wait',
                });
                loader.present();
                this.navParamService.setKey(this.key);
                this.router.navigate(['/search']);
                loader.dismiss();
            }
        });
    }
    ionViewWillEnter() {
        if (this.id == 1) {
            window.location.reload();
        }
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.name = this.datastorage.first_name;
            this.uid = this.datastorage.user_id;
        });
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: a,
                duration: 1500,
                position: 'bottom'
            });
            toast.present();
        });
    }
    presentAlert(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: a,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.alertController
                .create({
                header: "Logout",
                message: "Are you sure you want to logout?",
                buttons: [
                    {
                        text: "Yes",
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            const loader = yield this.loadingController.create({
                                message: 'Please wait',
                            });
                            loader.present();
                            loader.dismiss();
                            this.storage.clear();
                            this.presentToast('Log out successfully');
                            this.navController.navigateRoot(['/intro']);
                        })
                    },
                    { text: "No" }
                ]
            })
                .then(alertEL => alertEL.present());
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
};
NewhomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _navparam_service__WEBPACK_IMPORTED_MODULE_3__.NavparamService }
];
NewhomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-newhome',
        template: _raw_loader_newhome_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_newhome_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewhomePage);



/***/ }),

/***/ 19693:
/*!*******************************************!*\
  !*** ./src/app/newhome/newhome.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.text {\n  font-size: 12px;\n  padding-bottom: 5px;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n\n.s {\n  border-radius: 9px;\n  margin-left: 9px;\n  margin-right: 9px;\n  height: 20%;\n  width: 100%;\n}\n\n.ss {\n  border-radius: 9px;\n  margin-left: 9px;\n  margin-right: 9px;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSx1QkFBQTtBQUdKOztBQURBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7QUFNSjs7QUFMSTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUFPUjs7QUFKQTtFQUNJLHVCQUFBO0FBT0o7O0FBSkE7RUFDSSxrQkFBQTtBQU9KOztBQU5JO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFRUjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBT0o7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBT0oiLCJmaWxlIjoibmV3aG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50OyBcclxufVxyXG4uaG9yLXNjcm9sbHtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4ubWVudSB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgICAgXHJcbn1cclxuLm15LWJ0bntcclxuICAgIGJvcmRlcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxuICAgIG1hcmdpbjogMCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xyXG59XHJcbi50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLmJ0bi1hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuI2RhZ3tcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG4uc2VnbWVudHRvb2xiYXJTZWN0aW9ue1xyXG4gICAgLS1taW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgLnNlZ1NlY3Rpb257XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgbWluLWhlaWdodDozMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zc3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcclxuICAgIGhlaWdodDogNTAlO1xyXG59Il19 */");

/***/ }),

/***/ 46118:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newhome/newhome.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\" color=\"light\">\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-input type=\"text\"  [(ngModel)]=\"key\" padding-start placeholder=\"Search for product...\" class=\"search-bar\"></ion-input>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\" (click)=\"search()\"  >\n        <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n        <span>&nbsp;</span>\n      </ion-button>\n      <ion-button class=\"filter\" routerLink=\"/mycart\" routerDirection=\"forward\">\n        <ion-icon name=\"cart-outline\" color=\"light\" ></ion-icon>\n      </ion-button>\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"logout()\">\n        <ion-icon fill=\"white\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content > \n  \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n\n  <ion-slides class=\"ss\">\n    <ion-slide >\n      <img src=\"../../assets/slider/received_999155960989795.webp\"/>\n    </ion-slide>\n  </ion-slides>\n \n  <ion-slides >\n    <ion-slide >\n      <app-product2list></app-product2list>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-slides class=\"ss\">\n    <ion-slide >\n\n      <img src=\"../../assets/slider/received_1159593211458665.webp\"/>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-slides >\n    <ion-slide >\n      <app-product3list></app-product3list>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-slides class=\"ss\">\n    <ion-slide >\n\n      <img src=\"../../assets/slider/received_1189668678534992.webp\"/>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-slides >\n    <ion-slide >\n      <app-productlist></app-productlist>\n    </ion-slide>\n  </ion-slides>\n  \n  <br>\n\n  <ion-card>\n    <ion-card-content>\n      <b>CONTACT US</b>\n      <p>\n        If you have any concerns, questions, and complaints regarding to these terms and conditions, please contact us by the details below:\n      </p>\n      <p>\n        <br>\n        <a>brandon.cabatian@g.batstate-u.edu.ph</a>\n        <br>\n      </p>\n      <p>\n        <a>alexandragheil.emaas@g.batstate-u.edu.ph</a>\n        <br>\n      </p>\n      <p>\n        <a>rizzalyn.ramirez@g.batstate-u.edu.ph</a>\n        <br>\n      </p>\n      \n     </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_newhome_newhome_module_ts.js.map