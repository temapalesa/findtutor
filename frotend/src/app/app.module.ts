import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgToastModule } from 'ng-angular-popup';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { TutorpostComponent } from './tutor/tutorpost/tutorpost.component';
import { ProfileComponent } from './tutor/profile/profile.component';
import { FindtutorComponent } from './client/findtutor/findtutor.component';
import { ClientpostComponent } from './client/clientpost/clientpost.component';
import { NavbartutorComponent } from './tutor/navbartutor/navbartutor.component';
import { NavbarclientComponent } from './client/navbarclient/navbarclient.component';
import { FindclientComponent } from './tutor/findclient/findclient.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    NavbarComponent,
    TutorpostComponent,
    ProfileComponent,
    FindtutorComponent,
    ClientpostComponent,
    NavbartutorComponent,
    NavbarclientComponent,
    FindclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgToastModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
