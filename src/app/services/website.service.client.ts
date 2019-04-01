import { Website } from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';


@Injectable()
export class WebsiteService {
    constructor(private http: HttpClient) {}
    baseUrl = environment.baseUrl;

    createWebsite(userId: String, website: Website) {
        const req_url = this.baseUrl + 'api/user/' + userId + '/website';
        return this.http.post(req_url, website);
    }

    findWebsitesByUser(userId: String) {
        const req_url = this.baseUrl + 'api/user/' + userId + '/';
        // const resultSet = [];
        // for ( const i in this.websites) {
        //     if (this.websites[i].developerId === userId) {
        //         resultSet.push(this.websites[i]);
        //     }
        // }
        // return resultSet;
    }

    findWebsitesByUser2(userId: String) {
        const req_url = this.baseUrl + 'api/user/' + userId + '/website/';
        return this.http.get(req_url);
    }

    findWebsitesById(websiteId: String) {
        const req_url = this.baseUrl + 'api/website/' + websiteId;
        return this.http.get(req_url);
    }

    updateWebsite(userId: String, website: any) {
        const req_url = this.baseUrl + 'api/user/' + userId + '/website/' + website._id;
        return this.http.put(req_url, website);
    }

    deleteWebsite(userId: String, websiteId: String) {
        const req_url = this.baseUrl + 'api/user/' + userId + '/website/' + websiteId;
        return this.http.delete(req_url);
    }
}
