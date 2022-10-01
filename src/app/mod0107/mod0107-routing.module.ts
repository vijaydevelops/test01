import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mod0107Page } from './mod0107.page';

const routes: Routes = [
  {
    path: '',
    component: Mod0107Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mod0107PageRoutingModule {}
