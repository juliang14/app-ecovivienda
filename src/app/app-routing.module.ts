import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about-project',
    loadChildren: () => import('./pages/about-project/about-project.module').then( m => m.AboutProjectPageModule)
  },
  {
    path: 'newsletters',
    loadChildren: () => import('./pages/newsletters/newsletters.module').then( m => m.NewslettersPageModule)
  },
  {
    path: 'work-progress',
    loadChildren: () => import('./pages/work-progress/work-progress.module').then( m => m.WorkProgressPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
