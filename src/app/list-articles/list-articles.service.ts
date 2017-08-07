import { Injectable} from '@angular/core';
import { Article } from '../articles/article';

@Injectable ()
export class ListArticleService {
    private articles: Array<Article> = []

constructor () {}

//devolverArticle(): Array<Article> {
  //return this.articles;
//}

getArticles() {
  return this.articles;
}
}