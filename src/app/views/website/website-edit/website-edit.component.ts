import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

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
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router,
              private sharedService: SharedService) { }
  editWebsite() {
      if (this.myWebsiteEditForm.value.websiteName && this.myWebsiteEditForm.value.websiteDescription) {
          this.website =
              new Website(this.myWebsiteEditForm.value.websiteName, this.userId, this.myWebsiteEditForm.value.websiteDescription);
          this.website._id = this.webId;
          this.websiteService.updateWebsite(this.userId, this.website).subscribe((data: any) => {
              this.sharedService.websites = data;
          });
      }
      this.router.navigate(['/usr/' + this.userId + '/website']);
  }
  deleteWebsite() {
      this.websiteService.deleteWebsite(this.userId, this.webId).subscribe((data: any) => {
          this.sharedService.websites = data;
      });
      this.router.navigate(['/usr/' + this.userId + '/website']);
  }

  ngOnInit() {
      this.websites = this.sharedService.websites;
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.webId = params['wid'];
          // this.websites = this.websiteService.findWebsitesByUser2(params['uid']);
        }
    );
  }
}
