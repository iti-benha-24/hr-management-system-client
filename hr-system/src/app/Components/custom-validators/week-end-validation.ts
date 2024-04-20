import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const weekendValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const weekend1Control = control.get('weekend1');
    const weekend2Control = control.get('weekend2');

    if (!weekend1Control || !weekend2Control) {
        return null; 
    }

    const weekend1 = weekend1Control.value;
    const weekend2 = weekend2Control.value;

    return weekend1 !== weekend2 ? null : { weekendsNotDifferent: true };
};
