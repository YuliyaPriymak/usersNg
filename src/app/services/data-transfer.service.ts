import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private userData: BehaviorSubject<Partial<User>> = new BehaviorSubject<Partial<User>>({});
  constructor() { }
  setUser(user: User): void{
    this.userData.next(user);
  }

  getUser(): Partial<User>{
    return this.userData.getValue();
  }
}
