import { Component } from '@angular/core';
import { InvestmentsComponent } from "../investments/investments.component";

@Component({
  selector: 'app-investments-by-sector',
  standalone: true,
  imports: [InvestmentsComponent],
  templateUrl: './investments-by-sector.html',
  styleUrl: './investments-by-sector.css',
})
export class InvestmentsBySector {
  
}
