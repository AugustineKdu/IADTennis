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
        path: 'game-setup',
        loadChildren: () => import('../game-setup/game-setup.module').then(m => m.GameSetupPageModule)
      },
      {
        path: 'game-results',
        loadChildren: () => import('../game-results/game-results.module').then(m => m.GameResultsPageModule)
      },
      {
        path: 'personal-info',
        loadChildren: () => import('../personal-info/personal-info.module').then(m => m.PersonalInfoPageModule)
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
