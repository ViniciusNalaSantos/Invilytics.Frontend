import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

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
export class DoughnutGraph implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;
  
  ngOnDestroy(): void {
    this.chart?.destroy();
  }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Pending', 'Failed'],
        datasets: [{
          data: [60, 25, 15],
          backgroundColor: [
            '#111F4D',
            '#393E46',
            '#E9ECF1'
          ],
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
  
}
