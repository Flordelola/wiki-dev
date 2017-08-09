import { Routes, RouterModule } from '@angular/router';
import { ListArticlesComponent } from '../list-articles/list-articles.component';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageGuard } from './landing-page.guard';



export const INICIO_ROUTES: Routes = [
   { path: 'inicio', component: ListArticlesComponent, canActivate: [LandingPageGuard] },
  

   
];
