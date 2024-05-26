import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-footer',
  standalone: true,
  imports: [],
  templateUrl: './mobile-footer.component.html',
  styleUrl: './mobile-footer.component.scss'
})
export class MobileFooterComponent {

  goToBooking() {
    window.open("https://www.booking.com/hotel/it/a-casa-di-vito-custonaci.it.html", "_blank");
    window.open("https://www.booking.com/hotel/it/la-casa-di-cofano.it.html", "_blank");
  }

}
