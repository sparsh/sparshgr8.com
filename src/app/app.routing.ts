

import { HomeComponent } from "./home/home.component"
import { RouterModule, Routes } from "@angular/router"

import { AboutComponent } from './about/about.component'
import { BlogComponent } from './blog/blog.component'
import { ContactComponent } from './contact/contact.component'
import { WorkComponent } from './work/work.component'
import { WorkDetailsComponent } from './work/work.details/work.details.component'
const appRoutes: Routes = [

    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: 'contact',
        component: ContactComponent
    }, {
        path: 'work',
        component: WorkComponent,children:[   {
        path: 'workDetailsInner/:id',
        component: WorkDetailsComponent
    }]
    },
 
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });

