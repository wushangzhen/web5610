import {Component, OnInit, ViewChild} from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: String
  webId: String
  pages: Page[] = [];
  page: Page;
  @ViewChild('z') myPageNewForm: NgForm;
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) {}
  createPage() {
    this.page = new Page('1', this.myPageNewForm.value.pageName, this.webId, this.myPageNewForm.value.pageTitle);
    console.log(this.myPageNewForm.value.pageName);
    this.pageService.createPage(this.webId, this.page);
    this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.webId = params['wid'];
          this.pages = this.pageService.findPageByWebsiteId(this.webId);
        }
    );
  }
}
