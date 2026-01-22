import { Component , inject, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormsModule, Validators, FormGroup  } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogError } from '../../../shared/dialog/dialog-error/dialog-error';
import { AuthFacade } from '../facade/auth.facade';

@Component({
  selector: 'app-loggin',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './loggin.html',
  styleUrl: './loggin.scss',
})
export class Loggin {

  auth = inject(Auth);
  dialog = inject(MatDialog);

  private dialogRef?: MatDialogRef<DialogError>;

  form!: any;

  loading = false;
  
  constructor(
    private fb: FormBuilder,
     private authFacade: AuthFacade,
     private renderer: Renderer2,
     private router: Router
   
  ) {
     console.log(this.auth),
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

   voltarInicio(): void {
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'overflow');
  }

  onSubmit() {
    const { username, password } = this.form.value;

    this.loading = true;

    this.authFacade.login(username, password)
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
}
