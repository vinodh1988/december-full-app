import { Component } from '@angular/core';
import {ActivatedRoute,} from '@angular/router'
import { AppService } from '../../../services/app.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  id:any;
record:any;
 
  constructor(private route:ActivatedRoute,private cs:AppService) {
      route.params.subscribe(params=>
           this.id=params['id']);
           this.cs.getDetails(this.id).subscribe( {
                next: (data)=>this.record = data,
                error: ()=>this.record={}
             }
           )
       }


  ngOnInit(): void {
  }

}
