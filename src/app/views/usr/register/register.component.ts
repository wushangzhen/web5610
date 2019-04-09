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
  user: any = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    websites: [],
  };
  uid: String;

  constructor(private userService: UserService, private router: Router, private shareService: SharedService) {
    this.username = 'hello world!';
  }
  register() {
    this.user.username = this.myRegisterForm.value.username;
    this.user.password = this.myRegisterForm.value.password;
    alert(this.username);
    console.log(this.user.username);
    console.log(this.user.password);
    // this.user = new User(this.username, this.password);
    // TODO the id type is not right
    // const user: User = this.userService.findUserByCredential(this.username, this.password);
    // this.userService.findUserById(this.username).subscribe((data: any) => {
    //   console.log(data);
    // });
    this.userService.register(this.user.username, this.user.password)
        .subscribe(
            (data: any) => {
              this.shareService.user = data;
              this.router.navigate(['/profile']);
            },
            (error: any) => {
              // this.error = error._body;
            }
        );
    // this.userService.findUserByCredential(this.username, this.password)
    //     .subscribe((user: any) => {
    //       if (!user) {
    //         this.userService.createUser(this.user).subscribe((data: any) => {
    //           this.user = data;
    //           this.shareService.user = data;
    //           this.router.navigate(['profile/', this.user._id]);
    //         });
    //       }
    //     });
    // TODO deal with if (user) situation
  }

  ngOnInit() {
    // this.users = UserService.getAllUser();
    console.log('register page!' + this.username);
  }

}
