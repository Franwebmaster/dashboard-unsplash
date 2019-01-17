import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './sistema/photos/photo-list/photo-list.component';
import { NotFoundComponent } from './sistema/errors/not-found/not-found.component';

const routes: Routes = [
  { path: 'list', component: PhotoListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
