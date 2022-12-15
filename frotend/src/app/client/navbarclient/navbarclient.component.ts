import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarclient',
  templateUrl: './navbarclient.component.html',
  styleUrls: ['./navbarclient.component.scss']
})
export class NavbarclientComponent implements OnInit {

  constructor(private router:Router) { }

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
