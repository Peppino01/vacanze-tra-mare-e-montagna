import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { mobileRoutes, desktopRoutes } from './app.routes';
import { MobileHeaderComponent } from "./mobile/mobile-header/mobile-header.component";
import { DesktopHeaderComponent } from "./desktop/desktop-header/desktop-header.component";
import { MobileFooterComponent } from "./mobile/mobile-footer/mobile-footer.component";
import { DesktopFooterComponent } from "./desktop/desktop-footer/desktop-footer.component";
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, MobileHeaderComponent, DesktopHeaderComponent, MobileFooterComponent, DesktopFooterComponent, TranslateModule]
})
export class AppComponent {
  
  isMobile!: boolean
  
  constructor(
    private router: Router,
    private deviceService: DeviceDetectorService,
    public translate: TranslateService
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

    // Configuro la lingua
    translate.addLangs(['en', 'it'])
    this.translate.setDefaultLang('it'); // Viene utilizzata solo in caso non sia selezionata nessuna lingua o una traduzione della lingua selezionata non sia disponibile
    translate.use(localStorage.getItem('language') || 'it')
    
  }
  
}
