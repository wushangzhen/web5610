import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: String;
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.userId = this.sharedService.user._id;
    this.websiteService.findWebsitesByUser2(this.sharedService.user._id)
        .subscribe((data: any) => {
          this.websites = data;
          this.sharedService.websites = data;
    });
  }
}
