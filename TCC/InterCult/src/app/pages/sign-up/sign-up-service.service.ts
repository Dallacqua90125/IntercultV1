import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/Users';
import { Response } from '../../models/Response';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {

  private apiUrl = `${environment.apiUrl}/User`

  constructor(private http: HttpClient) { }

  CreateFuncionario(user: User) : Observable<Response<User[]>> {
    return this.http.post<Response<User[]>>(`${this.apiUrl}`, user);
  }

}
