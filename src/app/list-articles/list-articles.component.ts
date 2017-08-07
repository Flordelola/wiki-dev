import { Component, OnInit } from '@angular/core';
import { Article } from '../articles/article';
import { Router } from '@angular/router';
import { ListArticleService} from './list-articles.service';



@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css'],

})
export class ListArticlesComponent implements OnInit {

 articles: Array<Article> = [];

 constructor(private listArticleService: ListArticleService, private router: Router) { }




  ngOnInit() {
    this.articles = this.listArticleService.devolverArticle();
   

  
  }

}
