import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AddStudentComponent
} from '../add-student/add-student.component';
import { ConfirmDialogModule } from 'primeng/primeng';
import { NbCardModule,NbTabsetModule, NbIconModule,   
  NbUserModule, NbDatepickerModule,NbButtonModule ,NbListModule,
  NbActionsModule, NbSpinnerModule} from '@nebular/theme';
@NgModule({
  declarations: [AddStudentComponent],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    NbCardModule,NbTabsetModule, NbIconModule,   
    NbUserModule, NbDatepickerModule,NbButtonModule ,NbListModule,
    NbActionsModule, NbSpinnerModule
  ]
})
export class AddStudentModule { }
