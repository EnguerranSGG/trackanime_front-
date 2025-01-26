import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
