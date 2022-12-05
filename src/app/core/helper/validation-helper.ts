import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

export class ValidationsHelpers {
    static getStatusError(statusSubmit: boolean, formGroup: FormGroup, fcName: string): boolean{
        const controlField = formGroup.controls[fcName];
    
        if((statusSubmit && controlField.errors) || (controlField.errors && controlField.touched)){
          return true;
        }
    
        return false;
    }

    static getErrorValidation(formControl: AbstractControl | FormControl): string | null {
        let error  =  null;

        if(formControl.errors){
            const firstKey = Object.keys(formControl.errors)[0];

            switch(firstKey){
                case 'required':
                   error = 'Field cannot be empty';
                   break;
                case 'minlength':
                    error = 'Mininum ' + formControl.errors['minlength'].requiredLength + ' character';
                    break;
                default:
                    error = formControl.errors[firstKey];
                    break;
            }
        }

        return error;
    }
}