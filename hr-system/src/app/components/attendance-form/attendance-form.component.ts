import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceService } from 'src/services/attendance.service';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.css']
})
export class AttendanceFormComponent implements OnInit{
  employees:any;
  attendId:number;
  myForm:FormGroup;
  constructor(private attendanceService:AttendanceService,private fb:FormBuilder,private router:Router,private active:ActivatedRoute) {
    this.attendId= Number(this.active.snapshot.paramMap.get("id"));
    this.myForm=this.fb.group({
      date: [null, Validators.required],
      arrivalTime: [null, Validators.required],
      leaveTime: [null],
      employeeId: [0, Validators.required] 
    })
  }
  convertToTimeSpan(inputValue: string): string {
    const parts = inputValue.split(':'); // Split hours and minutes
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);

    // Construct TimeSpan object
    const timeSpan = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`;
    return timeSpan;
  }
 
  onSubmit(){
    if(this.myForm.valid){
      if(this.attendId == 0){
      const formData = this.myForm.value;
      formData.arrivalTime = this.convertToTimeSpan(formData.arrivalTime);
      formData.leaveTime =formData.leaveTime ==null ? null : this.convertToTimeSpan(formData.leaveTime);
      
      this.attendanceService.addEmployeAttendance(formData).subscribe({
        next: (response) => {
          this.router.navigate(['/attendance']);
        },
        error: (error) => {
          console.log(error);
        }
      });
      this.myForm.reset();
    }else{
      const formData = this.myForm.value;
      formData.arrivalTime = this.convertToTimeSpan(formData.arrivalTime);
      formData.leaveTime =formData.leaveTime ==null ? null : this.convertToTimeSpan(formData.leaveTime);
      this.attendanceService.editAttendance(this.attendId,formData).subscribe({
        next: (response) => {
          this.router.navigate(['/attendance']);
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }
    }else{
      this.markFormGroupTouched(this.myForm);
      console.log(this.myForm.value);
    }
  }
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
  
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
    const employeeIdControl = formGroup.get('employeeId');
    if (employeeIdControl && employeeIdControl.value === 0) {
      employeeIdControl.setErrors({ 'required': true });
    }
  }
  ngOnInit(): void {
    if(this.attendId != 0){
      this.attendanceService.getEmployeeAttendanceById(this.attendId).subscribe({
        next: (response) => {
          this.myForm.patchValue(response);
          console.log(response);
        },
        error: (error) => {
          console.log("there are error in get all employees")
        }
      });
    }
    this.attendanceService.getAllEmployee().subscribe({
      next: (response) => {
        this.employees =response;
        
      },
      error: (error) => {
        console.log("there are error in get all employees")
      }
    });
  }



}
