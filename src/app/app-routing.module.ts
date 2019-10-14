import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostDetailComponent }  from './post-detail.component';
import { ShoppingComponent }    from './shopping.component';

const routes: Routes = [
  { path: '', redirectTo: '/shopping', pathMatch: 'full' },
  { path: 'shopping',   component: ShoppingComponent },
  { path: 'detail/:id', component: PostDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
