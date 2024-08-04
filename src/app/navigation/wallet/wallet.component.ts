import { Component, OnInit } from '@angular/core';
import { GridStackOptions, GridStackWidget } from 'gridstack';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent implements OnInit {

  public items: GridStackWidget[] = [
    { w: 3, h: 3, noResize: true, id: 'simple-card' },
    { w: 6, h: 9, noResize: true, id: 'long-chart' },
    { w: 3, h: 9, noResize: true, id: 'small-chart' },
  ];

  public chart: any = [];
  public pieChart: any = [];

  public gridOptions: GridStackOptions = {
    cellHeight: 60,
  }

  constructor() { }

  public ngOnInit() {
    this.chart = this.initChart();
    this.pieChart = this.createChart();
  }

  private initChart(): Chart {
    return new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: '#e62644'
          },
        ],
      },
    });
  }

  createChart() {
    return new Chart("MyChart", {
      type: 'pie',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            '#e62644',
            '#fab31e',
            '#0079c2'
          ],
          hoverOffset: 4
        }]
      }
    });
  }
}