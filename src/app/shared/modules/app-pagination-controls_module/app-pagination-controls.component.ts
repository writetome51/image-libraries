import { Component, Input } from '@angular/core';
import { JumpToPageInputService } from './jump-to-page-input.abstract.service';


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

		<label for="page-size-menu">Images per page:</label>
		<select name="page-size-menu" id="page-size-menu">
			<option *ngFor="let size of pageSizes"
				[value]="size" [(ngModel)]="chosenSize" [selected]="size === defaultSize"
			>{{size}}
			</option>
  		</select>
	`
})
export class AppPaginationControlsComponent {

	@Input() paginator: { getCurrentPageNumber: () => number, getTotalPages: () => number };
	@Input() routeBeforePageNumber: string;

	// Optional
	@Input() jumpToPageInput: JumpToPageInputService;

	defaultSize = 20;
	pageSizes = [10, this.defaultSize, 30, 40];
	chosenSize;

	get currentPage(): number { return this.paginator.getCurrentPageNumber(); }

	get totalPages(): number { return this.paginator.getTotalPages(); }

}
