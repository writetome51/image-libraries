import { Component, Input } from '@angular/core';
import { JumpToPageInputService } from './jump-to-page-input.service';


@Component({
	selector: 'app-pagination-controls',
	templateUrl: './app-pagination-controls.component.html'
})
export class AppPaginationControlsComponent {

	@Input() paginator: { getCurrentPageNumber: () => number, getTotalPages: () => number };
	@Input() routeBeforePageNumber: string;

	// Optional
	@Input() jumpToPageInput: JumpToPageInputService;


	getCurrentPage() {
		return this.paginator.getCurrentPageNumber();
	}


	getTotalPages() {
		return this.paginator.getTotalPages();
	}


	getNextPage() {
		return this.paginator.getCurrentPageNumber() + 1;
	}


	getPreviousPage() {
		return this.paginator.getCurrentPageNumber() - 1;
	}

}
