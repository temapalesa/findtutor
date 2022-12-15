import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-tutorpost',
  templateUrl: './tutorpost.component.html',
  styleUrls: ['./tutorpost.component.scss']
})
export class TutorpostComponent implements OnInit {

  submitted = false
  myform! : FormGroup;

  constructor(private authservice :AuthService) { }

  ngOnInit(): void {
    this.myform = new FormGroup({
      subjects : new FormControl('', [Validators.required]),
      location : new FormControl('', [Validators.required]),
      experience : new FormControl('', [Validators.required]),
      price : new FormControl('', [Validators.required]),
      video :new FormControl('', [Validators.required]),
      
    })
  }


  onSubmit(form : FormGroup){
    this.submitted = true;
   
    let postDetails = {
      subjects: this.myform.value.subjects,
      location: this.myform.value.location,
      experience: this.myform.value.experience,
      price: this.myform.value.price,
      video : this.myform.value.video

    }
    console.log(form.value)
      this.authservice.tutorpost(form.value).subscribe((item:any)=>{
        
      console.log("This item has been added successfully : ",item);
      
    })
    
  }
}
