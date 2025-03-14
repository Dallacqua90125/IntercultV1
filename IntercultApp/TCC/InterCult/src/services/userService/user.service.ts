import { User } from './../../models/Users'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = `${environment.apiUrl}Users`

  constructor(private http: HttpClient) { }

  GetUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  GetUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  CreateUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user)
  }

  UpdateUser(user: Partial<User>): Observable<User> {
    const updateUrl = `${this.apiUrl}/${user.id}`
    return this.http.put<User>(updateUrl, user);
  }
}
