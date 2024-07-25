import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assistant-card',
  templateUrl: './assistant-card.component.html',
  styleUrl: './assistant-card.component.scss'
})
export class AssistantCardComponent {

  @Input({ required: true }) cardName: string = "";
  @Input({ required: true }) cardDescription: string = "";

  constructor() { }
  
}
