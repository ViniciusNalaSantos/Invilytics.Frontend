import { Component, OnInit } from '@angular/core';
import { Investment } from '../DataStructures/models/investment';
import { InvestmentsService } from '../services/investments.service';
import { CommonModule } from '@angular/common';
import { ExpandablePanelComponent } from "../expandable-panel/expandable-panel.component";

@Component({
  selector: 'app-distribution-general',
  standalone: true,
  imports: [CommonModule, ExpandablePanelComponent],
  templateUrl: './distribution-general.component.html',
  styleUrl: './distribution-general.component.css'
})
export class DistributionGeneralComponent implements OnInit {
  investmentsBySector?: Investment[];

  constructor (private investmentService: InvestmentsService) {}
  
  ngOnInit(): void {
    this.investmentsBySector = this.investmentService.getInvestmentsByUser();
  }
}
