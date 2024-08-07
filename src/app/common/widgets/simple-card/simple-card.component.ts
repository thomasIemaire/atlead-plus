import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrl: './simple-card.component.scss'
})
export class SimpleCardComponent {

  @Input({ required: true }) rule: string = '';

  public title: string = '';
  public value: string | number = 0;
  public evolution: number = 0;

  public skeleton: boolean = true;

  ngOnInit() {
    this.getWidgetForRule();
    const randomDelay = Math.floor(Math.random() * (2500 - 500 + 1)) + 500;
    setTimeout(() => {
      this.skeleton = false;
    }, randomDelay);
  }

  private getWidgetForRule(): any {
    switch (this.rule) {
      case 'income':
        this.title = 'Revenue';
        this.value = '€125';
        this.evolution = 5.77;
        break;
      case 'forecasts':
        this.title = 'Prévisions';
        this.value = '€184';
        this.evolution = 6.02;
        break;
      case 'average':
        this.title = 'Moyenne/Client';
        this.value = '€22';
        this.evolution = 0;
        break;
      case 'costs':
        this.title = 'Dépenses';
        this.value = '€14';
        this.evolution = -45.98;
        break;
      case 'customers':
        this.title = 'Clients';
        this.value = 34;
        this.evolution = 4.50;
        break;

      default:
        break;
    }
  }

}
