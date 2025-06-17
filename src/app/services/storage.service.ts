import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setLocalStorageItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getLocalStorageItem<T>(key: string): T | null {
    let stringifyValue: string | null = localStorage.getItem(key);
    if (!stringifyValue) return null;
    return JSON.parse(stringifyValue);
  }

  public removeLocalStorageItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clearLocalStorage(): void {
    localStorage.clear();
  }

  public setSessionStorageItem<T>(key: string, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public getSessionStorageItem<T>(key: string): T | null {
    let stringifyValue: string | null = sessionStorage.getItem(key);
    if (!stringifyValue) return null;
    return JSON.parse(stringifyValue);
  }

  public removeSessionStorageItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  public clearSessionStorage(): void {
    sessionStorage.clear();
  }
}