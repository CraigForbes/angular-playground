import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../enums/country.enum';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  transform(data: string[]): string[] {
    console.log(data);
    return data;
  }

}
