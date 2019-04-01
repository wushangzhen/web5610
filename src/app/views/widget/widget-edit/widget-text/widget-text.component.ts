import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  flag = false; // setting error flag as false by default
  error: string;
  alert: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  userId: string;
  widget = {placeholder: '', };

  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // initialize error and alert text
    this.error = 'Enter the required field';
    this.alert = '* Enter the required fields';

    // fetch ids from current url
    this.activatedRoute.params
        .subscribe(
            (params: any) => {
              this.userId = params['uid'];
              this.websiteId = params['wid'];
              this.pageId = params['pid'];
              this.widgetId = params['wgid'];
            }
        );

    // fetch widget values as created on widget-new component
    this.widgetService.findByWidgetId(this.widgetId)
        .subscribe(
            (data: any) => this.widget = data,
            (error: any) => console.log(error)
        );
  }

  updateWidget() {

    // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
    if (this.widget['name'] === undefined) {
      this.flag = true;
    } else {
      this.widgetService.updateWidget(this.widgetId, this.widget)
          .subscribe(
              (data: any) => this.router.navigate(['/usr', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']),
              (error: any) => console.log(error)
          );
    }
  }

  deleteWidget() {

    // call delete widget function from widget client service
    this.widgetService.deleteWidget(this.widgetId)
        .subscribe(
            (data: any) => this.router.navigate(['/usr', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']),
            (error: any) => console.log(error)
        );

  }

}
