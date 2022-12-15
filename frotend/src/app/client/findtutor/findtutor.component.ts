import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
//import { Tutor } from '../../interface/tutor';

@Component({
  selector: 'app-findtutor',
  templateUrl: './findtutor.component.html',
  styleUrls: ['./findtutor.component.scss']
})
export class FindtutorComponent implements OnInit {

 tutor : any

  constructor(private authservcise : AuthService) { }

  ngOnInit(): void {

    this.authservcise.getAlltutorPost().subscribe((item:any)=>{
      this.tutor = item
      console.log(item);
    })
  }

}
