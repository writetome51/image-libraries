import { Component, Input } from '@angular/core';
import { JumpToPageNumberInputService }
	from '../services/validating-input/jump-to-page-number-input.service';


@Component({
	selector: 'app-pagination-controls',
	templateUrl: './app-pagination-controls.component.html'
})
export class AppPaginationControlsComponent {

	@Input() paginator: { currentPageNumber: number, totalPages: number };
	@Input() routeBeforePageNumber: string;


	// Optional

	@Input() jumpToPageInput: JumpToPageNumberInputService;


	get currentPage() {
		return this.paginator.currentPageNumber;
	}


	get totalPages() {
		return this.paginator.totalPages;
	}


	get nextPage() {
		return this.paginator.currentPageNumber + 1;
	}


	get previousPage() {
		return this.paginator.currentPageNumber - 1;
	}

}