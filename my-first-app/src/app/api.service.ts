import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Store} from '@ngrx/store';
import {ListUsers} from './store/reducers/list.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://jsonplaceholder.typicode.com';
  API_URL2 = 'http://localhost:65385/';
  constructor(private  httpClient:  HttpClient,
              private  store: Store<any>) { }
  getContacts() {
    return  this.httpClient.get(`${this.API_URL}/users`);
  }
  getAllState() {
    return  this.store.select('appReducer');
  }
  getListUser() {
    return  this.store.select('appReducer');
  }

}
