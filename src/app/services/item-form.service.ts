import { Injectable} from "@angular/core";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {catchError, delay, map, mapTo, Observable, of} from "rxjs";
import {environment} from "../../environment/environment";
import Wardrobe from "../models/wardrobe.model";
import Item from "../models/item.model";

@Injectable()
export class ItemFormService{
constructor(private http: HttpClient) {}

  saveItem(formValue: Item, wardrobeName : String ): Observable<Item> {
    return this.http.put<Item>(`${environment.apiUrl}/vesti/${environment.userId}/${wardrobeName}/newItem`, formValue);
    }
      // .pipe(
    //   map(() => true),
    //   delay(1000),
    //   catchError(() => of (false).pipe(
    //     delay(1000)
    //   ))
    // );

  saveWardrobe(formValue: Wardrobe): Observable<Wardrobe> {
    return this.http.put<Wardrobe>(`${environment.apiUrl}/vesti/${environment.userId}/newWardrobe`, formValue);
  }

  getWardrobes():Observable<Wardrobe[]> {
    return this.http.get<Wardrobe[]>(`${environment.apiUrl}/vesti/${environment.userId}/wardrobes`);
  }

}
