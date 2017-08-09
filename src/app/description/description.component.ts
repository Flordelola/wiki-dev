import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from '../articles/article';
import { ListArticleService } from '../list-articles/list-articles.service';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  private subscription: Subscription;
  id: number;
  article: Article;


  @Input() posicion: number;

  constructor(private listArticleService: ListArticleService, private router: Router, private activatedRoute: ActivatedRoute) {this.subscription = activatedRoute.params.subscribe(
    (param: any) => {

    this.id = param['id'];
    this.article = this.listArticleService.returnDescription(this.id);
    
  }
  );
  }

  ngOnInit() {
  }

  }

