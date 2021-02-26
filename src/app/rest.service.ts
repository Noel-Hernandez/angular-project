import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { 

    
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getStudents(): Observable<any> {
    return this.http.get(endpoint + 'student/students').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getStudents'))
      );
  }

  getIssues(): Observable<any> {
    return this.http.get(endpoint + 'issue/issues').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getIssues'))
      );
  }

  getIssue(id): Observable<any> {
    return this.http.get(endpoint + 'isssue/GetIssue/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getIssueById'))
      );
  }
  getStudent(id): Observable<any> {
    return this.http.get(endpoint + 'student/GetStudent/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getStudentById'))
      );
  }
  getServices(): Observable<any> {
    return this.http.get(endpoint +'service/services').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getServices'))
      );
  }


  addStudent (student): Observable<any> {
    console.log(student);
    return this.http.post<any>(endpoint + 'student/add/', JSON.stringify(student), httpOptions).pipe(
      tap((student) => console.log('added student')),
      catchError(this.handleError<any>('addStudent'))
    );
  }

  addIssue (issue): Observable<any> {
    console.log(issue);
    return this.http.post<any>(endpoint + 'issue/adding/', JSON.stringify(issue), httpOptions).pipe(
      tap((issue) => console.log('added issue')),
      catchError(this.handleError<any>('addIssue'))
    );
  }
  
/*
  addIssueNet (issue): Observable<any> {
    console.log(issue);
    return this.http.post<any>(endpoint + 'issue/add/', JSON.stringify(issue), httpOptions).pipe(
      tap((issue) => console.log('added issue')),
      catchError(this.handleError<any>('addIssue'))
    );
  }
*/



  deleteStudent (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'student/DeleteStudent/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted student id=${id}`)),
      catchError(this.handleError<any>('deletestudents'))
    );
  }
  
  deleteIssue (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'issue/DeleteIssue/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted issue id=${id}`)),
      catchError(this.handleError<any>('deleteissues'))
    );
  }






  updateStudent (student): Observable<any> {
    return this.http.put(endpoint + 'student/PutStudent/' + student.studentId, JSON.stringify(student), httpOptions).pipe(
      tap((student) => console.log('updated student')),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  getNationalities(): Observable<any> {
    return this.http.get(endpoint + 'student/GetAllStudentsSP').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getStudents'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
