import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicHolidayGetAllComponent } from './public-holiday-get-all.component';

describe('PublicHolidayGetAllComponent', () => {
  let component: PublicHolidayGetAllComponent;
  let fixture: ComponentFixture<PublicHolidayGetAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicHolidayGetAllComponent]
    });
    fixture = TestBed.createComponent(PublicHolidayGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
