import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public myForm: FormGroup = new FormGroup({})
  constructor() { }

  ngOnInit(): void {
    this.makeForm()
  }


  makeForm(): void {
    this.myForm = new FormGroup(
      {
        username: new FormControl('', [Validators.required]),
        check: new FormControl('',
          [
            Validators.required,
            Validators.requiredTrue
          ])
      }
    )
  }

}
