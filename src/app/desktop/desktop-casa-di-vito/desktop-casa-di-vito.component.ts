import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-desktop-casa-di-vito',
  standalone: true,
  imports: [ CommonModule, TranslateModule, NgbCarouselModule ],
  templateUrl: './desktop-casa-di-vito.component.html',
  styleUrl: './desktop-casa-di-vito.component.scss'
})
export class DesktopCasaDiVitoComponent {

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  images = [1, 2, 3, 4].map((n) => `assets/pictures/desktop/la casa di Vito/${n}.jpg`);
  isFullScreen: boolean = false;
  
  constructor() {}

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
    if (this.isFullScreen)
    {
      this.carousel.pause();
    }
    else
    {
      this.carousel.cycle();
    }
  }

  redirectTo(url: string) {
    window.location.href = url
  }

}
