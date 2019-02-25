import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') myRegisterForm: NgForm;
  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding
  user: User;

  constructor(private userService: UserService, private router: Router) {
    this.username = 'hello world!';
  }
  register() {
    this.username = this.myRegisterForm.value.username;
    this.password = this.myRegisterForm.value.password;
    alert(this.username);
    this.user = new User(Math.floor(Math.random() * Math.floor(1000)), this.username, this.password);
    // TODO the id type is not right
    const user: User = this.userService.findUserByCredential(this.username, this.password);
    if (!user) {
      this.userService.createUser(this.user);
      console.log(this.user.username);
      this.router.navigate(['profile/', this.user._id]);
    }
    // TODO deal with if (user) situation
  }

  ngOnInit() {
    // this.users = UserService.getAllUser();
    console.log('register page!' + this.username);
  }

}
