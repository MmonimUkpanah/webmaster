import { Component, OnInit} from '@angular/core';
import { UserObject } from '../models/user';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: UserObject = {
    name: "",
    account: "",
    gender: ""
  }
  constructor(private service: ServicesService, private router: Router){}

  ngOnInit(): void {
    this.user = this.service.getUserProfile();
  }

  routeBack(){
    this.router.navigate(["/content/dashboard"]);
  }

}
