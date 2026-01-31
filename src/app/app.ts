import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestmentsComponent } from './investments/investments-component/investments.component';
import { HomeComponent } from "./home/home/home.component";
import { SideNavComponent } from "./layout/side-nav/side-nav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvestmentsComponent, HomeComponent, SideNavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
