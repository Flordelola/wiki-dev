import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../articles/article';
import { ListArticleService } from './list-articles.service'


@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
   
 articles: Array<Article> = []


 @Output() emitirArticle = new EventEmitter<Article>();

  constructor(private listArticleService: ListArticleService) {}

  ngOnInit() {
    this.articles = this.listArticleService.getArticles();

  
  }

}
