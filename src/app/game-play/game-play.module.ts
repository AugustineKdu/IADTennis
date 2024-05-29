import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePlayPageRoutingModule } from './game-play-routing.module';

import { GamePlayPage } from './game-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePlayPageRoutingModule
  ],
  declarations: [GamePlayPage]
})
export class GamePlayPageModule {}
