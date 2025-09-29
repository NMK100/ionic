import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full',
  },
  {
    path: 'connexion',
    loadComponent: () => import('./connexion/connexion.page').then(m => m.ConnexionPage)
  },
  {
    path: 'mdp-oublie',
    loadComponent: () => import('./mdp-oublie/mdp-oublie.page').then( m => m.MdpOubliePage)
  },
  {
    path: 'mdpoublie2',
    loadComponent: () => import('./mdpoublie2/mdpoublie2.page').then( m => m.Mdpoublie2Page)
  },
  {
    path: 'mdpoublie3',
    loadComponent: () => import('./mdpoublie3/mdpoublie3.page').then( m => m.Mdpoublie3Page)
  },
  {
    path: 'accueil',
    loadComponent: () => import('./accueil/accueil.page').then( m => m.AccueilPage)
  },
  {
    path: 'depenses',
    loadComponent: () => import('./depenses/depenses.page').then( m => m.DepensesPage)
  },
  {
    path: 'bulletin',
    loadComponent: () => import('./bulletin/bulletin.page').then( m => m.BulletinPage)
  },
  {
  path: 'tabs',
  loadChildren: () =>
    import('./tabs/tabs-routing.module').then((m) => m.TabsPageRoutingModule),
},  {
    path: 'notifications',
    loadComponent: () => import('./notifications/notifications.page').then( m => m.NotificationsPage)
  }


];
