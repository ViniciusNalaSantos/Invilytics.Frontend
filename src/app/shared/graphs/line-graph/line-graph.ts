import { AfterViewInit, Component, Input } from '@angular/core';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
} from 'chart.js';
import { GraphLabelsDto, LineGraphDataDto } from '../dtos/graph-data-dto';

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
export class LineGraphComponent implements AfterViewInit {
  @Input() title = '';
  private hasTitle = false;
  @Input() hasLegend = true;
  @Input() labels: GraphLabelsDto[] = [];
  @Input() data: LineGraphDataDto[] = [];
  private displayedData: any[] = [];
  private displayedLabels: string[] = [];

  ngAfterViewInit() {
    this.hasTitle = !!this.title;

    this.buildChartData();
    this.buildLabels();
    this.createChart();
  }

  private buildChartData(): void {
    this.data.forEach(( singleData ) => {
      let displayableData = {
        label: singleData.label,
        data: this.orderValuesAccordingToLabelSequence(singleData.data),
        borderColor: singleData.borderColor,
        backgroundColor: singleData.backgroundColor,
        tension: singleData.tension
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

  private buildLabels(): void {
    this.displayedLabels = this.labels.map(l => l.label);
  }

  createChart() {
    new Chart('lineChart', {
      type: 'line',
      data: {
        labels: this.displayedLabels,
        datasets: this.displayedData
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
