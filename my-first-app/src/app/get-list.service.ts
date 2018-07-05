// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class GetListService {
//
//   constructor(private http: HttpClient) { }
//    httpdata;
//   getList() {
//     this.http.get("http://jsonplaceholder.typicode.com/users").
//     // Data extraction from the HTTP response is already done
//     // Display the result
//     subscribe((data) => {this.displaydata(data); });
//   }
//   getConfig() {
//     // now returns an Observable of Config
//     return this.http.get("http://jsonplaceholder.typicode.com/users");
//   }
//   displaydata(data) {this.httpdata = data; }
// }
