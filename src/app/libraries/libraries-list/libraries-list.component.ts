import { Component } from '@angular/core';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { AssureLibrariesAreLoadedService } from '@services/assure-libraries-are-loaded.service';
import { SearchLibrariesService } from './search-libraries.service';


@Component({
	selector: 'libraries-list',
	templateUrl: './libraries-list.component.html'
})
export class LibrariesListComponent {

	noLibrariesMessage = 'You have no libraries right now';


	get names(): string[] {
		return libraryNames.data;
	}


	constructor(
		private __assureLibrariesAreLoaded: AssureLibrariesAreLoadedService,
		public searchLibraries: SearchLibrariesService
	) {
		this.__assureLibrariesAreLoaded.go();
	}

}
