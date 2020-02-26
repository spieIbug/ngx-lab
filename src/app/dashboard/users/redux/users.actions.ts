import { User } from '../user.model';

export namespace Users {

  export class Save {
    static readonly type = '[USERS] Save user';

    constructor(public user: User) {
    }
  }

  export class Load {
    static readonly type = '[USERS] Load users';
  }

  export class Remove {
    static readonly type = '[USERS] Remove user';
    
    constructor(public userId: string) {
    }
  }
}
