import { Component, Input } from '@angular/core';
import { JumpToPageInputService } from './jump-to-page-input.service';


@Component({
	selector: 'app-pagination-controls',
	template: `
		<p *ngIf="totalPages > 0"> Page {{currentPage}} of {{totalPages}} </p>

		<nav *ngIf="totalPages > 1">
			<div>
				<page-link *ngIf="currentPage > 1"
					[pageNumber]="currentPage - 1" [routeBeforePage]="routeBeforePage"
				> previous </page-link>

				<page-link *ngIf="currentPage < totalPages"
					[pageNumber]="currentPage + 1" [routeBeforePage]="routeBeforePage"
				> next </page-link>

				<jump-to-page *ngIf="jumpToPageInput"
					[pageNumberInput]="jumpToPageInput.data" [routeBeforePage]="routeBeforePage"
				></jump-to-page>
			</div>
		</nav>
	`
})
export class AppPaginationControlsComponent {

	@Input() paginator: { getCurrentPageNumber: () => number, getTotalPages: () => number };
	@Input() routeBeforePage: string;

	// Optional
	@Input() jumpToPageInput: JumpToPageInputService;


	get currentPage(): number {
		return this.paginator.getCurrentPageNumber();
	}


	get totalPages(): number {
		return this.paginator.getTotalPages();
	}

}
