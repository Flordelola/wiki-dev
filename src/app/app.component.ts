import { Component, OnInit } from '@angular/core';
import { ServicioArticleService } from './articles/servicio-article.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServicioArticleService]

})
export class AppComponent {
}

