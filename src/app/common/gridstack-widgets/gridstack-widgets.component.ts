import { Component, Input, OnInit } from '@angular/core';
import { GridStackOptions, GridStackWidget } from 'gridstack';
import { IWidgetsDto, WidgetsDto } from '../../models/widget.model';
import { AppearanceService } from '../../services/appearance.service';

@Component({
  selector: 'app-gridstack-widgets',
  templateUrl: './gridstack-widgets.component.html',
  styleUrl: './gridstack-widgets.component.scss'
})
export class GridstackWidgetsComponent implements OnInit {
  @Input({ required: true }) KEY_TAGRET: string = '';

  public widgets: WidgetsDto[] = [];

  public options: GridStackOptions = {
    cellHeight: 60,
  }
  
  constructor(
    private appearanceService: AppearanceService
  ) { }

  ngOnInit(): void {
    const savedWidgets: IWidgetsDto[] | null = this.appearanceService.getWidgetsPage(this.KEY_TAGRET);
    if (savedWidgets !== null)
      this.widgets = savedWidgets.map(widget => new WidgetsDto(widget));
  }

  public updateGrid(e: any) {    
    e.nodes.forEach((widget: { id: string, x: number, y: number }) => {
      let widgetUpdated: WidgetsDto = this.widgets.filter(w => w.id === widget.id)[0];      
      widgetUpdated.update(widget.x, widget.y);
    });
    this.appearanceService.setWidgetsPage(this.KEY_TAGRET, this.widgets.map(widget => widget.toModel()));
  }
}