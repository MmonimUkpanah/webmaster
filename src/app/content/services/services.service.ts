import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User, UserObject } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private $user = new Subject<any>();     //Observables
  user: User[] | any = [];
  userObj!: UserObject
  constructor() { }

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
}
