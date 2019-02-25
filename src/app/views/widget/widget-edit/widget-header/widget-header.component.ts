import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  userId: String;
  webId: String;
  pageId: String;
  widgetId: String;
  widgets: Widget[] = [];
  widget: Widget;
    @ViewChild('z') myEditWidgetForm: NgForm;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, public sanitizer: DomSanitizer,
              private router: Router) { }
  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId);
      this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
  }
    editHeader() {
        console.log(this.myEditWidgetForm.value.headingText)
        this.widget.name = this.myEditWidgetForm.value.headingName;
        this.widget.text = this.myEditWidgetForm.value.headingText;
        this.widget.size = this.myEditWidgetForm.value.headingSize;
        this.widgetService.updateWidget(this.widgetId, this.widget);
        this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/']);
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.webId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
          this.widgets = this.widgetService.widgets;
          this.widget = this.widgetService.findByWidgetId(this.widgetId);
        }
    );
  }

}
