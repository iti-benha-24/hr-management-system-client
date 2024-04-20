import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";


export function confirmPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let Password = control.get("Password");
        let confirmedPassword = control.get("confirmedPassword");

        if (!Password || !confirmedPassword || !Password.value || !confirmedPassword.value)
            return null;

        let errValue = { "unmatchedPassword" : {'Password': Password.value , 'ConfirmPassword': confirmedPassword.value}}

        return(Password.value === confirmedPassword.value) ? null : errValue;
    }
}

