import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'shorten' })
export class ShortenPipe implements PipeTransform {
  transform(value: any) {
    return `${(value as string).substring(0, 20)}${value.length > 20 ? '...' : ''}`
  }
}