"use strict";
var home_component_1 = require("./home/home.component");
var router_1 = require("@angular/router");
var about_component_1 = require('./about/about.component');
var blog_component_1 = require('./blog/blog.component');
var contact_component_1 = require('./contact/contact.component');
var work_component_1 = require('./work/work.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'blog',
        component: blog_component_1.BlogComponent
    }, {
        path: 'about',
        component: about_component_1.AboutComponent
    }, {
        path: 'contact',
        component: contact_component_1.ContactComponent
    }, {
        path: 'work',
        component: work_component_1.WorkComponent
    },

];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map