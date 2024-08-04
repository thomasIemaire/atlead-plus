import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User | null = null;

  constructor() { }

  public setUser(user: User): void {
    this.user = user;
  }

  public getUser(): User | null {
    return this.user;
  }

  public remove(): void {
    this.user = null;
  }
}
