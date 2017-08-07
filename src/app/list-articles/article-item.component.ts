import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../articles/article';
import { Router } from '@angular/router';
import { ListArticleService } from './list-articles.service';



@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input() article: Article;
  @Input() posicion: number;

  items: Array<Article>= [];
  

  constructor(private listArticleService: ListArticleService, private router: Router) { }

  ngOnInit() {
    this.items = this.listArticleService.devolverArticle();
  }

}
