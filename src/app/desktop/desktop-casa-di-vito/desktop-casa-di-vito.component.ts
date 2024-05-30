import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop-casa-di-vito',
  standalone: true,
  imports: [],
  templateUrl: './desktop-casa-di-vito.component.html',
  styleUrl: './desktop-casa-di-vito.component.scss'
})
export class DesktopCasaDiVitoComponent {

  redirectTo(url: string) {
    window.location.href = url
  }

}
