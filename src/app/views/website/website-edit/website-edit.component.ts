import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: String
  webId: String
    websites: Website[] = [];
  // website: Website;
    website: any = {_id: '',
        name: '',
        description: '',
        // pages: Page=[],
        developerId: ''};
    @ViewChild('z') myWebsiteEditForm: NgForm;
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router,
              private sharedService: SharedService) { }
  editWebsite() {
      if (this.myWebsiteEditForm.value.websiteName && this.myWebsiteEditForm.value.websiteDescription) {
          console.log(this.myWebsiteEditForm.value.websiteName);
          console.log(this.website.name);
          this.website.name = this.myWebsiteEditForm.value.websiteName;
          this.website.description = this.myWebsiteEditForm.value.websiteDescription;
          console.log(this.website.name);
          this.websiteService.updateWebsite(this.userId, this.website).subscribe((data: any) => {
              this.website = data;
              this.websites = [];
              this.websiteService.findWebsitesByUser2(this.userId).subscribe((data1: any) => {
                  this.sharedService.websites = data1;
                  this.websites = data1;
              });
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
          this.website._id = params['wid'];
          this.website.developerId = this.userId;
          this.websiteService.findWebsitesById(this.webId).subscribe((data:any)=>{
              this.website = data;
          });
          // this.websites = this.websiteService.findWebsitesByUser2(params['uid']);
        }
    );
  }
}
