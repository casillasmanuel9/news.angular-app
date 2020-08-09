import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';


@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: NewsComponent}]),
  ]
})
export class NewsModule { }
