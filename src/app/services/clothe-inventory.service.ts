import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IClothe from '../models/clothe.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClotheInventoryService {

  private URI = "http://localhost:8080"

  constructor(private http: HttpClient){}

  getAll = () : Observable<IClothe[]> => {

    return this.http.get<IClothe[]>(`${this.URI}/clothe-inventory`)
  }

}
