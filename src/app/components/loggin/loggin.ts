import { Component , inject } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormsModule, Validators, FormGroup  } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogError } from '../../shared/dialog/dialog-error/dialog-error';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-loggin',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './loggin.html',
  styleUrl: './loggin.scss',
})
export class Loggin {

  auth = inject(Auth);
  dialog = inject(MatDialog);

  private dialogRef?: MatDialogRef<DialogError>;

  form!: any;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
     private authService: AuthService
   
  ) {
     console.log(this.auth),
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    const email = this.form.value.username;
    const password = this.form.value.password;

    try {
      await this.authService.login(email, password);
      this.router.navigate(['/home']);
    } catch (error) {
      if (this.dialogRef) return; // 👈 evita abrir 2x

      this.dialogRef = this.dialog.open(DialogError, {
        width: '400px',
        disableClose: true
      });

      this.dialogRef.afterClosed().subscribe(() => {
        this.dialogRef = undefined;
      });
    }
  }
}
