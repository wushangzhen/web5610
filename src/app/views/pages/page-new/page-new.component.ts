import {Component, OnInit, ViewChild} from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';


@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: String
  webId: String
  pages: Page[] = [];
  page: any = {
    name: '',
    description: '',
    websiteId: '',
    title: '',
    widgets: [],
  };
  @ViewChild('z') myPageNewForm: NgForm;
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router,
              private sharedService: SharedService) {}
  createPage() {
    if (this.myPageNewForm.value.pageName && this.myPageNewForm.value.pageTitle) {
      this.page.name = this.myPageNewForm.value.pageName;
      this.page.title = this.myPageNewForm.value.pageTitle;
      this.page.websiteId = this.webId;
      this.pageService.createPage(this.webId, this.page).subscribe((data: any) => {
        this.sharedService.page = data;
      });
      this.pageService.findPageByWebsiteId(this.webId).subscribe((data: any) => {
        this.sharedService.pages = data;
      });
    }
    this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.webId = params['wid'];
        }
    );
    this.pageService.findPageByWebsiteId(this.webId).subscribe((data:any)=> {
      this.sharedService.pages = data;
    });
  }
}
