import { Component, inject, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {

  private offcanvasService = inject(NgbOffcanvas);

  constructor(private router: Router) {}

	open(content: TemplateRef<any>) {
		this.offcanvasService.open(content);
	}

  goToPage(page: string) {
    this.router.navigate([page]);
    this.offcanvasService.dismiss()
  }

}
