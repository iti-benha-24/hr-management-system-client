import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent {

  deptName: string = '';
  id : number;
  formgroup!: FormGroup;

  constructor(private deptservice: DepartmentService, private router: Router,private formbuilder: FormBuilder , private activee : ActivatedRoute) {
    this.id= Number(this.activee.snapshot.paramMap.get("id"));
    this.formgroup = this.formbuilder.group({
      deptName: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    if(this.id != 0){
      this.deptservice.getDepartmentById(this.id).subscribe({
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
      this.deptservice.addDepartment(this.formgroup.value).subscribe({
        next: (response) => {
          this.router.navigate(['/department']);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }else{
      this.deptservice.updateDepartment(this.id,this.formgroup.value).subscribe({
        next: (response) => {
          this.router.navigate(['/department']);
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
