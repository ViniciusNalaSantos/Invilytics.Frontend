import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css',
})
export class ContentCardComponent {
  @Input() title = '';
}
