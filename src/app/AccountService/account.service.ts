import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AuthService } from '../Auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient,private authService:AuthService,private route:Router) { }
  login(credentials:any){
    this.http.post(`${environment.BASE_URL}Authentication/Login`,credentials).subscribe((response:any)=>{
      sessionStorage.setItem('token', response['token'])
      this.authService.authentication(true)
      this.route.navigate(['Sale'])
    })
  }
  getProfile(){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.get(`${environment.BASE_URL}Authentication/Profile`,{'headers':headers})
  }
}
