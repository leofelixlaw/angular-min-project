import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/users', pathMatch: 'full' },
      {
        path: 'users',
        loadChildren: () => import('./users/users-routing.module').then(m => m.UsersRoutingModule)
      },
      {
        path: '**',
        redirectTo: 'users'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
