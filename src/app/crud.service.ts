import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
export interface User {
id: string;
name: string;
email: string;
phone: string;
}
const urlrest = 'http://localhost:3000';
@Injectable({
providedIn: 'root'
})
export class CrudService {
constructor(private http: HttpClient) { }
httpHeader = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
})
}
getUsers(): Observable<any> {
return this.http.get<User>(urlrest + '/users').pipe(
catchError(this.handleError)
);
}
getUser(id: string): Observable<any> {
return this.http.get<User>(urlrest + '/users' + id).pipe(
catchError(this.handleError)
);
}
private handleError(error: HttpErrorResponse): any {
if (error.error instanceof ErrorEvent) {
console.error('An error occurred:', error.error.message);
} else {
console.error(
`Backend returned code ${error.status}, ` +
`body was: ${error.error}`);
}
return throwError(() => 'Something bad happened; please try again later.');
}
delete(id: string): Observable<any> {
  return this.http.delete<User>(urlrest + '/users/' + id).pipe(
  catchError(this.handleError)
  )
  }
}
