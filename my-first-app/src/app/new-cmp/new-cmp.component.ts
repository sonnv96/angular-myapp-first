import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css'],
  // providers: [MyserviceService]
})
export class NewCmpComponent implements OnInit {
  newcomponent = "Entered in new component created";
  tdate;
  constructor(private myservice: MyserviceService) {}
  ngOnInit() {
    debugger
    this.tdate = this.myservice.showTodayDate();
  }



}
