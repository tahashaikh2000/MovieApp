import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllserviceService } from '../allservice.service';
import { Register } from '../model/register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new Register();
  LoginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private api:AllserviceService) { }

  ngOnInit(): void {
    this.LoginForm=this.formBuilder.group({
      emailId:[''],
      password:['']
    })
  }

  onLogin(){
    this.user.emailId=this.LoginForm.value.emailId;
    this.user.password=this.LoginForm.value.password;

    this.api.loginUser(this.user).subscribe(res=>{
      console.log(res);
      console.log(this.user);
      this.api.loginStatus=true;
      this.api.loginUrl='movie';
      this.api.loginEmail=this.LoginForm.value.emailId;
      console.log(this.LoginForm.value.emailId);
      console.log("loginEmail");
      console.log(this.api.loginEmail);
      alert("login successfull");
      this.LoginForm.reset();
      this.router.navigate(['movie']);
    })


  }

}

