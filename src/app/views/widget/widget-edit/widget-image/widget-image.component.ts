import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../../services/shared.service';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  userId: String;
  webId: String;
  pageId: String;
  widgets: Widget[] = [];
  widgetId: String;
  widget: Widget;
  baseUrl = environment.baseUrl;
  widgetTemp: Widget;
    @ViewChild('z') myEditWidgetForm: NgForm;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, public sanitizer: DomSanitizer,
              private router: Router, private sharedService: SharedService) { }
  deleteWidget() {
      this.widgetService.deleteWidget(this.widgetId).subscribe((data: any) => {
          // this.sharedService.widgets = data;
          // this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
          this.widgetService.findByPageId(this.pageId).subscribe((data1: any) => {
              this.sharedService.widgets = data1;
              this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
          });
      });
      // this.widgetService.findByPageId(this.pageId).subscribe((data1: any) => {
      //     this.sharedService.widgets = data1;
      //     this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
      // }); // TODO test
      // this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
  }
  editImage() {
      this.widgetService.findByWidgetId(this.widgetId).subscribe((data: any) => {
          this.widgetTemp = data;
          this.widgetTemp.name = this.myEditWidgetForm.value.imageName;
          this.widgetTemp.text = this.myEditWidgetForm.value.imageText;
          this.widgetTemp.width = this.myEditWidgetForm.value.imageWidth;
          this.widgetService.updateWidget(this.widgetId, this.widgetTemp).subscribe((data1: any) => {
          });
          this.widgetService.findByPageId(this.pageId).subscribe((data1: any) => {
              this.sharedService.widgets = data1;
          });
          this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
      });
      // this.widget.name = this.myEditWidgetForm.value.imageName;
      // this.widget.text = this.myEditWidgetForm.value.imageText;
      // // this.widget.url = this.myEditWidgetForm.value.imageURL;
      // this.widget.width = this.myEditWidgetForm.value.imageWidth;
      // this.widgetService.updateWidget(this.widgetId, this.widget).subscribe((data: any) => {
      // });
      // this.widgetService.findByPageId(this.pageId).subscribe((data: any) => {
      //     this.sharedService.widgets = data;
      // });
      // this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
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
