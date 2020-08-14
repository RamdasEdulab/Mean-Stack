import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";



@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})

export class EditStudentComponent implements OnInit {
  studentForm: FormGroup;
  CV: File = null;
  name = '';
  email = '';
  phone = '';
  address = '';
  isLoadingResults = false;
  
  
 

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private studentApi: ApiService
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.studentApi.GetStudent().subscribe(data => {
      this.studentForm = this.fb.group({
        name: [data.name, [Validators.required]],
        email: [data.email, [Validators.required]],
        phone: [data.phone, [Validators.required]],
        address: [data.address, [Validators.required]],
        CV: [data.CV, [Validators.required]],
        
        
      })      
    })    
  }

  ngOnInit() {
    this.updateBookForm();
  }

  updateBookForm() {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      CV: ['', [Validators.required]],
     
    })
  }

  
  updateStudentForm() {
    console.log(this.studentForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.studentApi.UpdateStudent(id, this.studentForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/students-list'))
      });
    }
  }
  special_char(event)
  {   
      var key;  
     key = event.charCode;  
    return( (key >= 48 && key <= 57)); 
  }

}
