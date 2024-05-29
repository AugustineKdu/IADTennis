import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameSetupPageRoutingModule } from './game-setup-routing.module';

import { GameSetupPage } from './game-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameSetupPageRoutingModule
  ],
  declarations: [GameSetupPage]
})
export class GameSetupPageModule {}
