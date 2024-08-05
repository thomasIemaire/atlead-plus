import { Component, Input, OnInit } from '@angular/core';
import { GridStackOptions, GridStackWidget } from 'gridstack';
import { WidgetsDto } from '../../models/widget.model';
import { GridstackWidgetsService } from '../../services/gridstack-widgets.service';

@Component({
  selector: 'app-gridstack-widgets',
  templateUrl: './gridstack-widgets.component.html',
  styleUrl: './gridstack-widgets.component.scss'
})
export class GridstackWidgetsComponent implements OnInit {
  @Input({ required: true }) KEY_PAGE: string = '';
  @Input({ required: true }) hash: string = '';

  public options: GridStackOptions = {
    cellHeight: 60,
  }

  public widgets: WidgetsDto[] = [];
  
  constructor(
    private gridstackWidgetsService: GridstackWidgetsService
  ) { }

  ngOnInit(): void {
    this.readWidgetsHash();
  }

  public addWidget(hash: string): void {
    this.hash += hash;
    let widget: WidgetsDto = new WidgetsDto(hash);
    this.widgets.push(widget);
  }

  private readWidgetsHash(): void {
    for (let i = 0; i < this.hash.length; i += 16) {
      this.widgets.push(new WidgetsDto(this.hash.substring(i, i + 16)));
    }
  }

  private widgetsChange(): void {
    let newHash: string = '';
    this.widgets.forEach(widget => {
      console.log(widget.options);
  
      newHash += widget.hash;
    });
    this.hash = newHash;
    console.log('new hash', newHash);
    
    this.gridstackWidgetsService.setWidgets(this.KEY_PAGE, this.hash);
  }

  public updateGrid(e: any) {
    console.log('COUCOU jai été modifié', e.nodes);

    e.nodes.forEach((widget: { id: string, x: number, y: number }) => {
      let widgetToModify: WidgetsDto = this.widgets.filter(w => w.rule === widget.id)[0];
      widgetToModify.update(widget.x, widget.y);

      console.log(widgetToModify.options);
      
    });
    
    this.widgetsChange();
  }
}
