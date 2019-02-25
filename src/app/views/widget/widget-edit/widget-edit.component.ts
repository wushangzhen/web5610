import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  wgid: String;
  widget: Widget;
  widgets: Widget[] = [];
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  this.activatedRoute.params.subscribe(
      (params: any) => {
        this.wgid = params['wgid'];
        this.widgets = this.widgetService.widgets;
        this.widget = this.widgets.find(function (widget) {
          return widget._id == params['wgid'];
        });
      }
  );
  }
}
