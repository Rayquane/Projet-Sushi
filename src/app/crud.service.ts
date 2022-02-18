import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
export interface User {
  id: string;
  nom: string;
  pieces: string;
  composition: string;
  saveur:string;
  prix: string;
  images:string;
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
  getMenus(): Observable<any> {
    return this.http.get<User>(urlrest + '/menus').pipe(
      catchError(this.handleError)
    );
  }
  getMenu(id: string): Observable<any> {
    return this.http.get<User>(urlrest + '/menus' + id).pipe(
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
  





  getPaniers(): Observable<any> {
    return this.http.get<User>(urlrest + '/paniers').pipe(
      catchError(this.handleError)
    );
  }
  getPanier(id: string): Observable<any> {
    return this.http.get<User>(urlrest + '/paniers' + id).pipe(
      catchError(this.handleError)
    );
  } 
  delete(id: string): Observable<any> {
    return this.http.delete<User>(urlrest + '/paniers/' + id).pipe(
      catchError(this.handleError)
    )
  } 

  
}
