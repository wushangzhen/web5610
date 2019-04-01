import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../../services/shared.service';

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
  // widget: Widget;
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
    editHeader() {
        this.widget.name = this.myEditWidgetForm.value.headingName;
        this.widget.text = this.myEditWidgetForm.value.headingText;
        this.widget.size = this.myEditWidgetForm.value.headingSize;
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
          this.widgetService.findByWidgetId(this.widgetId).subscribe((data:any)=> {
              this.widget = data;
          });
          // this.widget = this.sharedService.widget;
        }
    );
  }

}
