import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {environment} from '../../../../../environments/environment';
import {NgForm} from '@angular/forms';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {SharedService} from '../../../../services/shared.service';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  widgetNew = {name: '', text: ''};
  error: string;
  alert: string;
  flag = false;
  widget = {};
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  baseUrl: string;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {

    // initialize error and alert text
    this.error = 'Enter the name of the widget';
    this.alert = '* Enter the widget name';

    // fetch ids from current url
    this.activatedRoute.params
        .subscribe(
            (params: any) => {
              this.userId = params['uid'],
              this.websiteId = params['wid'];
              this.pageId = params['pid'];
              this.widgetId = params['wgid'];
            }
        );



    // fetching current widget based on widgetId
    this.widgetService.findByWidgetId(this.widgetId)
        .subscribe(
            (data: any) => {this.widget = data;  this.widget = {...this.widgetNew, ...this.widget}; console.log(this.widget); } ,
            (error: any) => console.log(error)
        );
  }

  updateWidget() {
    // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
    if (this.widget['name'] === '') {
      this.flag = true;
    } else {
      this.widgetService.updateWidget(this.widgetId, this.widget)
          .subscribe(
              (data: any) => this.router.navigate(['/usr/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']),
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
