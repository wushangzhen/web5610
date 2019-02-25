import {Component, OnInit, ViewChild} from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {NgForm} from '@angular/forms';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

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
  page: Page;
  @ViewChild('z') myPageEditForm: NgForm;
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) {}
  editPage() {
    this.page = new Page('1', this.myPageEditForm.value.pageName, this.webId, this.myPageEditForm.value.pageTitle);
    this.pageService.updatePage(this.pageId, this.page);
    this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page']);
  }
  deletePage() {
    this.pageService.deleteWebsite(this.pageId);
    this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.webId = params['wid'];
          this.pageId = params['pid'];
          this.pages = this.pageService.findPageByWebsiteId(this.webId);
        }
    );
  }
}
