import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
    employeeForm:FormGroup;
    employeeId:number;
    employees:any;
    departments:any;
    fname: any;

    constructor(private empservice:EmployeeService,private fb:FormBuilder,private router:Router,private active:ActivatedRoute) {
      this.employeeId= Number(this.active.snapshot.paramMap.get("id"));
      this.employeeForm=this.fb.group({
        firstName:["",Validators.required],
        lastName: ["", Validators.required],
        country:["",Validators.required],
        city:["",Validators.required],
        gender:["",Validators.required],
        birthDate:["",Validators.required],
        nationality:["",Validators.required],
        nationalId:["",Validators.required],
        hireDate:["",Validators.required],
        salary:["",Validators.required],
        arrivalTime: ["", Validators.required],
        leaveTime: ["",Validators.required],
        departmentId:[0,Validators.required]
      })
    }
    onSubmit(){
    
    if(this.employeeForm.valid){
      if(this.employeeId == 0){
      const formData = this.employeeForm.value;
      formData.arrivalTime = this.convertToTimeSpan(formData.arrivalTime);
      formData.leaveTime =this.convertToTimeSpan(formData.leaveTime);

      this.empservice.addEmployee(formData).subscribe({
        next: (response) => {
          this.router.navigate(['/employee']);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }else{
      const formData = this.employeeForm.value;
      formData.arrivalTime = this.convertToTimeSpan(formData.arrivalTime);
      formData.leaveTime = this.convertToTimeSpan(formData.leaveTime);
      this.empservice.updateEmployee(this.employeeId,formData).subscribe({
        next: (response) => {
          console.log(`${formData} updaaaaaaate`);
          this.router.navigate(['/employee']);
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }
    }else{
      this.markFormGroupTouched(this.employeeForm);
      console.log(this.employeeForm.value);
    }
  }

  convertToTimeSpan(inputValue: string): string {
    const parts = inputValue.split(':');
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);

    const timeSpan = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`;
    return timeSpan;
  }


  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
    const departmentIdControl = formGroup.get('departmentId');
    if (departmentIdControl && departmentIdControl.value === 0) {
      departmentIdControl.setErrors({ 'required': true });
    }
  }
  ngOnInit(): void {
    if(this.employeeId != 0){

      this.empservice.getEmployeeById(this.employeeId).subscribe({
        next: (response) => {
          console.log(response);
          const formData = response;
          formData.birthDate= new Date(response.birthDate).toISOString().split('T')[0];
          formData.hireDate= new Date(response.hireDate).toISOString().split('T')[0];

          this.employeeForm.patchValue(formData);
        },
        error: (error) => {
          console.log("there are error in get all employees")
        }
      });
    }
    this.empservice.getAllDepartment().subscribe({
      next: (response) => {
        this.departments =response;

      },
      error: (error) => {
        console.log("there are error in get all employees")
      }
    });

  }




}


