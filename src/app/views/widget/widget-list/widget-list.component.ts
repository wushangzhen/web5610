import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userId: String;
  webId: String;
  pageId: String;
  widgets = [{}];
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, public sanitizer: DomSanitizer,
              private sharedService: SharedService) { }
  findWidget() {
    // this.widgets = this.widgetService.findByPageId(this.userId);
    //   this.widgets = this.widgetService.widgets;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.webId = params['wid'];
          this.pageId = params['pid'];
          // this.widgets = this.widgetService.widgets;
        }
    );
    this.widgetService.findByPageId(this.pageId).subscribe((data: any) => {
        this.sharedService.widgets = data;
        this.widgets = data;
    });
  }
  reorderWidgets(indexes) {
        // call widget service function to update widget as per index
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe(
                // (data) => console.log(data)
            );
    }

}
