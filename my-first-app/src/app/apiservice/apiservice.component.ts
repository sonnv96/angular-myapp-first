import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Store} from '@ngrx/store';
import { AppState } from  '../store/reducers/app.state';
import {ListUsers} from '../store/reducers/list.model';

@Component({
  selector: 'app-apiservice',
  templateUrl: './apiservice.component.html',
  styleUrls: ['./apiservice.component.css']
})
export class APIServiceComponent implements OnInit {
  private contacts: Array<object> = [];
  error: 'Error';

  constructor(private  apiService: ApiService,
              private store: Store<AppState>) {
  }


  ngOnInit() {
    this.getContacts();
  }

  public getContacts() {
    this.apiService.getContacts().subscribe((data: Array<object>) => {
        this.contacts = data;
        console.log(this.contacts);
        this.store.dispatch({
          type: 'GET_USER_LIST_SUCCESS',
          payload: <ListUsers> {
            users: data,
          }
        });
      }, error => console.log(error)
    );
    this.apiService.getAllState().subscribe(state => {
        console.log(state);
      }
    );
  }
};
