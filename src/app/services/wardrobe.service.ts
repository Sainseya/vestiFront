import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Item from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class WardrobeService {


  private apiUrl = 'http://localhost:27017'

  constructor(private httpClient: HttpClient) {
  }

  addItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(`${this.apiUrl}/wardrobe`, item);
  }
}
