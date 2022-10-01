import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mod0107PageRoutingModule } from './mod0107-routing.module';

import { Mod0107Page } from './mod0107.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mod0107PageRoutingModule
  ],
  declarations: [Mod0107Page]
})
export class Mod0107PageModule {}
