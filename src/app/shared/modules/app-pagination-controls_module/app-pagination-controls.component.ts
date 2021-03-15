import { Component, Input } from '@angular/core';
import { JumpToPageInputService } from './jump-to-page-input.abstract.service';


@Component({
	selector: 'app-pagination-controls',
	template: `
		<p *ngIf="totalPages > 0"> Page {{currentPage}} of {{totalPages}} </p>

		<nav *ngIf="totalPages > 1">
			<div>

				<page-link *ngIf="currentPage > 1"
					[pageNumber]="currentPage - 1"  [routeBeforePageNumber]="routeBeforePageNumber"
				> previous
				</page-link>

				<page-link *ngIf="currentPage < totalPages"
					[pageNumber]="currentPage + 1"  [routeBeforePageNumber]="routeBeforePageNumber"
				> next
				</page-link>

				<jump-to-page *ngIf="jumpToPageInput"
					[pageNumberInput]="jumpToPageInput.data"
					[routeBeforePageNumber]="routeBeforePageNumber"
				></jump-to-page>

			</div>
		</nav>
	`
})
export class AppPaginationControlsComponent {

	@Input() paginator: { getCurrentPageNumber: () => number, getTotalPages: () => number };
	@Input() routeBeforePageNumber: string;

	// Optional
	@Input() jumpToPageInput: JumpToPageInputService;


	get currentPage(): number {
		return this.paginator.getCurrentPageNumber();
	}


	get totalPages(): number {
		return this.paginator.getTotalPages();
	}

}
