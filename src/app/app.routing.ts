import { Routes, RouterModule } from '@angular/router';
import {Feature1Component} from "./feature1/feature1.component";
import {Feature2Component} from "./feature2/feature2.component";
import {Feature3Component} from "./feature3/feature3.component";
import {HomeComponent} from "./home/home.component";



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'feature1', component: Feature1Component },
  { path: 'feature2/:param1', component: Feature2Component, data: [{appName: 'angular-routing', appVersion: '1.0.0'}]},
  { path: 'feature3', component: Feature3Component }
];

export const routing = RouterModule.forRoot(routes);
