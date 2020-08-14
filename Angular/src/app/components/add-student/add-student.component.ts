import { Router } from '@angular/router';
import { Component, OnInit,NgZone } from '@angular/core';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {NbGlobalPhysicalPosition,NbToastrService,} from '@nebular/theme';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent implements OnInit {
  CV: File;
  name = '';
  email = '';
  phone = '';
  address = '';
  isLoadingResults = false;
  studentForm: FormGroup;

  constructor(
    private toasterService:NbToastrService,
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private studentApi: ApiService
  ) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      CV : [null, Validators.required],
      name : [null, Validators.required],
      email : [null, Validators.required],
      phone : [null, Validators.required],
      address : [null, Validators.required]
      
    });
  }

  onFormSubmit(): void {
    
    this.isLoadingResults = true;
    this.studentApi.addstudent(this.studentForm.value, this.studentForm.get('CV').value._files[0]).subscribe((res: any) => {
      
        if (res.body) {
          this.ngZone.run(() => this.router.navigateByUrl('/students-list'))
        }else{
          
        }
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
  special_char(event)
  {   
      var key;  
     key = event.charCode;  
    return( (key >= 48 && key <= 57)); 
  }
  }

 