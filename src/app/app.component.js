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
var app_resource_1 = require('./app.resource');
var AppComponent = (function () {
    function AppComponent(router, resource) {
        this.router = router;
        this.resource = resource;
        this.innerWidth = (window.screen.width);
        this.toolbarTitle = resource.personName;
        this.icon = resource.hamburgIcon;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            var url = _this.router.url;
            _this.toolbarTitle = _this.previoudTitle = url.substring(1, 2).toUpperCase() + url.substring(2);
            if (url.indexOf("home") == -1) {
                _this.icon = _this.resource.backIcon;
            }
            else {
                _this.icon = _this.resource.hamburgIcon;
                _this.previoudTitle = _this.toolbarTitle = _this.resource.personName;
            }
        });
    };
    AppComponent.prototype.onResize = function (event) {
        this.innerWidth = event.target.innerWidth;
    };
    AppComponent.prototype.closeNavDrawerOrGoBack = function (sidenav) {
        if (this.icon == this.resource.backIcon)
            this.router.navigate(["./home"]);
        else
            sidenav.toggle();
    };
    AppComponent.prototype.changeTitleTo = function (title) {
        if (title != null) {
            if (this.toolbarTitle != title) {
                this.previoudTitle = this.toolbarTitle;
                this.toolbarTitle = "Go to " + title;
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
        __metadata('design:paramtypes', [router_1.Router, app_resource_1.Resource])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map