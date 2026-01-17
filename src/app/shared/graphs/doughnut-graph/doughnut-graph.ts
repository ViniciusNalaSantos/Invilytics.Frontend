import { Component, AfterViewInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { GraphLabelsDto } from '../dtos/graph-data-dto';

Chart.register(
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-doughnut-graph',
  standalone: true,
  imports: [],
  templateUrl: './doughnut-graph.html',
  styleUrl: './doughnut-graph.css',
})
export class DoughnutGraph implements AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('chartCanvas', { static: true })
  chartCanvas!: ElementRef<HTMLCanvasElement>;

  private chart?: Chart;

  displayedData: number[] = [];
  displayedLabels: string[] = [];

  @Input() labels: GraphLabelsDto[] = [];
  @Input() data: Record<string, number>[] = [];
  @Input() colors: string[] = ['#111F4D', '#393E46', '#E9ECF1'];
  @Input() hasLegend = true;

  ngOnChanges(): void {
    if (!this.labels.length || !this.data.length) return;

    this.buildChartData();
    this.updateChart();
  }

  ngAfterViewInit(): void {
    if (!this.displayedData.length) {
      this.buildChartData();
    }

    this.createChart();
  }

  private buildChartData(): void {
    this.displayedData = [];
    this.displayedLabels = [];

    this.labels.forEach(({ key, label }) => {
      const match = this.data.find(d => d[key] !== undefined);
      if (match) {
        this.displayedData.push(match[key]);
        this.displayedLabels.push(label);
      }
    });
  }

  private createChart(): void {
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.displayedLabels,
        datasets: [
          {
            data: this.displayedData,
            backgroundColor: this.colors,
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        cutout: '70%',
        plugins: {
          legend: {
            display: this.hasLegend,
            position: 'bottom'
          }
        }
      }
    });
  }

  private updateChart(): void {
    if (!this.chart) return;

    this.chart.data.labels = this.displayedLabels;
    this.chart.data.datasets[0].data = this.displayedData;
    this.chart.update();
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}

