import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
    constructor(private router:Router){

    }

    changeRoute(path:string){
      this.router.navigate([path])
    }

}
