import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPage } from './users.page';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: UsersPage,
  },
];

@NgModule({
  declarations: [UsersPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export class UsersModule {}
