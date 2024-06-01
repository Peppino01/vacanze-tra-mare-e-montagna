import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-desktop-casa-di-cofano',
  standalone: true,
  imports: [ TranslateModule ],
  templateUrl: './desktop-casa-di-cofano.component.html',
  styleUrl: './desktop-casa-di-cofano.component.scss'
})
export class DesktopCasaDiCofanoComponent {

  redirectTo(url: string) {
    window.location.href = url
  }

}
