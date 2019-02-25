import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('x') myProfileForm: NgForm;
  user: User;
  username: String;
  email: String;
  firstName: String;
  lastName: String;
  constructor(
      private userService: UserService,
      private route: ActivatedRoute) {
    // this.user = new User('123', 'alice', 'qq');
  }

  updateUser() {
    this.user.email = this.myProfileForm.value.email;
    this.user.firstName = this.myProfileForm.value.firstName;
    this.user.lastName = this.myProfileForm.value.lastName;
    this.user = this.userService.updateUser(this.user, this.user._id);
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.userService.findUserById(params['uid']);
    });
  }

}
