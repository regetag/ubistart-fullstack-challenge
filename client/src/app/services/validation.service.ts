import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable()
class ValidationService{
  constructor(){}

  getErrorMessage(input: AbstractControl | null){
    if(!input) return null
    
    const errors = input?.errors || {};

    if(!Object.values(errors).length) return null

    const error = Object.keys(errors)[0]

    if (error === "required") return "Campo obrigatório.";
    if (error === "email") return "Email inválido.";

    throw new Error(`Você deve criar uma rota para o erro:${error}`)
  }

  isInputValid(input: AbstractControl | null): boolean{
    if (!input) return false

    const errors = input?.errors || {};

    const isInputModified = input?.dirty || false;
    const isInputValid = Object.values(errors).length ? false : true;

    return isInputValid && isInputModified;
  }


}

export { ValidationService };