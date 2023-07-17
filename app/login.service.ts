import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class LoginServiceService {

  constructor(private router:Router, private cookies:CookieService) { }

  token:string;

  login(email:string, password:string){

    firebase.auth().signInWithEmailAndPassword(email, password).then(

response=>{

  firebase.auth().currentUser?.getIdToken().then(

token=>{

  this.token=token;

this.cookies.set("token", this.token);

console.log(this.cookies.get("token"))


  this.router.navigate(['/'])
  
}
  )
}

    )

  }

getidToken(){
  return this.cookies.get("token");
}

estalogueado(){



return this.cookies.get("token");

}

logout(){

  firebase.auth().signOut().then(()=>{

    this.token="";

    this.cookies.set("token",this.token);


    this.router.navigate(['/']);

    window.location.reload();

  })
}


}

