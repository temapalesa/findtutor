import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbartutor',
  templateUrl: './navbartutor.component.html',
  styleUrls: ['./navbartutor.component.scss']
})
export class NavbartutorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onClick(){
    console.log('we are logging out')
    localStorage.removeItem("token");
    sessionStorage.removeItem("logginToken")
    sessionStorage.removeItem("loggedEmail")
    this.router.navigate(['/login'])
  }

}
