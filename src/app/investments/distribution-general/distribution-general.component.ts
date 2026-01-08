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
    { key: 'assetsListed', header: 'Assets Listed', isEmphasized: true },
    { key: 'position', header: 'Position', type: 'currency' },
    { key: 'invested', header: 'Invested', type: 'currency' },
    { key: 'grossYield', header: 'Gross Yield', type: 'percent' },
    { key: 'yieldWithouDividends', header: 'Yield w/o Dividends', type: 'percent' },
    { key: 'dividentYield', header: 'Dividend Yield', type: 'percent' },
  ];
  
  tasks: any[] = [
    { assetsListed: "Imóveis Industriais e L...", position: 1234, invested: 1000, grossYield: 0.2, yieldWithouDividends: 0.8, dividentYield: 0.18 },
    { assetsListed: "Shopping", position: 1234, invested: 1000, grossYield: 0.2, yieldWithouDividends: 0.8, dividentYield: 0.18 },
    { assetsListed: "Fiagro", position: 1234, invested: 1000, grossYield: 0.2, yieldWithouDividends: 0.8, dividentYield: 0.18 }
  ];
  

  constructor (private investmentService: InvestmentsService) {}
  
  ngOnInit(): void {
    this.investmentsBySector = this.investmentService.getInvestmentsByUser();
  }
}
