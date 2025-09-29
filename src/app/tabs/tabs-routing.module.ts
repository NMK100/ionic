
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        loadComponent: () =>
          import('../accueil/accueil.page').then(m => m.AccueilPage),
      },
      {
        path: 'depenses',
        loadComponent: () =>
          import('../depenses/depenses.page').then(m => m.DepensesPage),
      },
      {
        path: 'profil',
        loadComponent: () =>
          import('../profil/profil.page').then(m => m.ProfilPage),
      },
      /*{
        path: 'notifications',
        loadComponent: () =>
          import('../notifications/notifications.page').then(m => m.NotificationsPage),
      },*/
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
