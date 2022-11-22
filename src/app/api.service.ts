import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  sa: any;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<[]> {
    return this.http.get<[]>(`https://jsonplaceholder.typicode.com/users`)


  }
  creatUser(user: any): Observable<[]> {
    return this.http.post<[]>(`https://jsonplaceholder.typicode.com/users`, user)


  }





}
//   message: any;
//   constructor(private http: HttpClient) { }


//   getDataApi() {
//     this.http.get('http://localhost:1220/post').subscribe(res => {

//       console.log(res);
//       this.message = res

//     })
//   }
//   RegisterUser(registerObj) {
//     this.http.get('http://localhost:1220/register', registerObj).subscribe(res => {

//     })
//   }
// }


