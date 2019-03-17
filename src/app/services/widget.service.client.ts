import {Injectable} from '@angular/core';
import { Widget } from '../models/widget.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class WidgetService {

    // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
    // widgets: Widget[] = [
    //     new Widget('123', 'HEADER', '321', '1', 'London terror attack: Police fired unprecedented number of rounds'),
    //     new Widget('124', 'HEADER', '321', '3', 'Counter terrorism officers patrol near the scene of the attack on London Bridge.' ),
    //     new Widget('125', 'IMAGE', '321', '2', 'text', '100%',
    //         'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg'),
    //     new Widget('127', 'HTML', '321', '2', '<p>blalbla</p>' ),
    //     new Widget('126', 'YOUTUBE', '321', '2', 'text', '100%', 'https://www.youtube.com/embed/APexI9Zb6iE/' ),
    // ];
    constructor(private http: HttpClient) { }
    baseUrl = environment.baseUrl;

    createWidget(pageId, widget) {
        const url = this.baseUrl + 'api/page/' + pageId + '/widget';
        return this.http.post(url, widget);
    }

    updateWidget(widgetId, widget) {
        const url = this.baseUrl + 'api/widget/' + widgetId;
        return this.http.put(url, widget);
    }


    findByPageId(pageId: String) {
        const url = this.baseUrl + 'api/page/' + pageId + '/widget';
        return this.http.get(url);
    }
    findByWidgetId(widgetId: String) {
        const url = this.baseUrl + 'api/widget/' + widgetId;
        return this.http.get(url);

            // .pipe(map(
            // (response: Response) => {
            //     return response.json();
            // }
        // ));
    }
    findByIdType(pageId: String, type: String) {
        // const widgetsFiltered = this.findByPageId(pageId);
        // return widgetsFiltered.filter(function (widget) {
        //     return (widget.widgetType == type);
        // });
    }
    deleteWidget(widgetId: String) {
        const url = this.baseUrl + 'api/widget/' + widgetId;
        return this.http.delete(url);
    }
    reorderWidgets(startIndex, endIndex, pageId) {
        const url = this.baseUrl + 'api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '');
    }
}
