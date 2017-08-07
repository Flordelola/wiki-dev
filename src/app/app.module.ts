import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ArticlesComponent } from './articles/articles.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { BuscadorPipe } from './buscador.pipe';
import { ArticleItemComponent } from './list-articles/article-item.component';
import { ListArticleService } from './list-articles/list-articles.service';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuscadorComponent,
    ArticlesComponent,
    ListArticlesComponent,
    BuscadorPipe,
    ArticleItemComponent,
    LandingPageComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [ListArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
