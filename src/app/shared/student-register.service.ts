import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student    } from "./student-register";

@Injectable({
    providedIn:'root'
})
export class StudentRegisterService{

    baseURL: string = "http://localhost:3001/api/v1/";

    constructor(private http:HttpClient){}

    getPeople(): Observable<Student[]> {
        console.log('getPeople '+this.baseURL )
        return this.http.get<Student[]>(this.baseURL+ 'getAll' )
      }
     
    addStudent(student:Student): Observable<Student> {
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(student);
        console.log(body)
        return this.http.post<Student>(this.baseURL + 'people', body,{'headers':headers})     
      }

      deleteStudent(id: number): Observable<any> {
        return this.http.delete(`${this.baseURL}del/people/${id}` , { responseType: 'text' });
      }   
      
      getStudent(id: number): Observable<any> {
        return this.http.get(`${this.baseURL}people/${id}`);
      }
}



















//   handleError(error: { error: { message: string; }; status: any; message: any; }) {
    //     let errorMessage = '';
    //     if(error.error instanceof ErrorEvent) {
    //       // Get client-side error
    //       errorMessage = error.error.message;
    //     } else {
    //       // Get server-side error
    //       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //     }
    //     window.alert(errorMessage);
    //     return throwError(errorMessage);
    //  }

    // httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }  