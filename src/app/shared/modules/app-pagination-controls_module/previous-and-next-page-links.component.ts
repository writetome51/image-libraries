import { AppPaginationControlsComponent } from './app-pagination-controls.component';
import { Component } from '@angular/core';
import { HasContextInputDirective }
	from '@abstract-directives/has-context-input.abstract.directive';


@Component({
	selector: 'previous-and-next-page-links',
	template: `
		<a *ngIf="context.currentPage > 1" [routerLink]="previousPageLink">previous</a>
		<a *ngIf="context.currentPage < context.totalPages" [routerLink]="nextPageLink">next</a>
	`
})
export class PreviousAndNextPageLinksComponent
	extends HasContextInputDirective<AppPaginationControlsComponent> {

	get previousPageLink(): any[] {
		return ['/' + this.context.routeBeforePageNumber, this.context.currentPage - 1];
	}

	get nextPageLink(): any[] {
		return ['/' + this.context.routeBeforePageNumber, this.context.currentPage + 1];
	}

}
