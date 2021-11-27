import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = environment.url;

  constructor(private _http:HttpClient) { }


  sendCredentials(email: string, password: string):Observable<any> {
    const body = { email, password };
    return this._http.post(`${this.url}/auth/login`,body);
  }
}
