import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  info:string=""
      constructor(route:ActivatedRoute){
        console.log(route.snapshot.data["data"])
        this.info = route.snapshot.data["data"]
      }
}
