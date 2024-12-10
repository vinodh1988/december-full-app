import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../models/service';

@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {

  transform(target: Service[], range : string): Service[] {
    if(range==="High")
     return target.filter(x=>x.hourlyprice>=45)
    if(range==="Moderate")
      return target.filter(x=>x.hourlyprice>=25 && x.hourlyprice<45)
    if(range==="Low")
      return target.filter(x=>x.hourlyprice<25)
    return target;
  }

}
