import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-home',
  standalone: true,
  imports: [],
  templateUrl: './mobile-home.component.html',
  styleUrl: './mobile-home.component.scss'
})
export class MobileHomeComponent {

  constructor(private router: Router) {}

  goToPage(page: string) {
    this.router.navigate([page]);
  }

}
