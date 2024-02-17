import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { Router, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  imports: [InputTextModule, RouterModule, FormsModule, ToolbarComponent],
})
export class WelcomeComponent {
  searchText: string = '';

  constructor(private router: Router) {}

  handleSearch() {
    this.router.navigate(['/search-results'], {
      queryParams: { searchBy: this.searchText },
    });
  }
}
