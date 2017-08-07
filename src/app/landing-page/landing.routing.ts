import { Routes, RouterModule } from '@angular/router';
import { ListArticlesComponent } from '../list-articles/list-articles.component';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageGuard } from './landing-page.guard';
import { ARTICLE_ROUTES } from '../articles/articles.routing';
import { ArticlesComponent} from '../articles/articles.component';


export const INICIO_ROUTES: Routes = [
   { path: 'inicio', component: ListArticlesComponent, canActivate: [LandingPageGuard] },
      { path: 'articles', component: ArticlesComponent, children: ARTICLE_ROUTES}

   
];
    export const routing = RouterModule.forRoot(INICIO_ROUTES);
