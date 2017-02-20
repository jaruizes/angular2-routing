import {Routes, RouterModule} from "@angular/router";
import {Feature1Component} from "./feature1/feature1.component";
import {Feature2Component} from "./feature2/feature2.component";
import {Feature3Component} from "./feature3/feature3.component";
import {HomeComponent} from "./home/home.component";
import {Feature31Component} from "./feature3/feature3-1/feature31.component";
import {Feature32Component} from "./feature3/feature3-2/feature32.component";
import {Feature33Component} from "./feature3/feature3-3/feature33.component";
import {PageNotFoundComponent} from "./pagenotfound/pagenotfound.component";
import {Feature4Component} from "./feature4/feature4.component";
import {HasPrivateAccessGuard} from "./guards/has-private-access.guard";
import {ConfirmExitPrivateZoneGuard} from "./guards/confirm-exit-private-zone.guard";
import {Feature41Component} from "./feature4/feature4-1/feature41.component";
import {Feature42Component} from "./feature4/feature4-2/feature42.component";
import {Feature43Component} from "./feature4/feature4-3/feature43.component";

const routes: Routes = [
  { path: '', component: HomeComponent, data: {appName: 'Angular Routing', appVersion: '1.0.0'}},
  { path: 'feature1', component: Feature1Component},
  { path: 'feature2', component: Feature2Component},
  { path: 'feature2/:param1', component: Feature2Component},
  { path: 'feature3', component: Feature3Component,
    children: [
      { path: 'feature31', component: Feature31Component},
      { path: 'feature32', component: Feature32Component},
      { path: 'feature33/:origin', component: Feature33Component}
    ]
  },
  { path: 'feature4', component: Feature4Component, canActivate: [HasPrivateAccessGuard], canDeactivate: [ConfirmExitPrivateZoneGuard],
    children: [
      {path: 'rol1', canActivateChild: [HasPrivateAccessGuard],
        children: [
          {path: 'feature41', component: Feature41Component},
          {path: 'feature42', component: Feature42Component}
        ]
      },
      {path: 'rol2'
        ,
        children: [
          {path: 'feature43', component: Feature43Component}
        ]
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(routes);
