import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: [], propertyName?: string): [] {
    const sortedArray = value?.length ? value.sort((a, b) => {
      if (!propertyName) {
        return a - b
      } else {
        return a[propertyName] < b[propertyName] ? -1 : 1
      }
    }) : value;
    return sortedArray
  }
}
