import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'src/app/services/customValidators.service';
import { ValidationService } from "../../services/validation.service"

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.sass'],
  providers: [
    ValidationService,
    CustomValidators
  ]
})
export class UserSignUpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public validationService: ValidationService,
    private customValidators: CustomValidators
  ) {
    this.submited = false;
  }


  
  
  validationForm: FormGroup;
  submited: boolean;
  
  ngOnInit(){
    this.validationForm = this.formBuilder.group({

      email: [null, {
          validators: [
            Validators.required,
            Validators.email
          ]
        }
      ],
      confirmEmail: [null, {
        validators: [
          Validators.required,
        ]
      },
      {
        validators: [
          this.customValidators.equalsToValidator("email", "confirmEmail")
        ]
      }
    ],
    })
  }

  get emailField() {
    return this.validationForm.get("email")
  }
  
  get confirmEmailField() {
    return this.validationForm.get("confirmEmail")
  }

  // get passwordField() {
  //   return this.validationForm.get("password")
  // }
  // get confirmPasswordField() {}


  onSubmit(){
    console.log(this.confirmEmailField?.errors)
  }

}
