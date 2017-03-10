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
var platform_browser_1 = require('@angular/platform-browser');
var tab_component_1 = require("./tab/tab.component");
var app_component_1 = require('./app.component');
var material_1 = require('@angular/material');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var blog_component_1 = require('./blog/blog.component');
var contact_component_1 = require('./contact/contact.component');
var work_component_1 = require('./work/work.component');
var app_resource_1 = require('./app.resource');
var forms_1 = require('@angular/forms');
require('hammerjs');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [material_1.MaterialModule, platform_browser_1.BrowserModule, app_routing_1.routing,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, tab_component_1.TabComponent, about_component_1.AboutComponent, blog_component_1.BlogComponent, contact_component_1.ContactComponent, work_component_1.WorkComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_routing_1.appRoutingProviders, app_resource_1.Resource]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map