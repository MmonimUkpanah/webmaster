import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Customer } from '../customer';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  customers: Customer[] = []
  gender: string = '';
  p: number = 1;
  searchText: any = '';
  maleCustomers: Customer[] = []
  femaleCustomers: Customer[] = []
  constructor(private api: ApiService){}

  onGetAllCustomers(){
    this.api.getAllCustomers().subscribe({
      next: (res:any) => {
        this.customers = res;
        this.maleCustomers = this.customers.filter((customer: any) => customer.gender === "Male")
        this.femaleCustomers = this.customers.filter((customer: any) => customer.gender === "Female")
        console.log("female customers>>", this.femaleCustomers)
      },
      error: (error:any) => {
        console.error("error>>", error)
      },
      complete: () => console.info('completed')
      
    });
  }

  onChangeGender(e: any){
    this.gender = e;
    if (this.gender === "Male"){
      this.customers = this.maleCustomers
    } else if (this.gender === "Female") {
      this.customers = this.femaleCustomers
    } else {
      console.log("error")
    }
  }
  ngOnInit(): void {
    this.onGetAllCustomers();
  }
}
