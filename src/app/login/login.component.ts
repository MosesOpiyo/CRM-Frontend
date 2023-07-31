import { Component,OnInit } from '@angular/core';
import { AccountService } from '../AccountService/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public service:AccountService){}

  email: any;
  password: any;
  profile:any;
  

  loginUser(){
    let form = new FormData();
    form.append('username',this.email),
    form.append('password',this.password),
    this.service.login(form)
  }
  
  ngOnInit(): void {
    
  }

}
