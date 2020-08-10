import { Article } from './../../interfaces/news';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-news-item',
  templateUrl: './list-news-item.component.html',
  styleUrls: ['./list-news-item.component.scss']
})
export class ListNewsItemComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit(): void {
  }

  openArticle(url: string) {
    window.open(url, '_blank')
  }

}
