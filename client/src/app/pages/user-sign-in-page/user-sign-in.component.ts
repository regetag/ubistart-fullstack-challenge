  import { Component } from '@angular/core';
  import { FormGroup, FormControl, Validators } from "@angular/forms";
  import { ValidationService } from 'src/app/services/validation.service';

  @Component({
    selector: 'app-user-sign-in',
    templateUrl: './user-sign-in.component.html',
    styleUrls: ['./user-sign-in.component.sass']
  })
  export class UserSignInComponent {
    constructor(
      public validationService: ValidationService
    ) {
      this.submited = false

      this.validationForm = new FormGroup({
        email: new FormControl(null, {
          validators:[
            Validators.required,
            Validators.email
          ]
        }),
        password: new FormControl(null, {
          validators:[
            Validators.required,
          ]
        }),
      })
    }

    submited: boolean;
    validationForm: FormGroup;
    
    get password(){
      return this.validationForm.get("password")
    }

    get email(){
      return this.validationForm.get("email")
    }

    onSubmit(){
      console.log(this.email)
      if(this.validationForm.valid){
        alert("Hello world")
        // console.log("AEEEEEEEEEEE", this.model.email)
        // this.submited = true
      }

    }

  }
