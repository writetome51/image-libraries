import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import {
	LibraryNameSearchResultsData as libNameSearchResults,
	SearchData as search
} from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'clear-search-field-button',
	template: `
		<div [style.display]="'inline-block'" [style.position]="'relative'"
			 [style.top]="'3px'"
			 [style.width]="image.width + 'px'"
			 [style.height]="image.height + 'px'"
			 [style.background-image]="'url(' + image.src + ')'"
			 [style.background-repeat]="'no-repeat'"
			 role="button"
			 (click)="clearSearch()"
		></div>
	`
})
export class ClearSearchFieldButtonComponent {

	image = {
		src: environment.assets + 'clear-field-button.png',
		width: 16,
		height: 15
	};


	clearSearch() {
		search.text = '';
		libNameSearchResults.data = undefined;
	}

}
