import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {Feature3Component} from "./feature3/feature3.component";
import {Feature2Component} from "./feature2/feature2.component";
import {Feature1Component} from "./feature1/feature1.component";
import {HomeComponent} from "./home/home.component";
import {Feature33Component} from "./feature3/feature3-3/feature33.component";
import {Feature32Component} from "./feature3/feature3-2/feature32.component";
import {Feature31Component} from "./feature3/feature3-1/feature31.component";
import {PageNotFoundComponent} from "./pagenotfound/pagenotfound.component";
import {Feature4Component} from "./feature4/feature4.component";
import {HasPrivateAccessGuard} from "./guards/has-private-access.guard";
import {ConfirmExitPrivateZoneGuard} from "./guards/confirm-exit-private-zone.guard";
import {LoginService} from "./services/login.service";
import {Feature42Component} from "./feature4/feature4-2/feature42.component";
import {Feature41Component} from "./feature4/feature4-1/feature41.component";
import {Feature43Component} from "./feature4/feature4-3/feature43.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Feature1Component,
    Feature2Component,
    Feature3Component,
    Feature31Component,
    Feature32Component,
    Feature33Component,
    Feature4Component,
    Feature41Component,
    Feature42Component,
    Feature43Component,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
              HasPrivateAccessGuard,
              ConfirmExitPrivateZoneGuard,
              LoginService],

  bootstrap: [AppComponent]
})
export class AppModule { }
