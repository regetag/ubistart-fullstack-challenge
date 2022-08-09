/* 
  Este código foi desenvolvido utilizando a seguinte referencia:
  https://stackoverflow.com/questions/51605737/confirm-password-validation-in-angular-6
  https://blog.angular-university.io/angular-custom-validators/
*/

import { FormGroup, ValidationErrors } from "@angular/forms";
import { Injectable } from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class CustomValidators{
  constructor(){}

  equalsToValidator(firstFieldIdentifier: string, secondFieldIdentifier: string){
    console.log("CHAMOU")
    return (form: FormGroup) : ValidationErrors | null => {

      console.log("data", form)
      console.log(form instanceof FormGroup)

      const firstField = form.controls[firstFieldIdentifier];
      const secondField = form.controls[secondFieldIdentifier];

      if(!firstField || !secondField) return { equalsTo: true };

      const value = firstField.value;
      const valueToCompare = secondField.value;


      if (value !== valueToCompare) return { equalsTo: true };
      return null;
    }
  }

}

