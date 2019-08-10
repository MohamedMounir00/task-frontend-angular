import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AllUsersComponent } from './components/all-projects/all-users.component';
import { AddUserComponent } from './components/add-project/add-user.component';
import { EditUserComponent } from './components/edit-project/edit-user.component';
import { HttpClientModule ,HttpClient } from '@angular/common/http';

import { FormsModule }   from '@angular/forms';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllUsersComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
