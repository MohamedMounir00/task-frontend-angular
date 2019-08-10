import { Component, OnInit } from '@angular/core';
import { NewProject } from '../../models/project-save';
import { LoginService } from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  constructor(private login:LoginService,private router:Router) { }
	formData = new FormData();
    projectValue = new NewProject();
    public selectedFile:any[];

  ngOnInit() {
  }
appendFileDetails (key, e:any) {
		console.log (e);

		console.log (key);
		this.selectedFile = e.target.files;
		  for (const file of this.selectedFile) {
		this.formData.append(key, file, file.name);
  }
		console.log (this.formData.get(key));



	}
 
    onSubmit(){
    	     	this.formData= new FormData()

    	console.log(this.formData,this.projectValue);
    this.login.createProject(this.formData,this.projectValue).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",val['data']);
       alert(val['data'].message)
                 this.router.navigate(['all-projects']);

          
        },
        response => {
          console.log("POST call in error", response.error['data']);
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
