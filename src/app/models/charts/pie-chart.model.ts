import {
    ApexNonAxisChartSeries,
    ApexChart,
    ApexLegend
} from "ng-apexcharts";

export type PieChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: any;
    legend: ApexLegend;
};