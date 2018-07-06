import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './app.sqrt';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { GetListComponent } from './get-list/get-list.component';
import { APIServiceComponent } from './apiservice/apiservice.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import {listReducer} from './store/reducers/listReducer';


@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    SqrtPipe,
    APIServiceComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'new-cmp',
        component: NewCmpComponent
      },
      {
        path: 'apiservice',
        component: APIServiceComponent
      }
    ]),
    StoreModule.forRoot( {listusers: listReducer}, {}
    ),
    // StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
