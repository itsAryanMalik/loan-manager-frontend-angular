import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../../guards/auth.guard';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'customers',
        loadChildren: () =>
          import('../customers/customers.module').then(
            (m) => m.CustomersModule
          ),
      },
      {
        path: 'loans',
        loadChildren: () =>
          import('../loans/loans.module').then((m) => m.LoansModule),
      },
      {
        path: 'invoices',
        loadChildren: () =>
          import('../invoices/invoices.module').then((m) => m.InvoicesModule),
      },
      {
        path: 'payments',
        loadChildren: () =>
          import('../payments/payments.module').then((m) => m.PaymentsModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'audit',
        loadChildren: () =>
          import('../audit/audit.module').then((m) => m.AuditModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
