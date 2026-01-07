import { Component, OnInit } from '@angular/core';
import { Investment } from '../data-structures/models/investment';
import { InvestmentsService } from '../services/investments.service';
import { CommonModule } from '@angular/common';
import { ExpandablePanelComponent } from "../expandable-panel/expandable-panel.component";
import { GridColumn, GridComponent } from "../../shared/grid/grid.component";

@Component({
  selector: 'app-distribution-general',
  standalone: true,
  imports: [CommonModule, ExpandablePanelComponent, GridComponent],
  templateUrl: './distribution-general.component.html',
  styleUrl: './distribution-general.component.css'
})
export class DistributionGeneralComponent implements OnInit {
  investmentsBySector?: Investment[];
  columns: GridColumn<any>[] = [
    { key: 'taskId', header: 'ID' },
    { key: 'summary', header: 'Summary' },
    { key: 'priority', header: 'Priority' },
    { key: 'assignee', header: 'Assignee', type: 'input' }
  ];
  
  tasks: any[] = [
    { taskId: 1, summary: 'Fix bug', priority: 'High', assignee: 'Ana' },
    { taskId: 2, summary: 'Refactor', priority: 'Low', assignee: 'Carlos' }
  ];
  

  constructor (private investmentService: InvestmentsService) {}
  
  ngOnInit(): void {
    this.investmentsBySector = this.investmentService.getInvestmentsByUser();
  }
}
