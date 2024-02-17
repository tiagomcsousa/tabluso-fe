import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { TableModule } from 'primeng/table';
import { Song } from '../../models/song.model';
import { TabService } from '../../services/tab.service';
import { TabInfo } from '../../models/tab-info.model';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-results',
  standalone: true,
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  imports: [
    CommonModule,
    TableModule,
    RouterLink,
    ToolbarComponent,
    HttpClientModule,
  ],
})
export class SearchResultsComponent implements OnInit {
  tabsFound$: Observable<TabInfo[]>;

  constructor(private route: ActivatedRoute, private tabService: TabService) {}

  ngOnInit(): void {
    const searchBy = this.route.snapshot.queryParamMap.get('searchBy');
    this.tabsFound$ = this.tabService.searchTabs(searchBy!);
  }
}
