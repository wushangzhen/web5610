import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';
import {SharedService} from '../../../services/shared.service';
import 'rxjs/Rx';
import {defer} from 'rxjs';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  wgid: String;
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
  // problem should ask teacher
  widgets: Widget[] = [];
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) {
  }

  ngOnInit() {
      this.activatedRoute.params.subscribe(
          (params: any) => {
            this.wgid = params['wgid'];
            this.widgetService.findByWidgetId(this.wgid).subscribe((data: any) => {
                this.sharedService.widget = data;
                this.widget = data;
                console.log("xxx" + this.widget.type);
            });
          }
      );
  }
}
