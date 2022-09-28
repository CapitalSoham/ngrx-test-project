import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniquePipe'
})
export class UniquePipePipe implements PipeTransform {

  transform(value: any, ..._args: any): any {
    const uniqueArray = value.filter(function (el: any, index: any, array: string | any[]) {
      console.log(el,index,array);
      
      return array.indexOf (el.company.name) === index;
    });
    return uniqueArray;
  }
  

}
