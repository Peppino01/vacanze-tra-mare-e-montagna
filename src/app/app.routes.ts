import { Routes } from '@angular/router';
import { MobileHomeComponent } from './mobile/mobile-home/mobile-home.component';
import { MobileCasaDiCofanoComponent } from './mobile/mobile-casa-di-cofano/mobile-casa-di-cofano.component';
import { MobileCasaDiVitoComponent } from './mobile/mobile-casa-di-vito/mobile-casa-di-vito.component';
import { DesktopHomeComponent } from './desktop/desktop-home/desktop-home.component';
import { DesktopCasaDiCofanoComponent } from './desktop/desktop-casa-di-cofano/desktop-casa-di-cofano.component';
import { DesktopCasaDiVitoComponent } from './desktop/desktop-casa-di-vito/desktop-casa-di-vito.component';
import { MobilePageNotFoundComponent } from './mobile/mobile-page-not-found/mobile-page-not-found.component';
import { DesktopPageNotFoundComponent } from './desktop/desktop-page-not-found/desktop-page-not-found.component';

export const mobileRoutes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MobileHomeComponent },
    { path: 'casa-di-cofano', component: MobileCasaDiCofanoComponent },
    { path: 'casa-di-vito', component: MobileCasaDiVitoComponent },
    { path: '**', component: MobilePageNotFoundComponent }
];

export const desktopRoutes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: DesktopHomeComponent },
    { path: 'casa-di-cofano', component: DesktopCasaDiCofanoComponent },
    { path: 'casa-di-vito', component: DesktopCasaDiVitoComponent },
    { path: '**', component: DesktopPageNotFoundComponent }
];

// Le rotte verranno poi assegnate nel costruttore di app.component.ts
export const routes: Routes = [];