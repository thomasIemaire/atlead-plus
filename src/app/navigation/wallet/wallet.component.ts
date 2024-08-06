import { Component, OnInit } from '@angular/core';
import { BarChartOptions } from '../../models/charts/bar-chart.model';
import { PieChartOptions } from '../../models/charts/pie-chart.model';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent implements OnInit {

  // public items: GridStackWidget[] = [
  //   { w: 3, h: 3, noResize: true, id: 'simple-card' },
  //   { w: 6, h: 7, noResize: true, id: 'long-chart' },
  //   { w: 3, h: 7, noResize: true, id: 'small-chart' },
  // ];

  // public gridOptions: GridStackOptions = {
  //   cellHeight: 60,
  // }

  // public barChartOptions: Partial<BarChartOptions> | undefined;
  // public pieChartOptions: Partial<PieChartOptions> | undefined;

  constructor() { }

  public ngOnInit() {
    // this.barChartOptions = this.initBarChart();
    // this.pieChartOptions = this.initPieChart();
  }

  private initBarChart(): BarChartOptions {
    return {
      series: [
        {
          name: "Actual",
          data: [
            {
              x: "2011",
              y: 1292,
              goals: [
                {
                  name: "Expected",
                  value: 1400,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2012",
              y: 4432,
              goals: [
                {
                  name: "Expected",
                  value: 5400,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2013",
              y: 5423,
              goals: [
                {
                  name: "Expected",
                  value: 5200,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2014",
              y: 6653,
              goals: [
                {
                  name: "Expected",
                  value: 6500,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2015",
              y: 8133,
              goals: [
                {
                  name: "Expected",
                  value: 6600,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2016",
              y: 7132,
              goals: [
                {
                  name: "Expected",
                  value: 7500,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2017",
              y: 7332,
              goals: [
                {
                  name: "Expected",
                  value: 8700,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2018",
              y: 6553,
              goals: [
                {
                  name: "Expected",
                  value: 7300,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            }
          ]
        }
      ],
      chart: {
        width: '100%',
        height: '200%',
        type: "bar"
      },
      plotOptions: {
        bar: {
          columnWidth: "60%"
        }
      },
      colors: ["#00E396"],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        customLegendItems: ["Actual", "Expected"],
        markers: {
          fillColors: ["#00E396", "#775DD0"]
        }
      }
    };
  }

  private initPieChart(): PieChartOptions {
    return {
      series: [44, 55, 13, 43],
      chart: {
        toolbar: {
          show: true
        },
        width: '100%',
        height: '200%',
        type: "pie"
      },
      labels: ["Offre 1", "Offre 2", "Offre 3", "Offre 4"],
      legend: {
        position: 'bottom',
        offsetX: -6,
        width: 200
      }
    };
  }
}