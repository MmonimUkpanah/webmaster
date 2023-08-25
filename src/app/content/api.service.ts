import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable, Subject, map } from 'rxjs';
import { BaseUrl } from 'api.env';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = "http://localhost:3000"
  
  constructor(private http: HttpClient) {
    
  }
  // getAllCustomers(): Observable<any>{
  //   return this.http.get<any>(`${this.baseUrl}/customers`).pipe(map((customer:any)=>{
  //     console.log("customers>>",customer)
  //   }))
  // }
  getAllCustomers(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/customers`)
  }
}
