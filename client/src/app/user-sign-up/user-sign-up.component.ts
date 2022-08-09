import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.sass']
})
export class UserSignUpComponent implements OnInit {

  forms: FormControl

  constructor() {
    this.forms = new FormControl()
  }

  ngOnInit(): void {
  }

  onSubmit(e: NgForm):void {
    alert("Enviado!!!!")
  }

}
