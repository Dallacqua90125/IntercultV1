import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public user: Observable<any> = this.userSubject.asObservable();

  constructor() { }

  setUser(user: any) {
    this.userSubject.next(user);
  }

  getUser(): any {
    return this.userSubject.value;
  }
}
