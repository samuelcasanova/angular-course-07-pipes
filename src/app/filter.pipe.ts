import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propertyName: string): any[] {
    if (filterString?.length < 3) {
      return value
    }
    return value.filter(e => (e[propertyName] as string).includes(filterString))
  }
}
