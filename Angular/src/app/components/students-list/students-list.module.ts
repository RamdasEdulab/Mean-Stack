import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  StudentsListComponent
} from '../students-list/students-list.component';
import { ConfirmDialogModule } from 'primeng/primeng';
@NgModule({
  declarations: [StudentsListComponent],
  imports: [
    CommonModule,
    ConfirmDialogModule
  ]
})
export class StudentsListModule { }
