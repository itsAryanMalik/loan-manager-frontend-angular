import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  FORM = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() {}

  ngOnInit(): void {}

  doSubmit() {
    console.log(this.FORM.value);
  }
}
