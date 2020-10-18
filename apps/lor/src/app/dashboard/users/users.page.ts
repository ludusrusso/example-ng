import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ApiSDK } from '../../../gql.generated';

@Component({
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  usersQuery = this.api.getUsersWatch();
  users$ = this.usersQuery.valueChanges.pipe(map((q) => q.data.getUsers));

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
  });

  constructor(private readonly api: ApiSDK, private readonly fb: FormBuilder) {}

  ngOnInit(): void {}

  async createUser() {
    if (this.form.invalid) {
      return;
    }

    const res = await this.api
      .createUser({
        form: this.form.value,
      })
      .toPromise();
    this.usersQuery.refetch();
  }

  async updateUser() {
    const res = await this.api
      .updateUser({
        form: {
          first_name: 'Ludovico',
        },
        id: 1,
      })
      .toPromise();
  }
}
