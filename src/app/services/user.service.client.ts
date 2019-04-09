import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {SharedService} from './shared.service';
// import {RequestOptions} from 'http';
import 'rxjs/Rx';
@Injectable()
export class UserService {
    constructor(private http: HttpClient, private sharedService: SharedService, private router: Router) { }
    baseUrl = environment.baseUrl;
    // options = new RequestOptions();

    loggedIn() {
        return this.http.post(this.baseUrl + 'api/loggedIn', '', {withCredentials: true})
            .map(
                (data: any) => {
                    // const data = res.json();
                    if (data !== 0) {
                        this.sharedService.user = data;
                        return true;
                    } else {
                        this.router.navigate(['/login']);
                        return false;
                    }
                }
            );
    }

    login(username, password) {
        // this.options.withCredentials = true;
        const body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + 'api/login', body, {withCredentials: true})
            .map(
                (res: any) => {
                    // const data = res.json();
                    return res;
                }
            );
    }

    logout() {
        return this.http.post(this.baseUrl + 'api/logout', '', {withCredentials: true});
            // .map(
            //     (res: any) => {
            //         const data = res.json();
            //         console.log(data);
            //         return data;
            //     }
            // );
    }

    register(username, password) {
        const body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + 'api/register', body, {withCredentials: true})
            .map(
                (res: any) => {
                    // const data = res.json();
                    console.log(res);
                    return res;
                }
            );
    }
    createUser(user: User) {
        // console.log(this.http.post<User>(this.baseUrl + 'api/user/', user));
        return this.http.post(this.baseUrl + 'api/user/', user);
    }

    findUserByCredential(username, password) {
        const req_url = this.baseUrl + 'api/user?username=' + username + '&password=' + password;
        return this.http.get<User>(req_url);
    }

    findUserById(userId: String) {
        // console.log(userId);
        // return this.users.find(function(user) {
        //     return user._id == userId;
        // });
        const req_url = this.baseUrl + 'api/user/' + userId;
        console.log(req_url);
        return this.http.get<User>(req_url);
        // return this.http.get(this.baseUrl + '/api/user/' + userId)
        //     .map( (res: Response) => { const data = res.json(); return data; } );
    }
    // findUser
    // delete

    updateUser(user: any) {
        const req_url = this.baseUrl + 'api/user/' + user._id;
        return this.http.put(req_url, user);
        // return this.http.put(req_url, user).map((response: Response) => {
        //     return response.json();
        // });
        // for (let i = 0; i < this.users.length; i++) {
        //     if (this.users[i]._id === userId) {
        //         this.users[i].firstName = user.firstName;
        //         this.users[i].lastName = user.lastName;
        //         return this.users[i];
        //     }
        // }
    }

    // getLength() {
    //     return this.users.length;
    // }

    deleteUserById(userId: String) {
        const req_url = this.baseUrl + 'api/user/' + userId;
        return this.http.delete(req_url);
    }
}
