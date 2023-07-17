import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private loginservice:LoginServiceService){

  }


  login(form:NgForm){

  const email=form.value.email

  const password=form.value.password

  this.loginservice.login(email,password)

  const token = this.loginservice.getidToken();
    console.log('Token:', token);
  }

}
