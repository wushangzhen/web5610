import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  userId: String;
  websites: Website[] = [];
  decription: String;
  name: String;
  website: Website;
  @ViewChild('z') myWebsiteNewForm: NgForm;
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  createWebsite() {
      if (this.myWebsiteNewForm.value.websiteName && this.myWebsiteNewForm.value.description) {
          this.website = new Website('111', this.myWebsiteNewForm.value.websiteName, this.userId, this.myWebsiteNewForm.value.description);
          console.log(this.website._id);
          this.websiteService.createWebsite(this.userId, this.website);
      }
      this.router.navigate(['/usr/' + this.userId + '/website']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websites = this.websiteService.findWebsitesByUser2(params['uid']);
        }
    );
  }

}
