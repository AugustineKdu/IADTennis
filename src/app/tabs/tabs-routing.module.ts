import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'game-list',
        loadChildren: () => import('../game-list/game-list.module').then(m => m.GameListPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'game-setup',
        loadChildren: () => import('../game-setup/game-setup.module').then(m => m.GameSetupPageModule)
      },
      {
        path: 'game-play',
        loadChildren: () => import('../game-play/game-play.module').then(m => m.GamePlayPageModule)
      },
      {
        path: 'game-results',
        loadChildren: () => import('../game-results/game-results.module').then(m => m.GameResultsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
