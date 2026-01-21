import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import { GraphLabelsDto, StackBarGraphDataDto } from '../dtos/graph-data-dto';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-stacked-bar-graph',
  imports: [],
  templateUrl: './stacked-bar-graph.html',
  styleUrl: './stacked-bar-graph.css',
})
export class StackedBarGraph implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  @Input() labels: GraphLabelsDto[] = [];
  @Input() data: StackBarGraphDataDto[] = [];
  private displayedData: any[] = [];
  private displayedLabels: string[] = [];

  ngAfterViewInit(): void {
    this.buildChartData();
    this.buildLabels();
    this.createChart();
  }

  private buildChartData() {
    this.data.forEach(( singleData ) => {
      let displayableData = {
        label: singleData.label,
        data: this.orderValuesAccordingToLabelSequence(singleData.data),
        backgroundColor: singleData.backgroundColor,
        stack: 'stack-1'
      }
      this.displayedData.push(displayableData);
    });
  }

  private orderValuesAccordingToLabelSequence(unorderedValuesByLabelKey: Record<string, number>[]): number[] {
    const result: number[] = [];

    this.labels.forEach(({ key, label }) => {
      const match = unorderedValuesByLabelKey.find(d => d[key] !== undefined);
      
      if (match) {
        result.push(match[key]);
      }
    });

    return result;
  }

  private buildLabels() {
    this.displayedLabels = this.labels.map(l => l.label);
  }

  private createChart(): void {
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.displayedLabels,
        datasets: this.displayedData
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          },
          tooltip: {
            mode: 'index',
            intersect: false
          },
        },
        scales: {
          x: {
            stacked: true,
            border: { color: '#000000' },
            ticks: { color: '#000000' },
            grid: { display: false }
          },
          y: {
            display: false
          }
        }
      }
    });
  }
}
