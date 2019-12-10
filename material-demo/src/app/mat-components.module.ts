import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule,
  MatTabsModule,
  MatDialogModule,
  MatButtonModule
} from '@angular/material';



@NgModule({
  exports: [
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class MatComponentsModule { }
