import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('x') myProfileForm: NgForm;
  user;
  uid: String;
  username: String;
  email: String;
  firstName: String;
  lastName: String;
  constructor(
      private userService: UserService,
      private route: ActivatedRoute, private sharedService: SharedService, private router: Router) {
    // this.user = new User('123', 'alice', 'qq');
    // this.user = new User('123', 'alice', 'alice');
  }

  updateUser() {
    console.log(this.myProfileForm.value.username);
    this.user.email = this.myProfileForm.value.email;
    this.user.username = this.myProfileForm.value.username;
    this.user.firstName = this.myProfileForm.value.firstName;
    this.user.lastName = this.myProfileForm.value.lastName;
    this.route.params.subscribe(params => {
      return this.userService.updateUser(this.user).subscribe(
          (user: any) => {
            this.sharedService.user = user;
            this.user = user;
          }
      );
    });
  }

  deleteUser() {
    return this.userService.deleteUserById(this.uid).subscribe(
        (user: any) => {
          this.router.navigate(['/login']);
        }
    );
  }


  ngOnInit() {
    this.user = this.sharedService.user;
    this.route.params.subscribe(params => {
      this.uid = params['uid'];
    });
    // this.user = this.userService.findUserById(params['uid']);

    // this.userService.findUserById(this.user._id)
    //     .subscribe(data => {
    //       console.log('in login comp...');
    //       console.log(data);
    //       this.user = data;
    //     });
    // this.route.params.subscribe(params => {
    //   console.log(params['uid']);
    //   // this.user = this.userService.findUserById(params['uid']);
    //   return this.userService.findUserById(params['uid']).subscribe(
    //       (user: User) => {
    //         console.log("xxxxxxxxx");
    //         this.user = user;
    //       }
    //   );
    // });
  }

}
