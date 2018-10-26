import { Pipe, PipeTransform } from '@angular/core';


// In your HTML file use the Angular pipe "{capitalize}" to make the first letter 
// of a word capitalized (i.e.- used in the main nav).

@Pipe({name: 'capitalize'})

export class CapitalizePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) {
      return value;
    }

    return value.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
