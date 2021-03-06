import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabComponent } from "./tab/tab.component"
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ProgressDialog } from './healper/progress.dialog/progress.dialog.component';
import { AboutComponent } from './about/about.component'
import { BlogComponent } from './blog/blog.component'
import { ContactComponent} from './contact/contact.component'
import { WorkComponent } from './work/work.component'
import { Resource } from './app.resource'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkDetailsComponent } from './work/work.details/work.details.component'
import { AngularFireModule } from 'angularfire2';
import { AlertDialog } from "./healper/alert.dialog/alert.dialog.component"

import 'hammerjs';
import {
  routing,
  appRoutingProviders
} from './app.routing';

export const firebaseConfig = {

  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'

};

@NgModule({
  imports: [
    MaterialModule.forRoot(), BrowserModule, routing,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)],
  declarations: [AppComponent, WorkDetailsComponent, AlertDialog,ProgressDialog, HomeComponent, TabComponent, AboutComponent, BlogComponent, ContactComponent, WorkComponent],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders, Resource],
  entryComponents: [ProgressDialog,AlertDialog]
})
export class AppModule { }
