import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { SearchData as search } from '@runtime-state-data/search.data';
import { SearchLibrariesService } from './search-libraries.service';


@Component({
	selector: 'clear-field-button',
	template: `<html-image [data]="image" role="button" (click)="clearSearch()"></html-image>`
})
export class ClearFieldButtonComponent {

	image = {
		src: environment.assets + 'clear-field-button.png',
		width: 22,
		height: 18,
		alt: 'clear-search',
		title: 'clear search'
	};


	constructor(private __searchLibraries: SearchLibrariesService) {}


	clearSearch() {
		search.text = '';
		this.__searchLibraries.go();
	}

}
