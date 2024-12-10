import { Component } from '@angular/core';
import { Service } from '../../models/service';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
 services:Service[]=[]
 categories: string[] = ['Cloud', 'Hardware', 'Web', 'Mobile App', 'Digital Marketing', 'Database'];
 current:string=""


 constructor(private as:AppService){

 }

 ngOnInit() {
  this.as.getServices().subscribe({
    next: (data:Service[])=>this.services=data,
    error: (error)=>this.services=[]
  })
 }

 handleClick(category:string){
   this.current=category
 }
}
