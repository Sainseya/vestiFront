import Item from '../models/item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IClothe from '../models/clothes.model';
import IUsers from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClotheInventoryService {
<<<<<<< HEAD

  private URI = "http://localhost:8080"
  userId: string = '648705859aaaaf554aae3be2'

=======
  private URI = 'http://localhost:8080';
  userId: string = '6487112851012704f07baebd';
>>>>>>> a3545344f701f4acb78a2c929917fc377545a0fd
  // private userId: string = "";

  public setId(id: string): void {
    this.userId = id;
  }
  constructor(private http: HttpClient) {}

  //Appelle la liste de d'utilisateur sur le serveur Spring
<<<<<<< HEAD
  getAll = () : Observable<IUsers[]> => {

    return this.http.get<IUsers[]>(`${this.URI}/vesti`)
  }

  getByTypeTop = () : Observable<Item[]> => {
    console.log
    return this.http.get<Item[]>(`${this.URI}/vesti/${this.userId}/wardrobe/top`)
  }

  getByTypeBottom = () : Observable<Item[]> => {

    return this.http.get<Item[]>(`${this.URI}/vesti/${this.userId}/wardrobe/bottom`)
  }

  getByTypeShoes = () : Observable<Item[]> => {

    return this.http.get<Item[]>(`${this.URI}/vesti/${this.userId}/wardrobe/shoes`)
  }
=======
  getAll = (): Observable<IUsers[]> => {
    return this.http.get<IUsers[]>(`${this.URI}/vesti`);
  };
>>>>>>> a3545344f701f4acb78a2c929917fc377545a0fd

  getByTypeTop = (): Observable<Item[]> => {
    return this.http.get<Item[]>(
      `${this.URI}/vesti/${this.userId}/wardrobe/top`
    );
  };

  getByTypeBottom = (): Observable<Item[]> => {
    return this.http.get<Item[]>(
      `${this.URI}/vesti/${this.userId}/wardrobe/bottom`
    );
  };

  getByTypeShoes = (): Observable<Item[]> => {
    return this.http.get<Item[]>(
      `${this.URI}/vesti/${this.userId}/wardrobe/shoes`
    );
  };
}
