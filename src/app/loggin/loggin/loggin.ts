import { Component , inject } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormsModule, Validators, FormGroup  } from '@angular/forms';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-loggin',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './loggin.html',
  styleUrl: './loggin.scss',
})
export class Loggin {

  auth = inject(Auth);

  form!: any;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
   
  ) {
     console.log(this.auth),
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.router.navigate(['/home']);
  }
}
