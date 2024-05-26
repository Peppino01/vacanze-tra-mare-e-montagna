import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { mobileRoutes, desktopRoutes } from './app.routes';
import { MobileHeaderComponent } from "./mobile/mobile-header/mobile-header.component";
import { DesktopHeaderComponent } from "./desktop/desktop-header/desktop-header.component";
import { MobileFooterComponent } from "./mobile/mobile-footer/mobile-footer.component";
import { DesktopFooterComponent } from "./desktop/desktop-footer/desktop-footer.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, MobileHeaderComponent, DesktopHeaderComponent, MobileFooterComponent, DesktopFooterComponent]
})
export class AppComponent {
  
  isMobile!: boolean
  
  constructor(
    private router: Router,
    private deviceService: DeviceDetectorService
  )
  {
    // Definisco le rotte in base al tipo di dispositivo dell'utente
    this.isMobile = this.deviceService.isMobile()
    if (this.isMobile)
    {
      this.router.resetConfig(mobileRoutes)
    }
    else
    {
      this.router.resetConfig(desktopRoutes)
    }
  }
  
}
