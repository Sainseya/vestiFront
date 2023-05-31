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

  constructor(private http: HttpClient){}


  //Appelle la liste de d'utilisateur sur le serveur Spring
  getAll = () : Observable<IUsers[]> => {

    return this.http.get<IUsers[]>(`${this.URI}/vesti`)
  }

}
