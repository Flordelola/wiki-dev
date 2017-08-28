import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'cutDescription'
})
export class CutDescriptionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length > 200) {
    return value.slice(0, 200) + "...";
  }
  return value;
  }
}
