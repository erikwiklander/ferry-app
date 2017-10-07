import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'destination'
})
export class DestinationPipe implements PipeTransform {

  labels = {
    'luma': 'Luma',
    'henriksdal': 'Henriksdal',
    'barnangen': 'Barnängen',
    'triangel': 'Triangeltrafik'
  };

  targets = {
    'luma': 'Henriksdal',
    'henriksdal': 'Barnängen',
    'barnangen': 'Luma'
  }

  transform(to: string, from: string): string {

    if (to === 'triangel') {
      return this.labels[to] + ' (mot ' + this.targets[from] + ')';
    } else {
      return 'Mot ' + this.labels[to];
    }
  }

}
