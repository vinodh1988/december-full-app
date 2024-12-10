import { Component,Input } from '@angular/core';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
 @Input() service:Service = {category:"",description:"",hourlyprice:0,servicename:""}
 @Input() cat:string=""
 
}
