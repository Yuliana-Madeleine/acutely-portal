import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Revenue } from '../shared/revenue';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class TotalRevenueService {

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
    GetRevenues(): Observable<Revenue> {
        return this.http.get<Revenue>(this.baseurl + '/data/')
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

