import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class UtilityService{
    constructor(private router : Router){

    }
    clickToRoute(route){
        this.router.navigate([route])
      }
}