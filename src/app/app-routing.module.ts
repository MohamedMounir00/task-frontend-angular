import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AllUsersComponent } from './components/all-projects/all-users.component';
import { AddUserComponent } from './components/add-project/add-user.component';
import { EditUserComponent } from './components/edit-project/edit-user.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'all-projects' , component: AllUsersComponent},
  {path: 'add-project' , component: AddUserComponent},
  {path: 'edit-project' , component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
