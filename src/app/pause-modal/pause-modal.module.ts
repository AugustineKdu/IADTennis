import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PauseModalPageRoutingModule } from './pause-modal-routing.module';

import { PauseModalPage } from './pause-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PauseModalPageRoutingModule
  ],
  declarations: [PauseModalPage]
})
export class PauseModalPageModule {}
