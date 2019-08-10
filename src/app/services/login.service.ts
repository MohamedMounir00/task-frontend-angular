import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../models/login-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public lang:string
  private url:string
  constructor(private http:HttpClient) {

      if (!localStorage.getItem('lang')) {
      // code...
      this.lang='ar'
    }
    else{
      this.lang=localStorage.getItem('lang')
    }

this.url="http://127.0.0.1:8000/api/"
   }
     login(user:LoginUser)
  {
    return this.http.post<any>(this.url+'login',user);
  }


  createProject(data: FormData,params: {}){

    let httpHeaders = new HttpHeaders({
      'enctype' : 'multipart/form-data',
      'Cache-Control': 'no-cache',
      'Allow-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers' : 'X-Requested-With,content-type',
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders, params: params
    };
    
    return this.http.post<any>(this.url+'save-project',data,options);

  }
  getProject(){

    let httpHeaders = new HttpHeaders({
      'enctype' : 'multipart/form-data',
      'Cache-Control': 'no-cache',
      'Allow-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers' : 'X-Requested-With,content-type',
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.get<any>(this.url+'get-projects',options);

  }

    destroy(id){

    let httpHeaders = new HttpHeaders({
      'enctype' : 'multipart/form-data',
      'Cache-Control': 'no-cache',
      'Allow-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers' : 'X-Requested-With,content-type',
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    }
    return this.http.post<any>(this.url+'destroy',{id:id},options);

  }
}
