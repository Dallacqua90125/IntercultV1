import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from '../../models/Content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  apiUrl = `${environment.apiUrl}Contents`;

  constructor(private http: HttpClient) { }

  GetContent(): Observable<Content[]>{
    return this.http.get<Content[]>(this.apiUrl);
  }
}
