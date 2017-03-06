import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TabComponent} from "./tab/tab.component"
import { AppComponent }  from './app.component';
import {HomeComponent} from './home/home.component'
import {
  routing,
  appRoutingProviders
} from './app.routing';


@NgModule({
  imports:      [ BrowserModule,routing ],
  declarations: [ AppComponent,HomeComponent, TabComponent],
  bootstrap:    [ AppComponent ],
  providers: [appRoutingProviders]
})
export class AppModule { }
