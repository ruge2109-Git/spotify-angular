import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'ordelist'
})
export class OrdelistPipe implements PipeTransform {

  transform(value: any[], args: string | null = null, sort: string = 'asc'): TrackModel[] {
    try {
      if (args == null) return value;

      const tmpList = value.sort((a, b) => {
        if (a[args] < b[args]) return -1;
        else if (a[args] == b[args]) return 0;
        else if (a[args] > b[args]) return 1;
        return 1;
      })
      return (sort == 'asc') ? tmpList : tmpList.reverse();

    } catch (error) {
      console.log('Error al parsear los datos');
      console.log(error);
      return value;
    }
  }

}
