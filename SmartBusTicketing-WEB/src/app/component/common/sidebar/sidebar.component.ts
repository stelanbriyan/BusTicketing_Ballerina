import {Component} from "@angular/core";
import {Router} from "@angular/router";
/**
 * Created by Stelan Briyan on 6/8/2017.
 */

@Component({
    selector:"sidebar-cmp",
    templateUrl:"sidebar.html"
})
export class SidebarComponent{
    constructor(private _router: Router){}
}