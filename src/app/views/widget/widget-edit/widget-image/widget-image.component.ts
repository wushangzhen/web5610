import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {NgForm} from '@angular/forms';

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
    @ViewChild('z') myEditWidgetForm: NgForm;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, public sanitizer: DomSanitizer,
              private router: Router) { }
  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId);
      this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
  }
  editImage() {
      console.log(this.myEditWidgetForm.value.imageName)
      this.widget.name = this.myEditWidgetForm.value.imageName;
      this.widget.text = this.myEditWidgetForm.value.imageText;
      this.widget.url = this.myEditWidgetForm.value.imageURL;
      this.widget.width = this.myEditWidgetForm.value.imageWidth;
      this.widgetService.updateWidget(this.widgetId, this.widget);
      this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.webId = params['wid'];
          this.pageId = params['pid'];
          this.widgets = this.widgetService.widgets;
          this.widgetId = params['wgid'];
            this.widget = this.widgetService.findByWidgetId(this.widgetId);
        }
    );
  }

}
