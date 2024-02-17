import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TabInfo } from '../models/tab-info.model';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private API_URL_TAB: string = 'http://localhost:8080/tabs';

  constructor(private http: HttpClient) {}

  searchTabs(searchText: string) {
    let params = new HttpParams().set('searchText', searchText);
    return this.http.get<TabInfo[]>(this.API_URL_TAB, { params: params });
  }
}
