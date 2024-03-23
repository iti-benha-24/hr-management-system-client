import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicHolidayInsertComponent } from './public-holiday-insert.component';

describe('PublicHolidayInsertComponent', () => {
  let component: PublicHolidayInsertComponent;
  let fixture: ComponentFixture<PublicHolidayInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicHolidayInsertComponent]
    });
    fixture = TestBed.createComponent(PublicHolidayInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
