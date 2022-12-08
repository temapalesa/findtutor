import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  submitted = false
  myForm! : FormGroup;

  constructor(private authservice :AuthService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name : new FormControl('', [Validators.required]),
      surname : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
      accounttype :new FormControl('', [Validators.required]),
      phonenumber : new FormControl('', [Validators.required]),
    })
  }


  onSubmit(form : FormGroup){
    this.submitted = true;
   
    let logingDetails = {
      firstname: this.myForm.value.firstname,
      lastname: this.myForm.value.lastname,
      email: this.myForm.value.email,
      password: this.myForm.value.password

    }
    console.log(form.value)
      this.authservice.register(form.value).subscribe((item:any)=>{
      console.log("This item has been added successfully : ",item);
      
    })
    
  }

}
