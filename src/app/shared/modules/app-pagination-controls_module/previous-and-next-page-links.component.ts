import { Component, Input } from '@angular/core';


@Component({
	selector: 'previous-and-next-page-links',
	template: `
		<a *ngIf="currentPage > 1" [routerLink]="previousPageLink">previous</a>

		<a *ngIf="currentPage < totalPages" [routerLink]="nextPageLink">next</a>
	`
})
export class PreviousAndNextPageLinksComponent {

	@Input() currentPage: number;
	@Input() totalPages: number;
	@Input() routeBeforePageNumber: string;


	get previousPageLink(): any[] {
		return ['/' + this.routeBeforePageNumber, this.currentPage - 1];
	}


	get nextPageLink(): any[] {
		return ['/' + this.routeBeforePageNumber, this.currentPage + 1];
	}

}
