import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoginUser } from '../../models/login-user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:LoginService,private router:Router) { }
  loginValue = new LoginUser();
  errors:any;

  ngOnInit() {
  }

    onSubmit(){
    this.login.login(this.loginValue).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",val['data']);
        window.localStorage.setItem('token',val['data'].token);
          window.localStorage.setItem('id',val['data'].user_id);
          window.localStorage.setItem('name',val['data'].name);
          window.localStorage.setItem('photo',val['data'].image);

          window.localStorage.setItem('lang','ar');
                 this.router.navigate(['all-projects']);

          
        },
        response => {
          console.log("POST call in error", response.error.data);
          this.errors= response.error['data']

          // let allErrors =(response.error.data);
          // for (var k in allErrors){
          //   if (typeof allErrors[k] !== 'function') {
          //   this.errors.push(allErrors[k])
          //   }
          //  }
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

}
