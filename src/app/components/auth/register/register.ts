import { Component, inject, Renderer2 } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthFacade } from '../facade/auth.facade';
import { DialogError } from '../../../shared/dialog/dialog-error/dialog-error';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {
  dialog = inject(MatDialog);
  form: any;
  private dialogRef?: MatDialogRef<DialogError>;
  
  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    private renderer: Renderer2,
    private router: Router
  ) {
      this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loading = false;
  error = '';

  ngOnInit() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  voltarInicio(): void {
    this.router.navigate(['/home']);
  }

  async submit() {
    if (this.form.invalid) return;

    this.loading = true;
    this.error = '';

    const { email, password } = this.form.value;

    this.authFacade.register(email, password)
      .subscribe({
        error: () => {
          this.dialogRef = this.dialog.open(DialogError, {
            width: '400px',
            disableClose: true
          });

          this.dialogRef.afterClosed().subscribe(() => {
            this.dialogRef = undefined;
          });
        }
      });
  }

  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'overflow');
  }
}
