import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { PublicHolidayService } from 'src/services/public-holiday.service';

@Component({
  selector: 'app-public-holiday-insert',
  templateUrl: './public-holiday-insert.component.html',
  styleUrls: ['./public-holiday-insert.component.css']
})
export class PublicHolidayInsertComponent implements OnInit{
  name: string = '';
  day: any;
  id : number;
  formgroup!: FormGroup;

  constructor(private holidayservice: PublicHolidayService, private router: Router,private formbuilder: FormBuilder , private activee : ActivatedRoute) {
    this.id= Number(this.activee.snapshot.paramMap.get("id"));
    this.formgroup = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      day: ['', [Validators.required]], // You can add validators here if needed
    });
  }
  ngOnInit(): void {
    if(this.id != 0){
      this.holidayservice.GetById(this.id).subscribe({
        next: (response) => {
          this.formgroup.patchValue(response);
          console.log(response);
        },
        error: (error) => {
          console.log("there are error in get byId holiday")
          console.log(error);
        }
      });
    }

    
  }

  onSubmit(){
    if(this.formgroup.valid){
      if(this.id == 0){  
      this.holidayservice.Insert(this.formgroup.value).subscribe({
        next: (response) => {
          this.router.navigate(['/holidays']);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }else{
      this.holidayservice.Update(this.id,this.formgroup.value).subscribe({
        next: (response) => {
          this.router.navigate(['/holidays']);
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }
    }else{
      this.markFormGroupTouched(this.formgroup);
      console.log(this.formgroup.value);
    }
  }
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
  
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
}
}