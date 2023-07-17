
import { Component } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginServiceService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  


  constructor(private loginservice:LoginServiceService){


firebase.initializeApp({

  apiKey: " ",   //tu apiKey de Firebase

  authDomain: " ",  //tu authDomain de Firebase



})







  }


estalogueado(){

  return this.loginservice.estalogueado()
}

logout(){
  return this.loginservice.logout()
}

}
