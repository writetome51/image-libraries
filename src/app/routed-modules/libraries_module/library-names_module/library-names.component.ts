import { Component } from '@angular/core';
import { HasDataInputDirective } from '@abstract-directives/has-data-input.abstract.directive';


@Component({
	selector: 'library-names',
	template: `
		<div>

			<p *ngIf="data && data.length === 0">{{noLibrariesMessage}}</p>

			<ng-container *ngIf="data && data.length > 0">

				<search-library-names></search-library-names>

				<library-links [labels]="data"></library-links>

			</ng-container>
		</div>
	`
})
export class LibraryNamesComponent extends HasDataInputDirective<string[]> {

	noLibrariesMessage = 'You have no libraries right now';

}
