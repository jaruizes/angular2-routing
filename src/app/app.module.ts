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
import {Feature33Component} from "./feature3/feature3-3/feature33.component";
import {Feature32Component} from "./feature3/feature3-2/feature32.component";
import {Feature31Component} from "./feature3/feature3-1/feature31.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Feature1Component,
    Feature2Component,
    Feature3Component,
    Feature31Component,
    Feature32Component,
    Feature33Component
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
