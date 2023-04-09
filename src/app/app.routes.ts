import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'about',
    loadComponent: () => import('./about-restaurant/about-restaurant.page').then( m => m.AboutRestaurantPage)
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];
