import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:"Imagefilter"})
export class Imagefilter implements PipeTransform {
  transform( items : any[],criteria: string): any {
    if(criteria==='all')
    {
       return items}
    else
    {
      return items.filter(items=>{
        return item.category===category;
      });
    }

  }

);
}
