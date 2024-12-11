import { Component } from '@angular/core';
import {CommonService} from '../../services/common.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  message:Observable<string>;    
  constructor(private cs:CommonService){
          
            this.message=this.cs.emitAds();

          /*  this.message.subscribe({
              next: x=> console.log(x),
              error: ()=> console.log()
            })*/
      }


}
