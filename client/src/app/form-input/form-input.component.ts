import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.sass']
})
export class FormInputComponent implements OnInit {

  @Input() title: string | undefined
  @Input() placeholder: string
  @Input() type: string

  constructor() { }

  ngOnInit(): void {
    console.log("This is type", this.type)
  }

}
