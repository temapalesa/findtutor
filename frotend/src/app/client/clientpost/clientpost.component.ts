import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-clientpost',
  templateUrl: './clientpost.component.html',
  styleUrls: ['./clientpost.component.scss']
})
export class ClientpostComponent implements OnInit {

  myform! :FormGroup;
  submitted = false
  constructor(private authservice : AuthService, private toastservice :NgToastService) { }

  ngOnInit(): void {

    this.myform = new FormGroup({
      subjects : new FormControl('', [Validators.required]),
      location : new FormControl('', [Validators.required]),
      preferredtimes : new FormControl('', [Validators.required]),
      days : new FormControl('', [Validators.required]),
      
      
    })
  }


  onSubmit(form : FormGroup){
      this.submitted = true;
      let postdetails ={
        subjects: this.myform.value.subjects,
      location: this.myform.value.location,
      preferredtimes: this.myform.value.preferredtimes,
      days: this.myform.value.days,
      }

      return this.authservice.clientpost(form.value).subscribe((item:any)=>{


        this.toastservice.success({detail:'Success', summary:'Post added!', sticky:false,position:'tr', duration:6000})

      },(results)=>{
        this.toastservice.success({detail:'Warning', summary:'Post added', sticky:false,position:'tr', duration:6000})
      })
    }
}
