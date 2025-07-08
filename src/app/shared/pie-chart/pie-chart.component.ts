import { Component, Input, input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule, ApexChart } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie-chart',
  imports: [NgApexchartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnChanges {
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  chartOptions!: ChartOptions;
  
  // @Input() values are assigned after the constructor runs.
  // If you configure the chart too early (in the constructor), you'll pass empty arrays to ApexCharts.
  // This is why I use OnChanges instead of a constructor
  ngOnChanges(changes: SimpleChanges): void {
    this.chartOptions = {
      series: this.data,
      chart: {
        type: "donut"
      },
      labels: this.labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
