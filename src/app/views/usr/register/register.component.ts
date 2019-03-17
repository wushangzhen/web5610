import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';

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
  uid: String;

  constructor(private userService: UserService, private router: Router, private shareService: SharedService) {
    this.username = 'hello world!';
  }
  register() {
    this.username = this.myRegisterForm.value.username;
    this.password = this.myRegisterForm.value.password;
    alert(this.username);
    this.user = new User(this.username, this.password);
    // TODO the id type is not right
    // const user: User = this.userService.findUserByCredential(this.username, this.password);
    this.userService.findUserByCredential(this.username, this.password)
        .subscribe((user: User) => {
          if (!user) {
            this.userService.createUser(this.user).subscribe((data: User) => {
              this.user = data;
              this.shareService.user = data;
              this.router.navigate(['profile/', this.user._id]);
            });
          }
        });
    // TODO deal with if (user) situation
  }

  ngOnInit() {
    // this.users = UserService.getAllUser();
    console.log('register page!' + this.username);
  }

}
