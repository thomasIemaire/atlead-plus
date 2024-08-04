import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrl: './simple-card.component.scss'
})
export class SimpleCardComponent {

  @Input({ required: true }) skeleton: boolean = true;
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) value: string | number = '';
  @Input() evolution: number = 0;
  @Input() evolutionDuration: string = 'Depuis le mois dernier';

  ngOnInit() {
    const randomDelay = Math.floor(Math.random() * (2500 - 500 + 1)) + 500;
    setTimeout(() => {
      this.skeleton = false;
    }, randomDelay);
  }

}
