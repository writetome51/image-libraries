import { AppPaginationControlsComponent } from './app-pagination-controls.component';
import { Component } from '@angular/core';
import { HasContextInputDirective }
	from '@abstract-directives/has-context-input.abstract.directive';


@Component({
	selector: 'jump-to-page-controls',
	template: `
		<app-validating-form-input [data]="context.jumpToPageInput.data">
		</app-validating-form-input>

		<a [routerLink]="linkToRequestedPage">Go</a>
	`
})
export class JumpToPageControlsComponent
	extends HasContextInputDirective<AppPaginationControlsComponent> {

	get linkToRequestedPage() {
		return ['/' + this.context.routeBeforePageNumber, this.context.jumpToPageInputValue];
	}

}
