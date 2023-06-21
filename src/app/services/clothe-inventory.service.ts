import Item from '../models/item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from "../models/user.model";

@Injectable({
  providedIn: 'root',
})
export class ClotheInventoryService {
  private URI = 'http://localhost:8080';
  private userId: string = '';

  public setId(id: string): void {
    this.userId = id;
  }
  constructor(private http: HttpClient) {}

  //Appelle la liste de d'utilisateur sur le serveur Spring

  getAll = (): Observable<User[]> => {
    return this.http.get<User[]>(`${this.URI}/vesti`);
  };


  getByTypeTop = (id: string): Observable<Item[]> => {
    console.log;
    return this.http.get<Item[]>(`${this.URI}/vesti/${id}/wardrobe/top`);
  };

  getByTypeBottom = (id: string): Observable<Item[]> => {
    return this.http.get<Item[]>(`${this.URI}/vesti/${id}/wardrobe/bottom`);
  };

  getByTypeShoes = (id: string): Observable<Item[]> => {
    return this.http.get<Item[]>(`${this.URI}/vesti/${id}/wardrobe/shoes`);
  };


  getByTypeAccessoire = (id: string): Observable<Item[]> => {3
    return this.http.get<Item[]>(`${this.URI}/vesti/${id}/wardrobe/accessories`);
}
}
