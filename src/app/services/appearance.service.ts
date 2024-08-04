import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppearanceService {

  private appearance;
  public banner: boolean;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.appearance = localStorageService.getItem('appearance');

    if (this.appearance == null || this.appearance == undefined)
      this.localStorageService.setItem('appearance', JSON.stringify({banner:true}));

    this.appearance = JSON.parse(localStorageService.getItem('appearance'));

    this.banner = this.appearance.banner
  }

  public setBanner(): void {
    this.banner = !this.banner;
    this.appearance.banner = this.banner;
    this.localStorageService.setItem('appearance', JSON.stringify(this.appearance));

    if (!this.banner)
      document.documentElement.style.setProperty('--atlead-height-banner', '0px');
    else
      document.documentElement.style.setProperty('--atlead-height-banner', '120px');
  }
}
