import { Component } from '@angular/core';
import { SearchLibrariesInputService } from './search-libraries-input.service';
import { SearchLibrariesService } from './search-libraries.service';


@Component({
	selector: 'search-library-names',
	templateUrl: './search-library-names.component.html',
	styles: [
		`div.library-name-search-input-container {
			margin: 5px auto 10px 30px;
		}`,
		`clear-field-button {
			position: relative;  right: 35px; z-index: 1000;
		}`,
		`input {margin-left:auto;  margin-right: auto;  padding-right: 30px;}`
	]
})
export class SearchLibraryNamesComponent {

	get input() {
		return this.__seachLibrariesInput.data;
	}


	constructor(
		private __seachLibrariesInput: SearchLibrariesInputService,
		private __searchLibraries: SearchLibrariesService
	) {}


	search() {
		this.__searchLibraries.go();
	}

}
