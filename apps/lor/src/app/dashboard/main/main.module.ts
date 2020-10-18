import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './main.page';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
  },
];

@NgModule({
  declarations: [MainPage],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainModule {}
