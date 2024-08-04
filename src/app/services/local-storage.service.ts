import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getItem(key: string): any {
    return localStorage.getItem(key);
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
