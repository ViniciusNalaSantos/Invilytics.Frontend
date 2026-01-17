import { Component, Input } from '@angular/core';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
} from 'chart.js';

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

@Component({
  selector: 'app-line-graph',
  imports: [],
  templateUrl: './line-graph.html',
  styleUrl: './line-graph.css'
})
export class LineGraphComponent {
  @Input() title = '';
  private hasTitle = this.title != '';
  @Input() hasLegend = true;

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Sales',
            data: [120, 150, 180, 170, 200],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: this.hasTitle,
            text: this.title
          },
          legend: {
            display: this.hasLegend,
            position: 'bottom'
          }
        },
        scales: {
          x: {
            border: { color: '#000000' },
            ticks: { color: '#000000' },
            grid: { display: false }
          },
          y: {
            border: { color: '#000000' },
            ticks: { color: '#000000' },
            grid: { display: false }
          }
        }
      }
    });
  }
}
