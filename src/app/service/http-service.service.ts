import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(public http:HttpClient) { 
  }
  getUser(data:any){
    return this.http.post(environment.URI+'/user/get-user',data)
  }
  getCompanyList(){
    return this.http.get(environment.URI+'/user/company-list')
  }
  search(data:any){
    return this.http.post(environment.URI+'/user/search',data)
  }
}
