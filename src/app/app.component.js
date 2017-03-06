"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.toolbarTitle = "Sparsh Jain";
        this.icon = "menu";
        this.innerWidth = (window.screen.width);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.toolbarTitle = _this.previoudTitle = _this.router.url.substring(1, 2).toUpperCase() + _this.router.url.substring(2);
        });
    };
    AppComponent.prototype.onResize = function (event) {
        this.innerWidth = event.target.innerWidth;
    };
    AppComponent.prototype.closeNavDrawerOrGoBack = function (sidenav) {
        if (sidenav != null) {
            if (sidenav.opened)
                sidenav.toggle();
        }
        else {
            this.router.navigate(["./home"]);
        }
    };
    AppComponent.prototype.changeTitleTo = function (title) {
        console.log("title is " + title + " toolbar title is " + this.toolbarTitle + " previous title is  " + this.previoudTitle);
        if (title != null) {
            if (this.toolbarTitle != title) {
                this.previoudTitle = this.toolbarTitle;
                this.toolbarTitle = title;
            }
        }
        else
            this.toolbarTitle = this.previoudTitle;
    };
    AppComponent.prototype.goToRouteLink = function (path) {
        this.router.navigate(["./" + path]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            styles: ['md-icon:hover {cursor: pointer;}'],
            templateUrl: "./app.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map