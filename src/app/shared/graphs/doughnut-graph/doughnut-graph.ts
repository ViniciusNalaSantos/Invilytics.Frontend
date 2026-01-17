import { Component, AfterViewInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
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
  imports: [],
  templateUrl: './doughnut-graph.html',
  styleUrl: './doughnut-graph.css',
})
export class DoughnutGraph implements AfterViewInit, OnChanges {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;
  private displayedData: number[] = [];
  private displayedLabels: string[] = [];

  @Input() labels: GraphLabelsDto[] = [];
  @Input() data: any[] = [];
  @Input() colors: string[] = ['#111F4D', '#393E46', '#E9ECF1'];

  ngOnChanges(changes: SimpleChanges): void {
    this.data.forEach(c => this.displayedData.push(c));
    this.displayedLabels = [
      ...this.data.map(c => c.key)
    ];
  }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.displayedLabels,
        datasets: [{
          data: this.data,
          backgroundColor: this.colors,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
  
  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
