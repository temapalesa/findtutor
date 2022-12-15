import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindtutorComponent } from './client/findtutor/findtutor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './tutor/profile/profile.component';
import { TutorpostComponent } from './tutor/tutorpost/tutorpost.component';
import { ClientpostComponent } from './client/clientpost/clientpost.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path : 'tutorprofile', component:ProfileComponent},
  {path : 'tutorpost', component:TutorpostComponent},
  {path : 'findtutor', component: FindtutorComponent},
  {path: 'clientpost', component: ClientpostComponent}
 // {path: 'findclient', component: ClientpostComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 

exports: [RouterModule]
})
export class AppRoutingModule { }
