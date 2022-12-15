import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import Validations from './validations';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  submitted = false
  myForm! : FormGroup;

  constructor(private authservice :AuthService, private router : Router, private toastservice :NgToastService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name : new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern("^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$")       ]   ),
      surname : new FormControl('', [Validators.required , Validators.minLength(3),Validators.pattern("^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$")]),
      email : new FormControl('', [Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password : new FormControl('', [Validators.required,  Validators.minLength(6),
        Validators.maxLength(40),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')
  ]),
 
      accounttype :new FormControl('', [Validators.required]),
      phonenumber : new FormControl('', [Validators.required]),
      concpasswordfirm: new FormControl(['', Validators.required]),
    }
    ,
    {
      validators: [Validations.match('password', 'confirmPassword')]
    }
  )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  onSubmit(form : FormGroup){
    this.submitted = true;
   
    let useDetails = {
      firstname: this.myForm.value.firstname,
      lastname: this.myForm.value.lastname,
      email: this.myForm.value.email,
      password: this.myForm.value.password,
      concpasswordfirm: this.myForm.value.concpasswordfirm

    }
    console.log(form.value)
      this.authservice.register(form.value).subscribe((item:any)=>{
        
      console.log("This item has been added successfully : ",item);
      this.router.navigate(['/login'])
      this.toastservice.success({detail:'Success', summary:'Successfully Registered!', sticky:false,position:'tr', duration:6000})
    },(err)=>{
      this.toastservice.warning({detail:'Warning', summary:'Email already exist', sticky:false,position:'tr', duration:6000})
    })
    
  }

}
