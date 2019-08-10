import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
 public projects:any[]
  constructor(private login:LoginService,private router:Router) { }

  ngOnInit() {
  	// get all my project
  	  this.login.getProject().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val['data']);
        this.projects = val['data']
       },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
      
  }
  delete(id)
  {
  	this.login.destroy(id).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val['data']);
         	  this.login.getProject().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val['data']);
        this.projects = val['data']
       },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
      
       },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  }

}
