import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestmentsComponent } from './investments/investments-component/investments.component';
import { HomeComponent } from "./home/home-component/home-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvestmentsComponent, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
