import { Component, Input } from '@angular/core';
import { JumpToPageInputService } from './jump-to-page-input.abstract.service';
import { PaginationControlsPaginator } from './pagination-controls-paginator.interface';


@Component({
	selector: 'app-pagination-controls',
	template: `
		<p *ngIf="totalPages > 0"> Page {{currentPage}} of {{totalPages}} </p>

		<nav *ngIf="totalPages > 1">
			<div>
				<previous-and-next-page-links
					[currentPage]="currentPage" [totalPages]="totalPages"
					[routeBeforePageNumber]="routeBeforePageNumber"
				></previous-and-next-page-links>

				<jump-to-page-controls *ngIf="jumpToPageInput"
					[input]="jumpToPageInput"
					[routeBeforePageNumber]="routeBeforePageNumber"
				></jump-to-page-controls>
			</div>
		</nav>

		<page-size-menu [paginator]="paginator"></page-size-menu>
	`
})
export class AppPaginationControlsComponent {

	@Input() paginator: PaginationControlsPaginator;
	@Input() routeBeforePageNumber: string;

	// Optional
	@Input() jumpToPageInput: JumpToPageInputService;

	get currentPage(): number { return this.paginator.getCurrentPageNumber(); }

	get totalPages(): number { return this.paginator.getTotalPages(); }

}
