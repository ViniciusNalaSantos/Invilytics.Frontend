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
    this.labels.forEach(label => {
      const dataObj = this.data.find(d => d[label.key] !== undefined);
      if (dataObj) {
        this.displayedData.push(dataObj[label.key]);
        this.displayedLabels.push(label.label);
      }
    });
  }

  ngAfterViewInit(): void {
    if (!this.data || !this.labels) return;


    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.displayedLabels,
        datasets: [{
          data: this.displayedData,
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
