import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  private screenSize: number;

  constructor() {
    this.screenSize = window.innerWidth;
  }

  public setScreenSize(size: number): void {
    this.screenSize = size;
  }

  public getScreenSize(): number {
    return this.screenSize;
  }
}