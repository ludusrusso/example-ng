import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPage } from './users.page';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UsersPage,
  },
];

@NgModule({
  declarations: [UsersPage],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsersModule {}
