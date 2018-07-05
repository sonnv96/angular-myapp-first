import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIServiceComponent } from './apiservice.component';

describe('APIServiceComponent', () => {
  let component: APIServiceComponent;
  let fixture: ComponentFixture<APIServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
