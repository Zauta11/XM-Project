import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http : HttpClient) { }

  URL = "https://picsum.photos/v2/list";


  getData(): Observable <Item[]> {
    return this.http.get<Item[]>(this.URL);
  }

}
