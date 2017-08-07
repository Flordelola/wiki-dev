import { Routes, RouterModule } from '@angular/router';
import { ARTICLE_ROUTES } from './articles/articles.routing';
import { ArticlesComponent} from './articles/articles.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { LandingPageComponent } from './landing-page/landing-page.component'




const APP_ROUTES: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'articles', component: ArticlesComponent, children: ARTICLE_ROUTES}


];

export const routing = RouterModule.forRoot(APP_ROUTES);
