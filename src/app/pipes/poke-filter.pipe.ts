import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeFilter',
})
export class PokeFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      console.log(it.name.includes(searchText));
      return it.name.includes(searchText);
    });
  }
}
