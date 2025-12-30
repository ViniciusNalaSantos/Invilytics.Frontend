import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestmentsComponentComponent } from './investments/investments-component/investments-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvestmentsComponentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
