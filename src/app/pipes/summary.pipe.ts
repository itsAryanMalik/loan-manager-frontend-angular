import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!value) return null;
    limit = limit ? limit : 45;

    if (value.length > limit) return value.substring(0, limit) + '...';

    return value;
  }
}
/** add to ngModule providers array */
