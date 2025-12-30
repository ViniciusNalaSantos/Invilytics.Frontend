import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestmentsComponent } from './investments/investments-component/investments.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvestmentsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
