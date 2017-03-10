import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabComponent } from "./tab/tab.component"
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { BlogComponent } from './blog/blog.component'
import { ContactComponent, DialogResultExampleDialog } from './contact/contact.component'
import { WorkComponent } from './work/work.component'
import { Resource } from './app.resource'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';
import {
  routing,
  appRoutingProviders
} from './app.routing';


@NgModule({
  imports: [
    MaterialModule.forRoot(), BrowserModule, routing,
    FormsModule,
    ReactiveFormsModule],
  declarations: [AppComponent, DialogResultExampleDialog, HomeComponent, TabComponent, AboutComponent, BlogComponent, ContactComponent, WorkComponent],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders, Resource],
  entryComponents: [DialogResultExampleDialog]
})
export class AppModule { }
