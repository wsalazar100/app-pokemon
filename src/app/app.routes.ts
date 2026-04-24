import { Routes } from '@angular/router';

export const routes: Routes = [
{
  path: 'about',
  loadComponent: () => import('./paginas/about/about-page').then(m => m.default)
},
{
  path: 'contact',
  loadComponent: () => import('./paginas/contact/contact-page').then(m => m.default)
},
{
  path: 'pricing',
  loadComponent: () => import('./paginas/pricing/pricing-page').then(m => m.default)
},
{
  path: '**',
    redirectTo: 'about',
    pathMatch: 'full'
  // loadComponent: () => import('./paginas/about/about-page').then(m => m.AboutPage)

}


];
