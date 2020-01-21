import { UsersService } from './users.service';
import { async, TestBed } from '@angular/core/testing';
import { UsersResource } from './users.resource';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { User } from './user.model';

describe('UsersService', () => {
  let usersService: UsersService;
  let usersResource: UsersResource;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        UsersService,
        UsersResource,
      ]
    });
  });

  beforeEach(() => {
    usersService = TestBed.get(UsersService);
    usersResource = TestBed.get(UsersResource);
  });

  describe('save', () => {

    it('should call resource.add for a user without id', done => {
      const testUser = {nom: 'SNOW', prenom: 'John', job: 'night watch guard'};

      spyOn(usersResource, 'add').and.returnValue(of([
        new User({...testUser, id: 'JS0001'}),
      ]));

      const user = new User(testUser);
      usersService.save(user).subscribe(users => {
        expect(users).toEqual([
          new User({...testUser, id: 'JS0001'}),
        ]);
        done();
      });

      expect(usersResource.add).toHaveBeenCalledWith(user);
    });

    it('should call resource.update for a user with id', done => {
      const user = new User({nom: 'SNOW', prenom: 'John', job: 'King of the North', id: 'JS0001'});

      spyOn(usersResource, 'update').and.returnValue(of([ user ] ));

      usersService.save(user).subscribe(users => {
        expect(users).toEqual([ user ]);
        done();
      });

      expect(usersResource.update).toHaveBeenCalledWith(user);
    });

  });
});
