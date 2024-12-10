import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catformat'
})
export class CatformatPipe implements PipeTransform {

  transform(target: string, category:string,currentCategory:string): string {
    //console.log(target,category,currentCategory)
    if(category===currentCategory)
      return '"'+target+'"'
    return target;
  }

}
