import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IGeneralSetting } from 'src/app/models/igeneral-setting';
import { EmployeeService } from 'src/app/services/employee.service';
import { GeneralSettingService } from 'src/services/general-setting.service';

@Component({
  selector: 'app-general-setting',
  templateUrl: './general-setting.component.html',
  styleUrls: ['./general-setting.component.css']
})
export class GeneralSettingComponent implements OnInit {
  settingForm: FormGroup;
  employeeId: number;
  generalSetting : any;
  weekdays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  constructor(private GS: GeneralSettingService, private fb: FormBuilder, private activate: ActivatedRoute, private employee: EmployeeService , private router:Router) {
    this.employeeId = Number(this.activate.snapshot.paramMap.get("id"));
    this.settingForm = this.fb.group({
      overtimeHour: ['', Validators.required],
      discountHour: ['', Validators.required],
      weekend1: ['', Validators.required],
      weekend2: ['', Validators.required],

    })
  }
  ngOnInit(): void {
    this.GS.getSetting(this.employeeId).subscribe({
      next: (response) => {
        this.generalSetting = response;
        console.log(this.generalSetting);
        this.settingForm.patchValue(response)
      }
    })

  }

  onSubmit() {
    if (this.settingForm.valid) {
      if(this.generalSetting !=null){
        this.GS.editSetting(this.employeeId,this.settingForm.value).subscribe({
          next: (response) =>{
            this.router.navigate(['/employee'])
          },
          error: (error) =>{
            console.log(error);
          }

        })
      }
      else{
      let settings = <IGeneralSetting>this.settingForm.value as IGeneralSetting
      this.GS.addSetting(this.employeeId, settings).subscribe({
        next: (Response) => {
          this.router.navigate(['/employee'])
        },
        error: (error) => {
          console.log(error);
        }
      })

    }
   }


  }




}
