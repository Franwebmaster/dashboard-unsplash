import { Component, OnInit } from '@angular/core';

import { PhotoService } from './sistema/photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  photos: Object[] = [];

  constructor(private photoServive: PhotoService) {}
  
  ngOnInit(): void {
    this.photoServive
    .listFromPhotos()
    .subscribe(photos => this.photos = photos);
  }
  
}
