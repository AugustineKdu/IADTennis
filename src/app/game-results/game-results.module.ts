import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameResultsPageRoutingModule } from './game-results-routing.module';

import { GameResultsPage } from './game-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameResultsPageRoutingModule
  ],
  declarations: [GameResultsPage]
})
export class GameResultsPageModule {}
