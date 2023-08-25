import { Injectable } from '@angular/core';
import { Observable, Subject, map  } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { paginateURL } from 'api.env';
import  { PaginateResponse} from "../api/paginate"

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  public fetchApiData(offset: number, limit: number):Observable<PaginateResponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'method': 'GET'
    })
    let fetchUrl = `${paginateURL}/v1/sample-data/users`;
    //HttpParams
    const params = new HttpParams().set('offset', offset.toString()).set('limit', limit.toString());
    return this.http.get<PaginateResponse>(fetchUrl, {headers, params})?.pipe(map((res:any) => {
      //console.log('response from API>>', res);
      return res;
    }))
  }
}
