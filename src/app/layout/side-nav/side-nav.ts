import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIcon, RouterLink, RouterLinkActive],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.css',
})
export class SideNavComponent {

}
