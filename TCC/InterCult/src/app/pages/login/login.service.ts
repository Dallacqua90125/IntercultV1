import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/Users';
import { Response } from '../../models/Response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = `${environment.apiUrl}/User`;

  constructor(private http: HttpClient) {}

  GetUsers(): Observable<Response<User[]>> {
    return this.http.get<Response<User[]>>(this.apiUrl);
  }
}
