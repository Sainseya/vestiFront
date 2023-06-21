import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environment/environment";
// import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const request = new HttpRequest('POST', `${environment.apiUrl}/img`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(request);

    // return this.http.post<string>(`${environment.apiUrl}/img`, formData);

  }

  // getFiles(): Observable<any> {
  //   this.http.get(`${environment.apiUrl}/img/id`);
    // const imgId :String = id;
    // return id;
  // }
}
