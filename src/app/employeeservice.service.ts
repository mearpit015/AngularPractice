import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {iemployee} from './employeeModel'

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

   private _url :string = "/assets/data.json"
  constructor(private http: HttpClient) { }
  getEmployeeData():Observable<iemployee[]>{
  //   return [{"id":"1","name":"Raj"},
  //   {"id":"2","name":"Rahul"}, 
  //   {"id":"3","name":"Rakesh"},
  //   {"id":"4","name":"Ram"},
  //   {"id":"5","name":"Rahul"}
  //  ];
  return this.http.get<iemployee[]>(this._url).pipe(
    retry(1),
  catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {

    let errorMessage = '';
 
    if (error.error instanceof ErrorEvent) {
 
      // client-side error
 
      errorMessage = `Error: ${error.error.message}`;
 
    } else {
 
      // server-side error
 
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
 
    }
 
    window.alert(errorMessage);
 
    return throwError(errorMessage);
 
  }
}
