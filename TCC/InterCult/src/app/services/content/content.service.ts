import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development'; // Ajuste o caminho para o arquivo de ambiente
import { Content } from '../../models/Content';
import { Response } from '../../models/Response';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = `${environment.apiUrl}/Content`;

  constructor( private http: HttpClient ) {
    
    
  }
 
  GetContent() : Observable<Response<Content[]>>{
    return this.http.get<Response<Content[]>>(this.apiUrl);
  }

  GetContentById(id: string): Observable<Content> {
    return this.http.get<Content>(`${this.apiUrl}/${id}`);
  }

}
