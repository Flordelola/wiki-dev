import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioArticleService } from './servicio-article.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() article: Article;


 articles: Array <Article> = [];



  constructor(private servicioArticleService: ServicioArticleService) { }

  ngOnInit() {
  }

}
