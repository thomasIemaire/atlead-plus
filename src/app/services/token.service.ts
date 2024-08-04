import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly KEY_TOKEN: string = 'token';

  // Utilisation d'un BehaviorSubject pour gérer le token
  private tokenSubject: BehaviorSubject<string | null>;

  constructor(private localStorageService: LocalStorageService) {
    const token = this.localStorageService.getItem(this.KEY_TOKEN);
    // Initialiser le BehaviorSubject avec le token existant ou null
    this.tokenSubject = new BehaviorSubject<string | null>(token);
  }

  public setToken(token: string): void {
    this.localStorageService.setItem(this.KEY_TOKEN, token);
    // Mettre à jour le BehaviorSubject avec le nouveau token
    this.tokenSubject.next(token);
  }

  public getToken(): string | null {
    return this.tokenSubject.value;
  }

  public getTokenObservable() {
    return this.tokenSubject.asObservable();
  }

  public remove(): void {
    this.localStorageService.removeItem(this.KEY_TOKEN);
    // Mettre à jour le BehaviorSubject pour indiquer que le token a été supprimé
    this.tokenSubject.next(null);
  }
}
