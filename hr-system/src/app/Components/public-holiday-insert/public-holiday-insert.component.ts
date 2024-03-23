import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { PublicHolidayService } from 'src/app/Services/public-holiday.service';

@Component({
  selector: 'app-public-holiday-insert',
  templateUrl: './public-holiday-insert.component.html',
  styleUrls: ['./public-holiday-insert.component.css']
})
export class PublicHolidayInsertComponent {
  name: string = '';
  day: any;
  formgroup!: FormGroup;

  constructor(
    private holidayservice: PublicHolidayService,
    private router: Router,
    private formbuilder: FormBuilder,
  ) {
    this.formgroup = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      day: [''], // You can add validators here if needed
    });
  }

  insert(): void {
    if (this.formgroup.valid) {

      const holiday = {
        name: this.formgroup.value.name,
        day: this.formgroup.value.day,
      };
    
      this.holidayservice.Insert(holiday).subscribe(() => {
        this.router.navigateByUrl('/holidays');
        console.log('Holiday data:', holiday);
      });
    } else {
   
      alert('Form is invalid. Please check the fields.');
    }
  }
}
