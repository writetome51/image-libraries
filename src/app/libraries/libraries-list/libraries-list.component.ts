import { Component } from '@angular/core';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { AssureLibrariesAreStoredLocallyService }
	from '@services/assure-libraries-are-stored-locally.service';
import { SearchLibrariesProcessorService }
	from './search-libraries-processor/search-libraries-processor.service';


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
		private __assureLibrariesAreLoaded: AssureLibrariesAreStoredLocallyService,
		public searchLibrariesProcessor: SearchLibrariesProcessorService
	) {
		this.__assureLibrariesAreLoaded.go();
	}

}
