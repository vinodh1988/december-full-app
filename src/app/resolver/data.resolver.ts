import { ResolveFn } from '@angular/router';

import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CommonService } from '../services/common.service';
//import {MyData} from '../models/mydata'
// Import your data service

@Injectable({
  providedIn: 'root'
})
export class MyResolver implements Resolve<any> {

 constructor(private cs:CommonService){

 }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    return  this.cs.emitAds(); // Replace with your data fetching logic
  }
}
