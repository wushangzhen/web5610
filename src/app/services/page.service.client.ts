import { Page } from '../models/page.model.client';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable()
export class PageService {
    constructor(private http: HttpClient) { }
    baseUrl = environment.baseUrl;
    createPage(websiteId: String, page: Page) {
        const req_url = this.baseUrl + 'api/website/' + websiteId + '/page';
        return this.http.post(req_url, page);
    }

    findPageByWebsiteId(websiteId: String) {
        const req_url = this.baseUrl + 'api/website/' + websiteId + '/page';
        return this.http.get(req_url);
    }

    findPageById(pageId: String) {
        const req_url = this.baseUrl + 'api/page/' + pageId;
        return this.http.get(req_url);
        // return this.pages.find(function (page) {
        //     return page._id === pageId;
        // });
    }

    updatePage(pageId: String, page: Page) {
        const req_url = this.baseUrl + 'api/page/' + pageId;
        console.log(req_url);
        return this.http.put(req_url, page);
        // for (const i in this.pages) {
        //     if (this.pages[i]._id === pageId) {
        //         this.pages[i].name = page.name;
        //         this.pages[i].title = page.title;
        //     }
        // }
    }

    deleteWebsite(pageId: String) {
        const req_url = this.baseUrl + 'api/page/' + pageId;
        return this.http.delete(req_url);
    }
}
