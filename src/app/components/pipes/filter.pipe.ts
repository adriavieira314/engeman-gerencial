import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

   transform(value: any, searchValue: string): any {
      if (!searchValue) return value;
      return value.filter((v: any) => v.os.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || 
      v.funcionarios.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || 
      v.matricula.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
   }

}