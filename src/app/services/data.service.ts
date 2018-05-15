import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: Http) {
    console.log('Data Service connected...');
  }
  getImages() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos').map( res => res.json());
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map( res => res.json());
  }
}
