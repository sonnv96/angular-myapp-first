import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My app';
  todaydate = new Date();
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];
  isavailable = false;
  httpdata;
  myClickFunction(event) {
    alert('Button is clicked');
    console.log(event);
  }
  changemonths(event) {
    alert('Changed month from the Dropdown');
    console.log(event);
  }
  tdate;
  componentproperty;
  constructor(private myservice: MyserviceService, private http: HttpClient) {}
  ngOnInit() {
    this.tdate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = "component created";
    this.componentproperty = this.myservice.serviceproperty;
    // angular 4.x
    // this.http.get("http://jsonplaceholder.typicode.com/users")
    //   .pipe(map((response: any) => response.json())).
    // subscribe((data) => console.log(data));


    //angular 6.x (Http client)
    this.http.get("http://jsonplaceholder.typicode.com/users").
    // Data extraction from the HTTP response is already done
    // Display the result
    subscribe((data) => {this.displaydata(data); });
  }
      displaydata(data) {this.httpdata = data; }

}
