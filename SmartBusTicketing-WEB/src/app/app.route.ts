import {Routes} from "@angular/router";
import {LoginComponent} from "./component/dashboard/login/login.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {BillComponent} from "./component/dashboard/bill/bill.component";
import {UsageComponent} from "./component/dashboard/usage/usage.component";
import {HomeComponent} from "./component/dashboard/home/home.component";
import {MapComponent} from "./component/dashboard/locationMap/map.component";
/**
 * Created by manoj on 2/21/17.
 */

export const appRoutes: Routes = [

    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: 'bill',
                component: BillComponent
            },
            {
                path: 'usage',
                component: UsageComponent
            }
        ]
    },
    {
        path: 'bill',
        component: BillComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'usage',
        component: UsageComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'map',
        component: MapComponent
    }
];
