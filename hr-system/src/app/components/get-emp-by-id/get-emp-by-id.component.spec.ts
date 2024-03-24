import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmpByIdComponent } from './get-emp-by-id.component';

describe('GetEmpByIdComponent', () => {
  let component: GetEmpByIdComponent;
  let fixture: ComponentFixture<GetEmpByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetEmpByIdComponent]
    });
    fixture = TestBed.createComponent(GetEmpByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
