import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, UserObject } from '../models/user';
import { ServicesService } from '../services/services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userObject!: UserObject;
  userForm!: FormGroup;


constructor(private router: Router, private route: ActivatedRoute, private service: ServicesService){}


  SubmitUser(){
    //Validators.pattern('[a-zA-Z0-9]*#+-')
    this.userForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      account: new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
     // age: new FormControl("", [Validators.required, Validators.max(19), Validators.min(13)]),
      gender: new FormControl("")
    })
  }

  submit(){
    if(this.userForm.valid){
     this.userObject = this.userForm.value;
     this.service.createUserDetails(this.userObject).subscribe({
       next: (res: any) => {
         console.log("API response>>", res);
         this.router.navigate(['/content/dashboard'],{relativeTo: this.route});
       },
       error: (err: any) => {
         console.error("Error from API response>>", err);
       },
       complete: () => {
         console.info("Create User Implementation");
       }
     })
   //  this.service.setUserArray(this.userObject);
   //  this.service.setUerObservable(this.userObject);
   //  this.service.setUserEventValue(this.userObject);
   //    this.router.navigate(['/content/dashboard'],{relativeTo: this.route});
    }
 
   }
 
   ngOnInit(): void {
     //  this.userObject = this.service.getUserProfile();
       this.SubmitUser();
       //this.userForm.patchValue(this.service.getUserProfile());  //to auto-populate the form on edits
   }


}
