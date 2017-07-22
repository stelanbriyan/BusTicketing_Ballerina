import {Component} from "@angular/core";
import {AuthService} from "../../../service/AuthService";
/**
 * Created by Stelan Briyan on 5/20/2017.
 */

@Component({
    selector: "login",
    templateUrl: "login.html",
    providers: [AuthService]
})
export class LoginComponent {
    private _inputData = {
        "username": "",
        "password": ""
    };

    constructor(private _auth: AuthService) {
    }

    login() {
        location.href = '/home';
    }
}