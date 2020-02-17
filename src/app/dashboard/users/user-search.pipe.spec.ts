import { UserSearchPipe } from './user-search.pipe';
import { User } from './user.model';

describe('UserSearchPipe', () => {
  const pipe = new UserSearchPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return allUsers if search is Falsy', () => {
    const nullSearch = null;
    const undefinedSearch = undefined;
    const emptySearch = '';
    const spaceSearch = '       ';

    const users = [ new User({nom: 'test'}) ];
    expect(pipe.transform(users, nullSearch)).toEqual(users);
    expect(pipe.transform(users, undefinedSearch)).toEqual(users);
    expect(pipe.transform(users, emptySearch)).toEqual(users);
    expect(pipe.transform(users, spaceSearch)).toEqual(users);
  });

  it('should return empty list if no user correponds the search', () => {
    const search = 'noOne';
    const users = [ new User({nom: 'test', prenom: 'one'}) ];
    expect(pipe.transform(users, search)).toEqual([]);
  });

});
