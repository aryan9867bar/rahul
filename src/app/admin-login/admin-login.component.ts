import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router"

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  exportAs: 'ngModel'
})
export class AdminLoginComponent implements OnInit {
  credential:any;
  username:any;
  password:any;
  constructor(private router:Router) {

    this.credential = {
      username:"admin",
      password:"admin"
    }

   }

  ngOnInit() {
  }

  onLogin() {

    if(this.credential.username === this.username && this.credential.password === this.password) {
      this.router.navigate(["/login-success"]);
    } else {
      alert("Wrong username or password")
    }
  }
  
}
