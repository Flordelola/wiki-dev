import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ListArticlesComponent } from '../list-articles/list-articles.component';
import { ServicioArticleService } from '../articles/servicio-article.service';
import { ListArticleService } from '../list-articles/list-articles.service';
import { Article } from '../articles/article';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
 @Input() article: Article;
     
 articles: Array<Article> = []


 @Output() emitirArticle = new EventEmitter<Article>();

  constructor(private router: Router, private servicioArticleService: ServicioArticleService, private listArticleService: ListArticleService) { }


  ngOnInit() {
    this.articles = this.listArticleService.getArticles();


}

}
