import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameSetupPage } from './game-setup.page';

const routes: Routes = [
  {
    path: '',
    component: GameSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameSetupPageRoutingModule {}
