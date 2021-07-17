import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { SearchData as search } from '@runtime-state-data/search.data';
import { SearchLibrariesService } from './search-libraries.service';


@Component({
	selector: 'clear-field-button',
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
export class ClearFieldButtonComponent {

	image = {
		src: environment.assets + 'clear-field-button.png',
		width: 16,
		height: 15
	};


	constructor(private __searchLibraries: SearchLibrariesService) {}


	clearSearch() {
		search.text = '';
		this.__searchLibraries.go();
	}

}
