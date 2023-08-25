import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../backendService/service.service';
import { Paginate, PaginateResponse } from '../api/paginate';



@Component({
  selector: 'app-backend-pagination',
  templateUrl: './backend-pagination.component.html',
  styleUrls: ['./backend-pagination.component.scss'],
  
})
export class BackendPaginationComponent implements OnInit {
  paginate: Paginate[]| any = [];
  limit: number = 0;
  checkedbox: boolean = false;
  newArray: any [] = []
  response: PaginateResponse = {
    success: true,
    time: '',
    message: '',
    total_users: 1000,
    offset: 0,
    limit: 10,
    pageSize: 1,
    users: []
  }
  selected: string = ''
  data:Array<any> = []
  entriesToBeDeleted: Array<any> = []

  constructor( private service: ServiceService ){}

  fetchPagination(){
    this.service.fetchApiData(this.response.offset, this.response.limit).subscribe({
      next: (res: any) => {
        console.log("response from API>>", res.users);
        this.newArray = res.users;
        this.paginate = res?.users && this.newArray.filter(obj => !this.data.includes(obj.id));
        this.response.limit = res?.limit;
        this.response.offset = res?.offset;
      },
      error: (err: any) => {
        console.error("API error>>", err);
      },
      complete: () => console.info("Pagination Implementation!")
    })
  }

  fetchNext() {
    this.response.offset++;
    this.fetchPagination();
  }

  fetchPrevious() {
    if(this.response.offset > 0){
      this.response.offset--
      this.fetchPagination();
    }
  }
  viewSelected(){
    console.log("limit selected>>", Number(this.limit));
    this.response.limit = Number(this.limit);   //parseInt(this.limit) is an alternative
    this.fetchPagination();
  }
  deleteOne(item: any) {
    this.entriesToBeDeleted.push(item);
    console.log("Entries to be deleted>>", this.entriesToBeDeleted);
    this.data = this.entriesToBeDeleted.map((obj) => obj.id);
    this.tempDelete();
  }
  selectValue(item: any, $event: any) {
    // console.log(item);
    if ($event.target.checked === true) {
      this.checkedbox = true;
      this.entriesToBeDeleted.push(item);
      console.log("Entries to be deleted>>", this.entriesToBeDeleted);
      this.data = this.entriesToBeDeleted.map((obj) => obj.id);
      console.log("ID of tempDelete items>>", this.data);
    } else if($event.target.checked === false) {
      this.checkedbox = false;
      console.log("item of unchecked item>>", item);
      this.entriesToBeDeleted = this.entriesToBeDeleted.filter((elem: any) => elem.id !== item.id)
      this.data = this.entriesToBeDeleted.map((obj) => obj.id);
      console.log("this.data>>", this.data);
      // this.entriesToBeDeleted.splice(-1, 1);
      // console.log("Entries to be deleted>>", this.entriesToBeDeleted);
      // this.data = this.entriesToBeDeleted.map((obj) => obj.id);
      // console.log(this.data);
    }
  }

  tempDelete() {
    this.checkedbox = false;
    // console.log("entries to be deleted>>",this.entriesToBeDeleted)
    console.log('New Array from tempDelete method>>', this.newArray);
    this.paginate = this.newArray.filter(obj => !this.data.includes(obj.id));
    
    console.log("filtered Array>>",this.paginate);      
    }

  ngOnInit(): void {
    this.fetchPagination()
  }
}
