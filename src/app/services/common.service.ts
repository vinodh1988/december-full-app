import { Injectable } from '@angular/core';
import { Observable,interval,map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  adwords:string[]= [
    "Completed 100 projects ",
    "We are into Data Engineering",
    "Shortly We are going to venture into AI Services",
    "Storage services is cheaper Now",
    "We help you host your containers"
  ]
  constructor() { }

  emitAds():Observable<string> {
    return interval(3000).pipe
    ( map(() => 
      { 
        const randomIndex = Math.floor(Math.random() * this.adwords.length);
         return this.adwords[randomIndex]; 
      }) );
  }
}
