import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastermodulePageRoutingModule } from './mastermodule-routing.module';

import { MastermodulePage } from './mastermodule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastermodulePageRoutingModule
  ],
  declarations: [MastermodulePage]
})
export class MastermodulePageModule {}
