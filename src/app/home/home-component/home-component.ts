import { Component } from '@angular/core';
import { InformationCardComponent } from "../information-card-component/information-card-component";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [InformationCardComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
