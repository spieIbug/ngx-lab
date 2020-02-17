export class  User {
  id: string;
  nom: string;
  prenom: string;
  job: string;

  constructor(usr?: Partial<User>) {
    Object.assign(this, usr);
  }
}
