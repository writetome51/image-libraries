import { Component, Input } from '@angular/core';
import { PaginatorService } from '../services/paginator/paginator.service';
import { ValidatingNumberInputService } from '@writetome51/validating-inputs';


@Component({
	selector: 'app-pagination-controls',
	templateUrl: './app-pagination-controls.component.html'
})
export class AppPaginationControlsComponent {

	@Input() paginator: PaginatorService;
	@Input() routeBeforePageNumber: string;
	@Input() jumpToPageNumberInput: ValidatingNumberInputService;


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
