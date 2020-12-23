import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostdetailsComponent } from './postdetails.component';


const routes: Routes = [
  {
    path: '',
    component: PostdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostdetailsRoutingModule { }