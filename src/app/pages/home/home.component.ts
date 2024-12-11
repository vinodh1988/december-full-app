import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service'
import { Observable } from 'rxjs';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  message:Observable<string>; 
  offerings:any;   
  //sample:string=""
  constructor(private cs:CommonService,private as:AppService){
          
            this.message=this.cs.emitAds();

           /* this.message.subscribe({
              next: x=> this.sample=x,
              error: ()=> this.sample=""
            })*/
           
      }

      ngOnInit(): void {
          this.as.getOfferings().subscribe({
             next: (data:any)=>this.offerings=data,
             error: ()=>this.offerings=[]
          })
      }
   
}
