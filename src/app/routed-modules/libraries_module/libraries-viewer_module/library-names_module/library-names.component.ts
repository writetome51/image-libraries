import { Component } from '@angular/core';
import { HasDataInputDirective } from '@abstract-directives/has-data-input.abstract.directive';


@Component({
	selector: 'library-names',
	template: `
		<div>
			<ng-container *ngIf="data && data.length > 0">

				<library-links [labels]="data"></library-links>

			</ng-container>
		</div>
	`
})
export class LibraryNamesComponent extends HasDataInputDirective<string[]> {}
