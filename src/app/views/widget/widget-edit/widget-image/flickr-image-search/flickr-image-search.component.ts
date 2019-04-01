import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../../services/shared.service';
import {FlickrService} from '../../../../../services/flickr.service';
import {WidgetService} from '../../../../../services/widget.service.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {
  websiteId: String;
  pageId: String;
  userId: String;
  widgetId: String;
  photos: [any];
  error: String;
  searchText: String;

  constructor(private flickrService: FlickrService, private widgetService: WidgetService, private router: Router,
              private activatedRoute: ActivatedRoute, private sharedService: SharedService) {
  }

  ngOnInit() {
    // this.userId = this.sharedService.user['_id'];
    // fetch userId, pageId and websiteId from url
    this.activatedRoute.params
        .subscribe(
            (params: any) => {
                this.userId = params['uid'];
                this.websiteId = params['wid'];
                this.pageId = params['pid'];
                this.widgetId = params['wgid'];
            }
        );
  }

  searchPhotos() {

    this.flickrService
        .searchPhotos(this.searchText)
        .subscribe(
            (data: any) => {
              let val = data;
              val = val.replace('jsonFlickrApi(', '');
              val = val.substring(0, val.length - 1);
              val = JSON.parse(val);
              this.photos = val.photos.photo;
              // console.log(this.photos);
            }
        );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    const widget = {
      websiteId: this.websiteId,
        type: 'IMAGE',
      pageId: this.pageId,
      url: url,
        text: photo.title,
      width: '100%'
    };

    this.widgetService
        .updateWidget(this.widgetId, widget)
        .subscribe(
            (data: any) => {
              const result = data;
              if (result) {
                this.router.navigate(['/usr/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId
                + '/widget/' + this.widgetId]);
              } else {
                this.error = 'failed!';
              }
            }
        );
  }
}
