import {Injectable} from '@angular/core';
import { Widget } from '../models/widget.model.client';

@Injectable()
export class WidgetService {

    // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
    widgets: Widget[] = [
        new Widget('123', 'HEADER', '321', '1', 'London terror attack: Police fired unprecedented number of rounds'),
        new Widget('124', 'HEADER', '321', '3', 'Counter terrorism officers patrol near the scene of the attack on London Bridge.' ),
        new Widget('125', 'IMAGE', '321', '2', 'text', '100%',
            'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg'),
        new Widget('127', 'HTML', '321', '2', '<p>blalbla</p>' ),
        new Widget('126', 'YOUTUBE', '321', '2', 'text', '100%', 'https://www.youtube.com/embed/APexI9Zb6iE/' ),
    ];

    createWidget(pageId, widget) {
        this.widgets.push(widget);
    }

    updateWidget(widgetId, widget) {
        for ( const i in this.widgets ) {
            if ( this.widgets[i]._id === widgetId ) {
                switch (widget.widgetType) {
                    case 'HEADER':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].size = widget.size;
                        return true;

                    case 'IMAGE':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].url = widget.url;
                        this.widgets[i].width = widget.width;
                        return true;

                    case 'YOUTUBE':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].url = widget.url;
                        this.widgets[i].width = widget.width;
                        return true;
                }

            }
        }
        return false;
    }
    findByPageId(pageId: String) {
        return this.widgets.filter(function (widget) {
            return widget.pageId === pageId;
        });
    }
    findByWidgetId(widgetId: String) {
        return this.widgets.find(function (widget) {
            return widget._id == widgetId;
        });
    }
    findByIdType(pageId: String, type: String) {
        const widgetsFiltered = this.findByPageId(pageId);
        return widgetsFiltered.filter(function (widget) {
            return (widget.widgetType == type);
        });
    }
    deleteWidget(websiteId: String) {
        for (const i in this.widgets) {
            if (this.widgets[i]._id === websiteId) {
                const j = +i;
                this.widgets.splice(j, 1);
            }
        }
    }
}
