import { Component ,Input} from '@angular/core';
import { City } from '../../../models/city';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})
export class ContactItemComponent {
 @Input() city:City={  address: "",
    city: "",
    pincode: "",
    mobile: "",
    imagename: "",}
}
