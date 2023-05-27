import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cur'
})
export class CurPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const[price]=args
    return value*price
  }

}

@Pipe({
  name: 'joinname'
})
export class JoinnamePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
  
    return value +" " +args.join(" ");
  }

}
