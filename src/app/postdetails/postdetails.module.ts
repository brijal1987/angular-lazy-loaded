import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostdetailsRoutingModule } from './postdetails-routing.module';
import { PostdetailsComponent } from './postdetails.component';

@NgModule({
  imports: [
    CommonModule,
    PostdetailsRoutingModule
  ],
  declarations: [PostdetailsComponent]
})
export class PostdetailsModule { }