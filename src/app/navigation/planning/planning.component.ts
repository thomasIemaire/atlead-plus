import { Component, OnInit } from '@angular/core';
import { GridStack, GridStackWidget } from 'gridstack';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.scss'
})
export class PlanningComponent implements OnInit {

  public items: GridStackWidget[] = [
    { x: 0, y: 0, w: 9, h: 10, content: '1', noResize: true},
    { x: 9, y: 0, w: 3, h: 6, content: '2', noResize: true},
    { x: 9, y: 6, w: 3, h: 4, content: '3', noResize: true },
  ];
  private grid!: GridStack;

  constructor() { }

  public ngOnInit() {
    this.grid = GridStack.init({
      cellHeight: 70,
    }).load(this.items);
  }

}
