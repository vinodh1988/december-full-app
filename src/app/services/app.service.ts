import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getContacts():Observable<any> {
     return this.http.get("http://localhost:4500/contacts")
  }

  
  getServices():Observable<any> {
    return this.http.get("http://localhost:4500/services")
 }
}
