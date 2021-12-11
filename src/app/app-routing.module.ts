import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*
 * Generating Command
 * ng g c component_name --module=modules/pages/pages.module --skipTests
 * it will auto update your pages module AKA this module
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
