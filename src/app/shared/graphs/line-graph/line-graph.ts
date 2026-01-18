import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class LineGraphComponent implements AfterViewInit, OnChanges {
  @Input() title = '';
  private hasTitle = false;
  @Input() hasLegend = true;
  @Input() labels: GraphLabelsDto[] = [
    { key: 'jan', label: 'Jan' },
    { key: 'feb', label: 'Feb' },
    { key: 'may', label: 'May' },
    { key: 'apr', label: 'Apr' },
    { key: 'mar', label: 'Mar' }
  ];
  @Input() data: LineGraphDataDto[] = [
    {
      label: 'Sales',
      data: [{jan: 120}, {feb: 150}, {may:180}, {apr:170}, {mar:200}],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4
    }
  ];
  private displayedData: any[] = [];
  private displayedLabels: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.hasTitle = !!this.title;
  }

  ngAfterViewInit() {
    this.hasTitle = !!this.title;
    this.buildChartData();
    this.buildLabels();
    console.log(this.displayedData);
    console.log(this.displayedLabels);

    this.createChart();
  }

  private buildChartData(): void {
    this.data.forEach(( d ) => {
      let dataList = this.orderDataAccordingToLabelSequence(d.data);
      let displayableData = {
        label: d.label,
        data: dataList,
        borderColor: d.borderColor,
        backgroundColor: d.backgroundColor,
        tension: d.tension
      }
      this.displayedData.push(displayableData);
    });
  }

  private orderDataAccordingToLabelSequence(singleDataGraphDto: Record<string, number>[]): number[] {
    const result: number[] = [];

    this.labels.forEach(({ key, label }) => {
      const match = singleDataGraphDto.find(d => d[key] !== undefined);
      
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
