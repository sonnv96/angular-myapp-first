import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apiservice',
  templateUrl: './apiservice.component.html',
  styleUrls: ['./apiservice.component.css']
})
export class APIServiceComponent implements OnInit {
  private  contacts:  Array<object> = [];
  error: 'Error';
  constructor(private  apiService:  ApiService) { }


  ngOnInit() {
    this.getContacts();
  }
  public  getContacts() {
    this.apiService.getContacts().subscribe((data:  Array<object>) => {
      this.contacts  =  data;
      console.log(data);
    }, error => console.log(error)
    );
      this.apiService.getAllState().subscribe(state => {
      console.log(state);
      }
    );
  }

}
