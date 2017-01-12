import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import {Feature3Component} from "./feature3/feature3.component";
import {Feature2Component} from "./feature2/feature2.component";
import {Feature1Component} from "./feature1/feature1.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Feature1Component,
    Feature2Component,
    Feature3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
