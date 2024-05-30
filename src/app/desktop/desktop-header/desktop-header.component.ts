import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop-header',
  standalone: true,
  imports: [],
  templateUrl: './desktop-header.component.html',
  styleUrl: './desktop-header.component.scss'
})
export class DesktopHeaderComponent {

  constructor(private router: Router) {}

  goToPage(page: string) {
    this.router.navigate([page])
  }

}
