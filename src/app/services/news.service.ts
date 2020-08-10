import { MensajesService } from './mensajes.service';
import { Select } from './../interfaces/select';
import { Article } from './../interfaces/news';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private urlBase = 'http://newsapi.org/v2/top-headlines';
  private apiKey = environment.newsApiKey;

  constructor(private http: HttpClient, private mensajesService: MensajesService) {}

  getNews(country: string, category: string) {
    return new Promise<Article[]>((resolve, reject) => {
      this.http
        .get<News>(this.urlBase, {
          params: {
            country,
            category,
            apiKey: this.apiKey,
          },
        })
        .subscribe(
          (news) => resolve(news.articles),
          (error) =>{
            reject(error);
            this.mensajesService.alertError('Ooops...', 'No se pudo obtener las noticias.')
          }
        );
    });
  }

  getCountries() {
    return new Promise<Select[]>((resolve, reject) => {
      this.http.get<Select[]>('assets/data/countries.json').subscribe(countries => {
        resolve(countries);
      });
    })
  }

  getCategories() {
    return new Promise<Select[]>((resolve, reject) => {
      this.http.get<Select[]>('assets/data/categories.json').subscribe(categories => {
        resolve(categories);
      });
    })
  }


}
