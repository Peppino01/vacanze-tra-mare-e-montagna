import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-desktop-casa-di-cofano',
  standalone: true,
  imports: [ CommonModule, TranslateModule, NgbCarouselModule ],
  templateUrl: './desktop-casa-di-cofano.component.html',
  styleUrl: './desktop-casa-di-cofano.component.scss'
})
export class DesktopCasaDiCofanoComponent {

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  images = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `assets/pictures/desktop/la casa di Cofano/${n}.jpg`);
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
