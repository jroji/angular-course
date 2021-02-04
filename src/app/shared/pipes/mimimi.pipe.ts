import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mimimi'
})
export class MimimiPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const st = value.replace( /[aeiou]/gi, 'i');
    return st;
  }

}
