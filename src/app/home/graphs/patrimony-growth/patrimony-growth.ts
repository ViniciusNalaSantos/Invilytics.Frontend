import { Component } from '@angular/core';
import { LineGraphComponent } from "../../../shared/graphs/line-graph/line-graph";
import { GraphLabelsDto } from '../../../shared/graphs/dtos/graph-data-dto';

@Component({
  selector: 'app-patrimony-growth',
  imports: [LineGraphComponent],
  templateUrl: './patrimony-growth.html',
  styleUrl: './patrimony-growth.css'
})
export class PatrimonyGrowthComponent {
  labels: GraphLabelsDto[] = [
      { key: 'jan', label: 'Jan' },
      { key: 'feb', label: 'Feb' },
      { key: 'may', label: 'May' },
      { key: 'apr', label: 'Apr' },
      { key: 'mar', label: 'Mar' }
    ];
  
    data: any[] = [
        {
        label: 'Sales',
        data: [{jan: 120}, {feb: 150}, {may:180}, {apr:170}, {mar:200}],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4
      }
    ];
}
