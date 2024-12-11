import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  logmessage:string="Login"
    constructor(private router:Router){
       if(localStorage.getItem("status"))
          this.logmessage="Logout"
    }

    changeRoute(path:string){
      this.router.navigate([path])
    }
   
    log(){
        if(this.logmessage=="Login"){
          localStorage.setItem("status","Login")
          this.logmessage="Logout"
        }
        else {
          localStorage.removeItem("status");
          this.logmessage="Login" 
        }
    }
}
