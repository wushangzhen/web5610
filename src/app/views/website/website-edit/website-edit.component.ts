import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: String
  webId: String
    websites: Website[] = [];
  website: Website;
    @ViewChild('z') myWebsiteEditForm: NgForm;
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }
  editWebsite() {
      if (this.myWebsiteEditForm.value.websiteName && this.myWebsiteEditForm.value.description) {
          this.website = new Website('111', this.myWebsiteEditForm.value.websiteName, this.userId, this.myWebsiteEditForm.value.description);
          console.log(this.website._id);
          this.websiteService.updateWebsite(this.userId, this.website);
      }
      this.router.navigate(['/usr/' + this.userId + '/website']);
  }
  deleteWebsite() {
      this.websiteService.deleteWebsite(this.webId);
      this.router.navigate(['/usr/' + this.userId + '/website']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.webId = params['wid'];
          this.websites = this.websiteService.findWebsitesByUser2(params['uid']);
        }
    );
  }
}
