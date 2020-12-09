import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], searchtext:any): unknown {
    if (!searchtext) return list;
      searchtext = searchtext.toLowerCase();
      let filtereditem = list.filter(it=>it.username.toLowerCase().includes(searchtext));
      return filtereditem;
  }
}
