import { Component, OnInit, Query } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  details = {
    LoginName: "",
    LoginPassword: "",
  }
  constructor() { }

  ngOnInit(): void {
  }
// ===================navigation=====================
  onClickSignup(){
    document.querySelector(".container")?.classList.add("sign-up-mode");
  };

  onClickSignin(){
    document.querySelector(".container")?.classList.remove("sign-up-mode");
  };
// ========================account details=====================
onSubmitLogin(details: NgForm){
  console.log(details.value);
}
onSubmitRegister(RegisterForms: NgForm){
  
}

}
