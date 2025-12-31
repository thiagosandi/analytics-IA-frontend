import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormsModule, Validators, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-loggin',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './loggin.html',
  styleUrl: './loggin.scss',
})
export class Loggin {

  form!: any;
  
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.router.navigate(['/home']);
  }
}
