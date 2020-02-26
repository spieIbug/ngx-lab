import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Users } from '../redux/users.actions';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  form: FormGroup;

  constructor(private store: Store) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required])
    });
  }

  createNewUser() {
    if (!this.form.valid) {
      return;
    }

    const newUser = this.form.value;
    this.store.dispatch(new Users.Save(newUser));
    this.form.reset();
  }
}
