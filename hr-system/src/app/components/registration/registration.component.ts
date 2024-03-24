import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iuser } from 'src/app/models/iuser';
import { confirmPasswordValidator } from '../custom-validators/cross-field-validation';
import { RegisterService } from 'src/services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
    this.registrationForm = this.fb.group({
      FullName: ['', [Validators.required]],
      Username: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],

      Password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^a-zA-Z0-9]).{6,}$')]],
      confirmedPassword: ['', [Validators.required]]
    },
      { validators: [confirmPasswordValidator()] })
  }



  ngOnInit(): void {


  }

  onSubmit() {
    if (this.registrationForm.valid) {
      let user = <Iuser>this.registrationForm.value as Iuser
      this.registerService.registerUser(user).subscribe(
        Response => {
          alert("User registered Successfully")
        },
        Error => {
          alert('Error registration user:' + Error.error)
        }
      )

    }
  }

}
