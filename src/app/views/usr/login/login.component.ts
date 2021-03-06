import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

import {NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';
import {SharedService} from '../../../services/shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') myLoginForm: NgForm;
  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {
    this.username = 'hello world!';
  }
  login() {
    this.username = this.myLoginForm.value.username;
    this.password = this.myLoginForm.value.password;

    // const user: User = this.userService.findUserByCredential(this.username, this.password);
    // if (user) {
    //   this.router.navigate(['profile/', user._id]);
    // }

    this.userService.login(this.username, this.password).subscribe(
        (data: any) => {
          this.sharedService.user = data;
          this.router.navigate(['/profile']);
        },
        (err: any) => {
          console.log(err);
        }
    );


    // this.userService.findUserByCredential(this.username, this.password)
    //     .subscribe((user: User) => {
    //       if (user) {
    //         this.sharedService.user = user;
    //         this.router.navigate(['/profile', user._id]);
    //       } else {
    //         alert(this.username + ' invalid!');
    //       }
    //     });
  }

  ngOnInit() {
    // this.users = UserService.getAllUser();
    console.log('login page!' + this.username);
  }
}
