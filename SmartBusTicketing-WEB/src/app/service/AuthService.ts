import {Injectable} from "@angular/core";
/**
 * Created by Stelan Briyan on 5/20/2017.
 */

@Injectable()
export class AuthService {

    doAuthontication(auth: any) {
        console.log(auth.username + ' ' + auth.password);
    }
}