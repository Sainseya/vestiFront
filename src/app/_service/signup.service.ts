import { Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DialogSignupComponent} from "../commons/dialog-signup/dialog-signup.component";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

const baseUrl = 'http://localhost:8080/vesti/auth/signup';

@Injectable({
  providedIn: "root"
})

export class SignupService {

  constructor(private http: HttpClient) {}

  signUp(data: any): Observable<any>{
    return this.http.post(baseUrl, data)
  }
}
