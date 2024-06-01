import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [ CommonModule, NgbDropdownModule ],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {

  private offcanvasService = inject(NgbOffcanvas);

  constructor(
    private router: Router,
    public translate: TranslateService
  ) {}

  switchLanguage(language: any) {
    this.translate.use(language)
    this.offcanvasService.dismiss()
    localStorage.setItem('language', language)
  }

	open(content: TemplateRef<any>) {
		this.offcanvasService.open(content)
	}

  goToPage(page: string) {
    this.router.navigate([page])
    this.offcanvasService.dismiss()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

}
