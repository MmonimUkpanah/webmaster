import { Injectable, EventEmitter } from '@angular/core';
import { User, UserObject } from '../models/user';
// Observables
import { Observable, Subject, map } from 'rxjs';
//REST API
import { BaseUrl } from 'api.env';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private $user = new Subject<any>();     //Observables
  user: User[] | any = [];
  userObj!: UserObject;

  public emitUser$: EventEmitter<any> = new EventEmitter();


  constructor(private http: HttpClient) { }

  //Event Emitters

  public setUserEventValue(user: UserObject){
    this.emitUser$.emit(user);
  }


  //Observables
  public setUserObservable(user: UserObject){
    this.user.push(user);
    console.log("user observable>>", this.user);
    this.$user.next(this.user);
  }

  public getUserObservable(): Observable<any>{
    return this.$user.asObservable();
  }



  // Angular Js services
  public setUserArray(user: UserObject){
   this.user.push(user);
  }

  public getUserArray(){
    return this.user;
  }

  public setUserProfile(item: UserObject){
    this.userObj = item;
  }

  public getUserProfile(){
    return this.userObj;
  }



  //REST API INTEGRATION

  public createUserDetails(item: UserObject): Observable<any>{      //POST Request
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'method': 'POST'
    })
    const body = JSON.stringify(item);
    const createUserUrl = `${BaseUrl}`;
   return this.http.post<any>(createUserUrl, body, {headers})
  }


  public getUserDetails(): Observable<any>{        //GET Request
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'method': 'GET'
    })
    const fetchUserUrl = `${BaseUrl}`;
    return this.http.get<any>(fetchUserUrl, {headers}).pipe(map((res: any) => {
      // console.log("response from fetchUrl>>", res);
      return res;
    }))
  }

  public editUserDetails(item: UserObject):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'method': 'PUT'
    })
    const editUserUrl = `${BaseUrl}/${String(item.id)}`;
    const body = JSON.stringify(item);
    return this.http.put<any>(editUserUrl, body, {headers});
  }

  public  getUserByID(id: any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'method': 'GET'
    })
    const fetchUserByIDUrl = `${BaseUrl}/${id}`;
    return this.http.get<any>(fetchUserByIDUrl,{headers});
  }

  public deleteUser(id: any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'method': 'DELETE'
    })
    const deleteUserByIDUrl = `${BaseUrl}/${id}`;
    return this.http.delete<any>(deleteUserByIDUrl, {headers});

  }

}
