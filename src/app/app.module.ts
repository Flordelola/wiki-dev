import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
import { ArticlesComponent } from './articles/articles.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { BuscadorPipe } from './buscador.pipe';
import { ArticleItemComponent } from './list-articles/article-item.component';
import { ListArticleService } from './list-articles/list-articles.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DescriptionComponent } from './description/description.component';
import { CutDescriptionPipe } from './cut-description.pipe';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesComponent,
    ListArticlesComponent,
    BuscadorPipe,
    ArticleItemComponent,
    LandingPageComponent,
    DescriptionComponent,
    CutDescriptionPipe,
    FooterComponent,
    
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
