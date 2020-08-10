import { Article } from './../../interfaces/news';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  @Input() articles: Article[];

  constructor() { }

  ngOnInit(): void {

  }

}
