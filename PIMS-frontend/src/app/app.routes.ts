import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then(
        (module) => module.HomeComponent
      );
    },
  },
  {
    path: 'update',
    loadComponent: () => {
      return import('./update/update.component').then(
        (module) => module.UpdateComponent
      );
    },
  },
];
