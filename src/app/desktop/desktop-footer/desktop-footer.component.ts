import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop-footer',
  standalone: true,
  imports: [],
  templateUrl: './desktop-footer.component.html',
  styleUrl: './desktop-footer.component.scss'
})
export class DesktopFooterComponent {

  goToBooking() {
    window.open("https://www.booking.com/hotel/it/a-casa-di-vito-custonaci.it.html", "_blank");
    window.open("https://www.booking.com/hotel/it/la-casa-di-cofano.it.html", "_blank");
  }

}
