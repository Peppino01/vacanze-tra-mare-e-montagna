import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-casa-di-vito',
  standalone: true,
  imports: [ CommonModule, TranslateModule, NgbCarouselModule ],
  templateUrl: './mobile-casa-di-vito.component.html',
  styleUrl: './mobile-casa-di-vito.component.scss'
})
export class MobileCasaDiVitoComponent {

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((n) => `assets/pictures/mobile/la casa di Cofano/${n}.jpg`);
  isFullScreen: boolean = false;
  
  constructor() {}

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
    if (this.isFullScreen)
      this.carousel.pause();
    else
      this.carousel.cycle();
  }

  redirectTo(url: string) {
    window.location.href = url
  }

}
