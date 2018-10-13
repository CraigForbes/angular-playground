import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'formplay',
    loadChildren: 'app/form-play/form-play.module#FormPlayModule'
  },
  {
    path: '',
    redirectTo: 'formplay/reactive',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
