import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'shorten' })
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number = 20) {
    return `${(value as string).substring(0, limit)}${value.length > limit ? '...' : ''}`
  }
}