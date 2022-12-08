import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interface/users';

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
}
