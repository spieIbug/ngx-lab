import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';
import * as _ from 'lodash';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(value: User[], search: string): User[] {
    const trimmedSearch = _.trim(search);
    if (!trimmedSearch) {
      return value;
    }

    return _.filter(value, (user: User) => {
      const predicatNom = _.includes(_.toLower(user.nom), _.toLower(trimmedSearch));
      const predicatPrenom = _.includes(_.toLower(user.prenom), _.toLower(trimmedSearch));
      return predicatNom || predicatPrenom;
    });
  }

}
