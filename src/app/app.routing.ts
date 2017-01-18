import { Routes, RouterModule } from '@angular/router';
import {Feature1Component} from "./feature1/feature1.component";
import {Feature2Component} from "./feature2/feature2.component";
import {Feature3Component} from "./feature3/feature3.component";
import {HomeComponent} from "./home/home.component";
import {Feature31Component} from "./feature3/feature3-1/feature31.component";
import {Feature32Component} from "./feature3/feature3-2/feature32.component";
import {Feature33Component} from "./feature3/feature3-3/feature33.component";
import {Feature331Component} from "./feature3/feature3-3/feature3-3-1/feature331.component";
import {Feature332Component} from "./feature3/feature3-3/feature3-3-2/feature332.component";
import {Feature333Component} from "./feature3/feature3-3/feature3-3-3/feature333.component";



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'feature1', component: Feature1Component },
  { path: 'feature2/:param1', component: Feature2Component, data: [{appName: 'angular-routing', appVersion: '1.0.0'}]},
  { path: 'feature3', component: Feature3Component,
    children: [
      { path: 'feature31', component: Feature31Component},
      { path: 'feature32', component: Feature32Component},
      { path: 'feature33', component: Feature33Component,
        children: [
          { path: 'feature331', component: Feature331Component, outlet: 'primary-info' },
          { path: 'feature332', component: Feature332Component, outlet: 'secondary-info' },
          { path: 'feature333', component: Feature333Component, outlet: 'extra-info' }
        ]
      }
    ]
  }
];

export const routing = RouterModule.forRoot(routes);
