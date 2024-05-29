import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameResultsPage } from './game-results.page';

const routes: Routes = [
  {
    path: '',
    component: GameResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameResultsPageRoutingModule {}
