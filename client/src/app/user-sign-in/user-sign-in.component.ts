import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.sass']
})
export class UserSignInComponent implements OnInit {

  emailInput: string;

  constructor() { }

  ngOnInit(): void {
  }

}
