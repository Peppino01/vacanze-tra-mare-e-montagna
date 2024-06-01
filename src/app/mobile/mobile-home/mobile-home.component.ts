import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-home',
  standalone: true,
  imports: [ TranslateModule ],
  templateUrl: './mobile-home.component.html',
  styleUrl: './mobile-home.component.scss'
})
export class MobileHomeComponent {

  constructor(private router: Router) {}

  goToPage(page: string) {
    this.router.navigate([page])
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

}
