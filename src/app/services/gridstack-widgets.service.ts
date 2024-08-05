import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GridstackWidgetsService {

  private readonly KEY_WIDGETS: string = 'widgets';

  private widgets: string;

  private widgetsSetup: any = {
    wallet: "00000303iiiirrrr03000303iiiiyyyy06000303iiiiuuuu09000303iiiipppp00030607iiiillll06030307iiiihhhh09030307iiiivvvv"
  }

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.widgets = this.localStorageService.getItem(this.KEY_WIDGETS);
    if (!this.widgets) {
      this.localStorageService.setItem(this.KEY_WIDGETS, JSON.stringify(this.widgetsSetup));
      this.widgets = this.localStorageService.getItem(this.KEY_WIDGETS);
    }
  }

  public getWidgets(page: string): string {
    return JSON.parse(this.widgets)[page];
  }

  public setWidgets(page: string, hash: string): void {
    let widgets = JSON.parse(this.widgets);
    widgets[page] = hash;
    this.localStorageService.setItem(this.KEY_WIDGETS, JSON.stringify(widgets));
    this.widgets = this.localStorageService.getItem(this.KEY_WIDGETS);
  }
}
