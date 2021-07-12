import { Component, Input } from '@angular/core';
import { JumpToPageInputService } from '@validating-input/jump-to-page-input.abstract.service';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';


@Component({
	selector: 'app-pagination-controls',
	template: `
		<p *ngIf="totalPages > 0"> Page {{currentPage}} of {{totalPages}} </p>

		<nav *ngIf="totalPages > 1">
			<div>
				<a [class.invisible]="!(currentPage > 1)" [routerLink]="previousPageLink">
					previous
				</a>

				<jump-to-page-controls *ngIf="jumpToPageInput" [context]="this">
				</jump-to-page-controls>

				<a [class.invisible]="!(currentPage < totalPages)" [routerLink]="nextPageLink">
					next
				</a>
			</div>
		</nav>

		<page-size-menu [paginator]="paginator"></page-size-menu>
	`
})
export class AppPaginationControlsComponent {

	@Input() paginator: AppPaginatorService;
	@Input() routeBeforePageNumber: string;

	// Optional
	@Input() jumpToPageInput: JumpToPageInputService;

	get currentPage(): number { return this.paginator.getCurrentPageNumber(); }

	get totalPages(): number { return this.paginator.getTotalPages(); }

	get jumpToPageInputValue():number {
		return this.jumpToPageInput.getValue();
	}

	get previousPageLink(): any[] {
		return ['/' + this.routeBeforePageNumber, this.currentPage - 1];
	}

	get nextPageLink(): any[] {
		return ['/' + this.routeBeforePageNumber, this.currentPage + 1];
	}

}
