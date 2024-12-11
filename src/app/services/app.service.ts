import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  httpOptions:any;
  
   
  constructor(private http:HttpClient) { }

  getContacts():Observable<any> {
     return this.http.get("http://localhost:4500/contacts")
  }

  
  getServices():Observable<any> {
    return this.http.get("http://localhost:4500/services")
 
  }
   
  getOfferings():Observable<any> {
    return this.http.get("http://localhost:4500/offerings")
 }
  
 getDetails(id:number):Observable<object>{
    
  return this.http.get("http://localhost:4500/details/"+id);
}



   postEnquiry(obj:any):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    return this.http.post("http://localhost:4500/enquiries",obj,this.httpOptions);
   }
}
