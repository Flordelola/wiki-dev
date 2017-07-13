import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ArticlesComponent } from './articles/articles.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { BuscadorPipe } from './buscador.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuscadorComponent,
    ArticlesComponent,
    ListArticlesComponent,
    BuscadorPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
