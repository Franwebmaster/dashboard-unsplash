import { Component } from '@angular/core';


import { PhotoService } from './sistema/photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos: Object[] = [];

  constructor(photoServive: PhotoService) {

    photoServive
    .listFromPhotos()
    .subscribe(photos => this.photos = photos);
  }
  
}
