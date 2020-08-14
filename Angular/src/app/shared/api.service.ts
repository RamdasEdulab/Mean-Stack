import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Student} from './student';

const apiUrl:string = 'http://localhost:3000/student';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders | { [header: string]: string | string[]; };

  
   //apiUrl:string = 'http://localhost:3000/gallery';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  
    
    
  
GetStudent(): Observable<any> {
  const url = `${apiUrl}/get`;
  return this.http.get<Student>(url).pipe(
    catchError(this.handleError)
  );
}
  

UpdateStudent(id, data): Observable<any> {
  let url = `${apiUrl}/updatestudent/${id}`;
  return this.http.put(url, data, { headers: this.headers })
    .pipe(
      catchError(this.handleError)
      );
    
}



  
DeleteStudent(id): Observable<any> {
  var url = `${apiUrl}/deletestudent/${id}`;
  return this.http.delete(url)
    .pipe(
      catchError(this.handleError)
    )
}


  addstudent(student: Student, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', student.name);
    formData.append('email', student.email);
    formData.append('phone', student.phone);
    formData.append('address', student.address);
    const header = new HttpHeaders();
    const params = new HttpParams();

    const options = {
      params,
      reportProgress: true,
      headers: header
    };
    const req = new HttpRequest('POST', apiUrl, formData, options);
    return this.http.request(req);
  }
}
