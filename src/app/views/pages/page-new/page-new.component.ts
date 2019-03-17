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
  page: Page;
  @ViewChild('z') myPageNewForm: NgForm;
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router,
              private sharedService: SharedService) {}
  createPage() {
    if (this.myPageNewForm.value.pageName && this.myPageNewForm.value.pageTitle) {
      this.page = new Page(this.myPageNewForm.value.pageName, this.webId, this.myPageNewForm.value.pageTitle);
      this.pageService.createPage(this.webId, this.page).subscribe((data: any) => {
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
  }
}
