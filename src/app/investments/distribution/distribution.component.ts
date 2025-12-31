import { CommonModule } from '@angular/common';
import { Investment } from '../DataStructures/models/investment';
import { Sector } from '../DataStructures/models/sector';
import { InvestmentsService } from './../services/investments.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-distribution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './distribution.component.html',
  styleUrl: './distribution.component.css'
})
export class DistributionComponent implements OnInit {
  @Input() isDetailed = false;
  investmentsBySector?: Investment[];
  investmentsBySectorDetailed?: Sector[]

  constructor (private investmentService: InvestmentsService) {}
  
  ngOnInit(): void {
    if (this.isDetailed) {
      // TODO: develop de logic
    } else {
      this.investmentsBySector = this.investmentService.getInvestmentsByUser();
    }
  }
}
