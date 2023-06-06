import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from "../models/user.model";


@Injectable({
  providedIn: 'root'
})
export class ClotheInventoryService {

  private URI = "http://localhost:8080"

  constructor(private http: HttpClient){}


  //Appelle la liste de d'utilisateur sur le serveur Spring
  getAll = () : Observable<User[]> => {

    return this.http.get<User[]>(`${this.URI}/vesti`)
  }

}
