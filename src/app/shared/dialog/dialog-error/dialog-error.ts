import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-error',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule],
  templateUrl: './dialog-error.html',
  styleUrl: './dialog-error.scss',
})
export class DialogError {
  dialogRef = inject(MatDialogRef<DialogError>);

  closeDialog() {
    this.dialogRef.close()
  }
}
