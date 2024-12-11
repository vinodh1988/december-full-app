import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.css'
})
export class ServiceItemComponent {
  @Input() service:any;
smallview:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  handleDefault(){
    this.smallview = !this.smallview;
  }
}
