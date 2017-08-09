import { Routes, RouterModule } from '@angular/router';
import { ArticleItemComponent } from '../list-articles/article-item.component';
import { AppComponent } from '../app.component';
import { ListArticlesComponent } from '../list-articles/list-articles.component';
import { ArticlesComponent } from '../articles/articles.component';
import { DescriptionComponent } from '../description/description.component';



export const ARTICLE_ROUTES: Routes = [
    { path: 'article-info/:id', component: DescriptionComponent },
    { path: 'article-item/:id', component: ArticleItemComponent },
    { path: 'article-item/', redirectTo:'' },
    { path: 'list-articles', component: ListArticlesComponent },
    { path: '', redirectTo: 'list-articles', pathMatch: 'full' },
   


];
