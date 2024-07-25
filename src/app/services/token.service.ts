import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly KEY_TOKEN: string = 'token';
  
  private token: string | null;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getItem(this.KEY_TOKEN);
  }

  public setToken(token: string): void {
    this.localStorageService.setItem(this.KEY_TOKEN, token);
    this.token = token;
  }

  public getToken(): string | null {
    return this.token;
  }
}
