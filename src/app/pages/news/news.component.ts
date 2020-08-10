import { Select } from './../../interfaces/select';
import { Article } from './../../interfaces/news';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles: Article[] = [];
  countries: Select[] = [];
  categories: Select[] = [];

  countrySelected: string;
  categorySelected: string;


  constructor(private newsService: NewsService) { }

  async ngOnInit(){
    this.countries = [...await this.newsService.getCountries()];
    this.categories = [...await this.newsService.getCategories()];
    this.countrySelected = "mx";
    this.categorySelected = "general";
    this.getNews();
  }

  async getNews() {
    this.articles = [...await this.newsService.getNews(this.countrySelected,this.categorySelected)];
    console.log(this.articles)
  }

  onChange() {
    this.getNews();
  }
}
