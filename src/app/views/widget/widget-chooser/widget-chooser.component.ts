import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: String;
  webId: String;
  pageId: String;
  widgets: Widget[] = [];
  widget: Widget;
  wgid: String;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
              public sanitizer: DomSanitizer, private router: Router) { }

  createNewHeader() {
      this.widget = new Widget(Math.floor(Math.random() * 1000), 'HEADER', '321', '1',
          'London terror attack: Police fired unprecedented number of rounds');
      this.widgetService.createWidget(this.pageId, this.widget);
      this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
  }
    createNewYoutube() {
        this.widget = new Widget(Math.floor(Math.random() * 1000), 'YOUTUBE', '321', '2', 'text', '100%', 'https://www.youtube.com/embed/APexI9Zb6iE/' );
        this.widgetService.createWidget(this.pageId, this.widget);
        this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
    }
    createNewImage() {
        this.widget = new Widget(Math.floor(Math.random() * 1000), 'IMAGE', '321', '2', 'text', '100%',
            'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg');
        this.widgetService.createWidget(this.pageId, this.widget);
        this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
    }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.webId = params['wid'];
          this.pageId = params['pid'];
          this.widgets = this.widgetService.widgets;
        }
    );
  }

}
