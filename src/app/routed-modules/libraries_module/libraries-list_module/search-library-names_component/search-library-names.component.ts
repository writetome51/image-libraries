import { Component } from '@angular/core';
import { SearchLibrariesInputService } from './search-libraries-input.service';
import { SearchLibrariesService } from './search-libraries.service';


@Component({
	selector: 'search-library-names',
	templateUrl: './search-library-names.component.html'
})
export class SearchLibraryNamesComponent {

	get input() {
		return this.__seachLibrariesInput.data;
	}

	constructor(
		private __seachLibrariesInput: SearchLibrariesInputService,
		private __searchLibraries: SearchLibrariesService
	) {
	}


	search() {
		this.__searchLibraries.go();
	}

}
