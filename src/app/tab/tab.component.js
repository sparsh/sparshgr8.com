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
var app_resource_1 = require('../app.resource');
var TabComponent = (function () {
    function TabComponent(resource, router) {
        this.resource = resource;
        this.router = router;
    }
    TabComponent.prototype.goToRouteLink = function (path) {
        this.router.navigate(["./" + path]);
    };
    TabComponent = __decorate([
        core_1.Component({
            selector: 'app-tab',
            
            templateUrl: './tab.component.html',
        }), 
        __metadata('design:paramtypes', [app_resource_1.Resource, router_1.Router])
    ], TabComponent);
    return TabComponent;
}());
exports.TabComponent = TabComponent;
//# sourceMappingURL=tab.component.js.map