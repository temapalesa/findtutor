import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../service/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm : FormGroup = new FormGroup({
    email: new FormControl(''),
    password : new FormControl('')
  });

  decoded : any

  isSubmitted = false;
 

  constructor(private authservice : AuthService, private router : Router,
  private toastservice : NgToastService, private formbuilder : FormBuilder) { 
    this.myForm();
  }

  ngOnInit(): void {
    
  }

  myForm (){
    this.userForm= this.formbuilder.group({
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    })
  }
  get formValidation(): { [key: string]: AbstractControl } {
    return this.userForm.controls;

  }
  login(){
    this.isSubmitted = true;
    let loginDetails = {
      email:this.userForm.value.email,
      password: this.userForm.value.password
    }
    console.log(loginDetails)
    if(loginDetails.email != '' && loginDetails.password != ''){
      this.authservice.login(loginDetails).subscribe((data : any )=>{

         this.decoded = jwt_decode(data.token)
          console.log(this.decoded)
         this.toastservice.success({detail:'Success', summary:'Successfully login!', sticky:false,position:'tr', duration:6000})
         this.router.navigate(['/profile'])
        sessionStorage.setItem('logginToken', data.token)
        localStorage.setItem("token",data.token)
       sessionStorage.setItem('loggedEmail', this.decoded.email);
         this.isSubmitted = false ;
      },(error) =>{

        this.toastservice.warning({detail:'Warning',summary:'Email or Password is invalid', sticky:false,position:'tr', duration:600000})
      
        })
        
    }else{
      this.toastservice.warning({detail:'Warning',summary:'Enter your credentials details', sticky:false,position:'tr', duration:6000})
    }
  }

  
}
