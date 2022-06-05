import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllserviceService } from '../allservice.service';
import { Register } from '../model/register';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!:FormGroup;
  user= new Register();
  // allService: any;
  constructor(private formBuilder:FormBuilder,private router:Router,private allService:AllserviceService) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      emailId:[''],
      password:[''],
      phoneNo:[''],
      userImage:['']
    
    })
  }
  
  onRegister(){
    this.user.firstName=this.registerForm.value.firstName;
    this.user.lastName=this.registerForm.value.lastName;
    this.user.emailId=this.registerForm.value.emailId;
    this.user.password=this.registerForm.value.password;
    this.user.phoneNo=this.registerForm.value.phoneNo;
    this.user.userImage=this.registerForm.value.userImage;

    this.allService.saveUser(this.user).subscribe(res=>{
      console.log(res);
      console.log(this.user)
      alert("registration done")
      this.registerForm.reset();
      this.router.navigate(['login']);
    })

  }
  

//   register:Register= new Register();

//  userRegister(){
//   console.log(this.register)
//   this.allService.userRegister(this.register).subscribe(data=>{
//     alert("user data added successfully")
//     this.router.navigate(["/userLogin"])
//   },error=>alert("Sorry not able to register jobSeeker Details."));
// }

uploadImage:any;

onUploadImage(event: any)
{
  console.log("onchange");
  const files = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]); 
  reader.onload = (_event) =>
  { 
    console.log(reader.result);
    this.uploadImage = reader.result; 
    console.log(this.uploadImage);
  }
}

  

}
