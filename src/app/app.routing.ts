import { Routes, RouterModule } from '@angular/router';
import { ARTICLE_ROUTES } from './articles/articles.routing';
import { ArticlesComponent} from './articles/articles.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DescriptionComponent } from './description/description.component';
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './list-articles/article-item.component';




const APP_ROUTES: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'articles', component: ArticlesComponent, children: ARTICLE_ROUTES}


];

export const routing = RouterModule.forRoot(APP_ROUTES);
