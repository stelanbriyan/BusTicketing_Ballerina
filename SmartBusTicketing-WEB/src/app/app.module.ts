import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from "./component/dashboard/login/login.component";
import {AuthService} from "./service/AuthService";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.route";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {BillComponent} from "./component/dashboard/bill/bill.component";
import {UsageComponent} from "./component/dashboard/usage/usage.component";
import {HeaderComponent} from "./component/common/header/header.component";
import {SidebarComponent} from "./component/common/sidebar/sidebar.component";
import {HomeComponent} from "./component/dashboard/home/home.component";
import {MapComponent} from "./component/dashboard/locationMap/map.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        BillComponent,
        UsageComponent,
        SidebarComponent,
        HeaderComponent,
        HomeComponent,MapComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
