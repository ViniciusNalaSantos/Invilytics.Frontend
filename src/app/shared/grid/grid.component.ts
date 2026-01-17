import { Component, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormatValuePipe } from '../pipes/format-value-pipe/format-value-pipe';


export interface GridColumn {
  key: string;                 // property name
  header: string;              // header label
  type?: 'currency' | 'percent';
  width?: string;
  sortable?: boolean;
  isEmphasized?: boolean;
}


@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatCheckboxModule, MatTableModule, CommonModule, FormatValuePipe],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent {
  @Input() columns: GridColumn[] = [];
  @Input() data: any[] = [];

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [];

  ngOnChanges() {
    this.dataSource.data = this.data;
    this.displayedColumns = [
      ...this.columns.map(c => c.key)
    ];
  }

  getCellClass(column: any) {
    return {
      'text-md md:text-lg font-(family-name:--font-montserrat)': true,
      'font-bold text-[#111F4D] font-(family-name:--font-nunito)': column.isEmphasized,
    };
  }
}
