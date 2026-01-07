import { Component, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';


export interface GridColumn<T = any> {
  key: string;                 // property name
  header: string;              // header label
  type?: 'text' | 'input' | 'checkbox';
  width?: string;
  sortable?: boolean;
}


@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatCheckboxModule, MatTableModule, CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent {
  @Input() columns: GridColumn[] = [];
  @Input() data: any[] = [];
  @Input() selectable = false;

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [];

  ngOnChanges() {
    this.dataSource.data = this.data;
    this.displayedColumns = [
      ...(this.selectable ? ['select'] : []),
      ...this.columns.map(c => c.key)
    ];
  }
}
