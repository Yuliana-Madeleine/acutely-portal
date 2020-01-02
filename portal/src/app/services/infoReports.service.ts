import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class InfoReportService {

 // Base url
 baseurl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }
    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
        })
    };

    // GET
    GetTotalRevenues() {
        return this.http.get(this.baseurl + '/totalRevenue/')
        .pipe(
        retry(1),
        catchError(this.errorHandl)
        );
    }

    GetTotalBar() {
      return this.http.get(this.baseurl + '/totalBar/')
      .pipe(
      retry(1),
      catchError(this.errorHandl)
      );
    }

    GetTotalCustomers() {
      return this.http.get(this.baseurl + '/totalCustomers/')
      .pipe(
      retry(1),
      catchError(this.errorHandl)
      );
    }

    GetTotalCarryout() {
      return this.http.get(this.baseurl + '/totalCarryout/')
      .pipe(
      retry(1),
      catchError(this.errorHandl)
      );
    }

    // Error handling
    errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}

