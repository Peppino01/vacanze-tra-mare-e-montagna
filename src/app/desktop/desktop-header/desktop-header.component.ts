import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-desktop-header',
  standalone: true,
  imports: [ CommonModule, NgbDropdownModule ],
  templateUrl: './desktop-header.component.html',
  styleUrl: './desktop-header.component.scss'
})
export class DesktopHeaderComponent {

  constructor(
    private router: Router,
    public translate: TranslateService
  ) {}

  switchLanguage(language: any) {
    this.translate.use(language)
    localStorage.setItem('language', language)
  }

  goToPage(page: string) {
    this.router.navigate([page])
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

}
