import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-desktop-home',
  standalone: true,
  imports: [ TranslateModule ],
  templateUrl: './desktop-home.component.html',
  styleUrl: './desktop-home.component.scss'
})
export class DesktopHomeComponent {

  constructor(private router: Router) {}

  goToPage(page: string) {
    this.router.navigate([page])
  }
  
}
