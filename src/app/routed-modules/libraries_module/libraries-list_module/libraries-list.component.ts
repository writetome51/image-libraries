import { Component } from '@angular/core';
import { UserLibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'libraries-list',
	template: `
		<div>
			<big-loading-spinner *ngIf="!(labels)"></big-loading-spinner>

			<p *ngIf="labels && labels.length === 0">{{noLibrariesMessage}}</p>

			<ng-container *ngIf="labels && labels.length > 0">

				<search-library-names></search-library-names>

				<ul>
					<li *ngFor="let label of labels">
						<a [routerLink]="['/library', label, 'page', 1]">{{ label }}</a>
					</li>
				</ul>

			</ng-container>
		</div>
	`
})
export class LibrariesListComponent {

	noLibrariesMessage = 'You have no libraries right now';


	get labels(): string[] {
		return libraryNames.data;
	}

}
