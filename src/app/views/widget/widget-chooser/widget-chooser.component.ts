import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: String;
  webId: String;
  pageId: String;
  // widgets: Widget[] = [];
  widget: any = {
      pageId: '',
      type: 'HEADING',
      name: '',
      text: '',
      placeholder: '',
      description: '',
      url: '',
      width: '',
      height: '',
      rows: 1,
      size: 1,
      class: '',
      icon: '',
      deletable:true,
      formatted: true,
      position: 0,
  };
  wgid: String;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
              public sanitizer: DomSanitizer, private router: Router, private sharedService: SharedService) { }

  createNewHeader() {
      this.widget.type = 'HEADING';
      this.widgetService.createWidget(this.pageId, this.widget).subscribe((data: any) => {
          this.widget = data;
          this.sharedService.widget = data;
          this.widgetService.findByPageId(this.pageId).subscribe((data1: any) => {
              this.sharedService.widgets = data1;
          });
          this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
      });
  }
    createNewHTML() {
        this.widget.type = 'HTML';
        this.widgetService.createWidget(this.pageId, this.widget).subscribe((data: any) => {
            this.widget = data;
            this.sharedService.widget = data;
            this.widgetService.findByPageId(this.pageId).subscribe((data1: any) => {
                this.sharedService.widgets = data1;
            });
            console.log(this.widget.type);
            this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
        });
    }
    createNewTEXT() {
        this.widget.type = 'TEXT';
        this.widgetService.createWidget(this.pageId, this.widget).subscribe((data: any) => {
            this.widget = data;
            this.sharedService.widget = data;
            this.widgetService.findByPageId(this.pageId).subscribe((data1: any) => {
                this.sharedService.widgets = data1;
            });
            this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
        });
    }
    createNewYoutube() {
        this.widget.type = 'YOUTUBE';
        // this.widget = new Widget('YOUTUBE', this.pageId, '2', 'text', '100%', 'https://www.youtube.com/embed/APexI9Zb6iE/' );
        this.widgetService.createWidget(this.pageId, this.widget).subscribe((data: any) => {
            this.widget = data;
            this.sharedService.widget = data;
            this.widgetService.findByPageId(this.pageId).subscribe((data1: any) => {
                this.sharedService.widgets = data1;
            });
            this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
        });
    }
    createNewImage() {
        this.widget.type = 'IMAGE';
        // this.widget = new Widget( 'IMAGE', this.pageId, '2', 'text', '100%',
        //     'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg');
        this.widgetService.createWidget(this.pageId, this.widget).subscribe((data: any) => {
            this.widget = data;
            this.sharedService.widget = data;
            this.widgetService.findByPageId(this.pageId).subscribe((data1: any) => {
                this.sharedService.widgets = data1;
            });
            this.router.navigate(['/usr/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
        });
    }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.webId = params['wid'];
          this.pageId = params['pid'];
          this.widget.pageId = this.pageId;
          // this.widgets = this.widgetService.widgets;
        }
    );
  }
}
