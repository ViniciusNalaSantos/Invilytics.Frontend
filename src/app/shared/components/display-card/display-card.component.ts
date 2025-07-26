import { Component, input } from '@angular/core';

@Component({
  selector: 'app-display-card',
  imports: [],
  templateUrl: './display-card.component.html',
  styleUrl: './display-card.component.scss'
})
export class DisplayCardComponent {    
  title = input<string>("Title DisplayCard");
}
