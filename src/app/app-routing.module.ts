import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pause-modal',
    loadChildren: () => import('./pause-modal/pause-modal.module').then( m => m.PauseModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
//   },
//   {
//     path: 'login',
//     loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
//   },
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: 'game-setup',
//     loadChildren: () => import('./game-setup/game-setup.module').then( m => m.GameSetupPageModule)
//   },
//   {
//     path: 'game-play',
//     loadChildren: () => import('./game-play/game-play.module').then( m => m.GamePlayPageModule)
//   },
//   {
//     path: 'game-results',
//     loadChildren: () => import('./game-results/game-results.module').then( m => m.GameResultsPageModule)
//   },
//   {
//     path: 'personal-info',
//     loadChildren: () => import('./personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
//   }
// ];
// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
