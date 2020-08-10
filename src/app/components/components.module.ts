import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNewsComponent } from './list-news/list-news.component';
import { ListNewsItemComponent } from './list-news-item/list-news-item.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [ListNewsComponent, ListNewsItemComponent, HeaderComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    ListNewsComponent,
    ListNewsItemComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
