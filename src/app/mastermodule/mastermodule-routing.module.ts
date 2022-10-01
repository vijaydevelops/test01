import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastermodulePage } from './mastermodule.page';

const routes: Routes = [
  {
    path: '',
    component: MastermodulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastermodulePageRoutingModule {}
