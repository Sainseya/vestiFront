import Item from '../models/item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IClothe from '../models/clothes.model';
import IUsers from '../models/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClotheInventoryService {

  private URI = "http://localhost:8080"
  userId: string = '123'
  constructor(private http: HttpClient){}


  //Appelle la liste de d'utilisateur sur le serveur Spring
  getAll = () : Observable<IUsers[]> => {

    return this.http.get<IUsers[]>(`${this.URI}/vesti`)
  }

  getByTypeTop = () : Observable<Item[]> => {

    return this.http.get<Item[]>(`${this.URI}/${this.userId}/wardrobe/top`)
  }

  getByTypeBottom = () : Observable<Item[]> => {

    return this.http.get<Item[]>(`${this.URI}/${this.userId}/wardrobe/bottom`)
  }

  getByTypeShoes = () : Observable<Item[]> => {

    return this.http.get<Item[]>(`${this.URI}/${this.userId}/wardrobe/shoes`)
  }



}

