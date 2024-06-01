import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-casa-di-vito',
  standalone: true,
  imports: [ TranslateModule ],
  templateUrl: './mobile-casa-di-vito.component.html',
  styleUrl: './mobile-casa-di-vito.component.scss'
})
export class MobileCasaDiVitoComponent {

  constructor(private router: Router) {}

  redirectTo(url: string) {
    window.location.href = url
  }

}
