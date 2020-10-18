import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiSDK } from '../../../gql.generated';

@Component({
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  query$ = this.api.hello({ name: 'Marco' }).pipe(map((q) => q.data.hello));

  constructor(private api: ApiSDK) {}

  ngOnInit(): void {}
}
