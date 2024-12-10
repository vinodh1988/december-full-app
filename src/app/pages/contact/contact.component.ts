import { Component } from '@angular/core';
import { City } from '../../models/city';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    contacts:City[]=[];

    constructor(private as:AppService){

    }

    ngOnInit(){
      this.as.getContacts().subscribe(
        {
          next: (data:City[])=>this.contacts=data,
          error:()=>this.contacts=[]
        }
      )
    }
}
