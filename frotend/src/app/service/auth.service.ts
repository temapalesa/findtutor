import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interface/users';
//import { Tutor } from '../interface/Tutor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  users : Users[] = []

  constructor(private http : HttpClient) { }


  register(users: Users){

    return this.http.post<Users>(this.baseUrl+ '/users',users)

  }

  login(loginDetails : any ){
    return this.http.post(this.baseUrl + '/login', loginDetails)
  }

  tutorpost(tutor: any){
    return this.http.post(this.baseUrl+'/tutorpost',tutor)
  }

  getAlltutorPost(){
    return this.http.get(this.baseUrl+'/tutorposts')
  }

  clientpost(client : any){
    return this.http.post(this.baseUrl+'/clientpost',client)
  }

  isLoggedin(){
    return  localStorage.getItem('logginToken')
  }

}
