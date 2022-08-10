import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'src/app/services/customValidators.service';
import { ValidationService } from "../../services/validation.service"

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.sass']
})
export class UserSignUpComponent implements OnInit {
  constructor(
    public validationService: ValidationService,
    private formBuilder: FormBuilder,
    private customValidators: CustomValidators
  ) {
    this.submited = false;

    // this.validationForm = new FormGroup({
    //   email: new FormControl(null, {
    //     validators: [
    //       Validators.required,
    //       Validators.email
    //     ]
    //   }),
      // confirmEmail: new FormControl(null, {
      //   validators: [
      //     Validators.required,
      //     equalsToValidator("email", "confirmEmail")
      //   ]
      // }),
      // password: new FormControl(null, {}),
      // passwordEmail: new FormControl(null, {})
    // })
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
