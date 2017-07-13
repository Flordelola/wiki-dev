import { Routes, RouterModule } from '@angular/router';
//import { ArticleItemComponent } from '../list-articles/article-item.component';
import { AppComponent } from '../app.component';
import { ListArticlesComponent } from '../list-articles/list-articles.component';
import { ArticlesComponent } from '../articles/articles.component';

export const OFERTAS_ROUTES: Routes = [
    { path: 'list-articles', component: ListArticlesComponent },
    { path: '', redirectTo: 'list-articles', pathMatch: 'full' }

];
