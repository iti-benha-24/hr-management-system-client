import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicHolidayUpdateComponent } from './public-holiday-update.component';

describe('PublicHolidayUpdateComponent', () => {
  let component: PublicHolidayUpdateComponent;
  let fixture: ComponentFixture<PublicHolidayUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicHolidayUpdateComponent]
    });
    fixture = TestBed.createComponent(PublicHolidayUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
