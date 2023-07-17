import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginServiceService } from "../login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class guardian implements CanActivate{


    constructor(private loginservice:LoginServiceService, private router:Router){

    }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

if(this.loginservice.estalogueado()){
    return true;
}

else{
    this.router.navigate(['login'])
    return false;
}
}


}