import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PauseModalPage } from './pause-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PauseModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PauseModalPageRoutingModule {}
