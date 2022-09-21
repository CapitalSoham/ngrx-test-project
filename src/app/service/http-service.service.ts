import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(public http:HttpClient) { 
  }
  getUser(){
    return this.http.get(environment.URI+'/users')
  }
}
