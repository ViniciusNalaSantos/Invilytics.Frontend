import { Component } from '@angular/core';
import { InvestmentsComponent } from "../investments/investments.component";

@Component({
  selector: 'app-investments-detailed',
  standalone: true,
  imports: [InvestmentsComponent],
  templateUrl: './investments-detailed.html',
  styleUrl: './investments-detailed.css',
})
export class InvestmentsDetailed {

}
