import { Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { WelcomeComponent } from './components/main/welcome.component';

export const routes: Routes = [
  { path: 'search-results', component: SearchResultsComponent },
  { path: '', component: WelcomeComponent },
];
