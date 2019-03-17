import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../../services/shared.service';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  userId: String;
  webId: String;
  pageId: String;
  widgets: Widget[] = [];
  widgetId: String;
  widget: Widget;
  @ViewChild('z') myEditWidgetForm: NgForm;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, public sanitizer: DomSanitizer,
              private router: Router, private sharedService: SharedService) { }
  deleteWidget() {
      this.widgetService.deleteWidget(this.widgetId).subscribe((data: any) => {
      });
      this.widgetService.findByPageId(this.pageId).subscribe((data1: any) => {
          this.sharedService.widgets = data1;
      }); // TODO test
      this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
  }
  editYoutube() {
      this.widget.name = this.myEditWidgetForm.value.youtubeName;
      this.widget.text = this.myEditWidgetForm.value.youtubeText;
      this.widget.url = this.myEditWidgetForm.value.youtubeURL;
      this.widget.width = this.myEditWidgetForm.value.youtubeWidth;
      this.widgetService.updateWidget(this.widgetId, this.widget).subscribe((data: any) => {
      });
      this.widgetService.findByPageId(this.pageId).subscribe((data: any) => {
          this.sharedService.widgets = data;
      });
      this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.webId = params['wid'];
          this.pageId = params['pid'];
            this.widgetId = params['wgid'];
            this.widgets = this.sharedService.widgets;
            this.widget = this.sharedService.widget;
        }
    );
  }

}
