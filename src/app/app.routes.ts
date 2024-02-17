import { Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
  { path: 'search-results', component: SearchResultsComponent },
  { path: '', component: WelcomeComponent },
];
