import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { IAppearanceDto, IAppearanceOptionsDto, IAppearanceWidgetsDto } from '../models/appearance.model';
import { appearance } from '../../../public/default-appearance';
import { IWidgetsDto } from '../models/widget.model';

@Injectable({
  providedIn: 'root'
})
export class AppearanceService {

  private readonly KEY_APPEARANCE: string = 'appearance';

  private appearance: IAppearanceDto;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.appearance = JSON.parse(localStorageService.getItem(this.KEY_APPEARANCE));

    if (this.appearance === null) {
      this.appearance = appearance;
      this.updateAppearance();
    } else {
      for (const widgets of appearance.widgets) {
        console.log(widgets.id);

        const targetExisting = this.getWidgetsPage(widgets.id);
        if (targetExisting === null)
          this.addWidgetsPage(widgets.id, widgets.widgets);
      }
    }
  }

  public getAppearanceOptions(): IAppearanceOptionsDto {
    return this.appearance.options;
  }

  public getWidgetsPage(target: string): IWidgetsDto[] | null {
    for (const widgets of this.appearance.widgets) {
      if (widgets.id === target) {
        return widgets.widgets;
      }
    }
    return null;
  }

  public addWidgetsPage(target: string, widgetsToSave: IWidgetsDto[]): void {
    this.appearance.widgets.push({ id: target, widgets: widgetsToSave })
    this.updateAppearance();
  }

  public setWidgetsPage(target: string, widgetsToSave: IWidgetsDto[]): void {
    for (const widgets of this.appearance.widgets) {
      if (widgets.id === target) {
        widgets.widgets = widgetsToSave;
      }
    }
    this.updateAppearance();
  }

  public setBanner(): void {
    this.appearance.options!.banner = !this.appearance.options!.banner;
    this.localStorageService.setItem('appearance', JSON.stringify(this.appearance));
    document.documentElement.style.setProperty('--atlead-height-banner', this.appearance.options!.banner ? '120px' : '0px');
  }

  private updateAppearance(): void {
    this.localStorageService.setItem(this.KEY_APPEARANCE, JSON.stringify(this.appearance));
  }
}
