import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'https://us-central1-trakto-dev.cloudfunctions.net/unsplashApi/api/v1/photos/';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromPhotos() {
        return this.http 
        .get<Object[]>(API + 'curated?per_page=8&page=1') 
    }
}