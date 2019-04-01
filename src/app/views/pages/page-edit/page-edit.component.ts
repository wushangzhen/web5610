import {Component, OnInit, ViewChild} from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {NgForm} from '@angular/forms';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: String;
  webId: String;
  pages: Page[] = [];
  pageId: String;
  page: any = {
    name: '',
    description: '',
    websiteId: '',
    title: '',
    widgets: [],
  };
  @ViewChild('z') myPageEditForm: NgForm;
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router,
              private sharedService: SharedService) {}
  editPage() {
    if (this.myPageEditForm.value.pageName && this.myPageEditForm.value.pageTitle) {
      this.page.name = this.myPageEditForm.value.pageName;
      this.page.websiteId = this.webId;
      this.page.title = this.myPageEditForm.value.pageTitle;
      // this.page = new Page(this.myPageEditForm.value.pageName, this.webId, this.myPageEditForm.value.pageTitle);
      this.pageService.updatePage(this.pageId, this.page).subscribe((data: any) => {
        this.sharedService.page = data;
      });
      this.pageService.findPageByWebsiteId(this.webId).subscribe((data: any) => {
        this.sharedService.pages = data;
      });
    }
    this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page']);
  }
  deletePage() {
    this.pageService.deleteWebsite(this.pageId).subscribe((data: any) => {
      this.sharedService.page = data;
    });
    this.pageService.findPageByWebsiteId(this.webId).subscribe((data: any) => {
      this.sharedService.pages = data;
    });
    this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.webId = params['wid'];
          this.pageId = params['pid'];
          // this.pages = this.pageService.findPageByWebsiteId(this.webId);
          this.pageService.findPageByWebsiteId(this.webId).subscribe((data:any)=>{
            this.sharedService.page = data;
          });
          this.pageService.findPageById(this.pageId).subscribe((data:any)=>{
            this.page = data;
          });

          // this.page = this.sharedService.page;
        }
    );
  }
}
