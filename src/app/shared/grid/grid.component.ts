import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';


export interface Task {
  taskId: number;
  summary: string;
  priority: 'High' | 'Medium' | 'Low';
  assignee: string;
}

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatCheckboxModule, MatTableModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent {
  displayedColumns: string[] = [
    'select',
    'taskId',
    'summary',
    'priority',
    'assignee'
  ];

  dataSource = new MatTableDataSource<Task>([
    {
      taskId: 101,
      summary: 'Create Grid',
      priority: 'High',
      assignee: 'Cyber Cat'
    },
    {
      taskId: 102,
      summary: 'Build Example',
      priority: 'Medium',
      assignee: 'Caffeinated Owl'
    }
  ]);
}
