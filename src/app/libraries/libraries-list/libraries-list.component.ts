import { Component } from '@angular/core';
import { MakeSureLibrariesAreLoadedService } from '@services/make-sure-libraries-are-loaded.service';
import { LocalLibrariesService } from '@services/local-storage-data/local-libraries.service';
import { getObjectFromJSON } from 'get-object-from-json';
import { hasValue } from '@writetome51/has-value-no-value';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { BackgroundProcessingStatusData as processingStatus }
	from '@runtime-state-data/background-processing-status.data';


@Component({
	selector: 'libraries-list',
	templateUrl: './libraries-list.component.html'
})
export class LibrariesListComponent {


	noLibrariesMessage = 'You have no libraries right now';

	get gettingLibraries() {
		return processingStatus.waiting;
	}


	get names(): string[] {
		return libraryNames.data;
	}


	constructor(
		private __makeSureLibrariesAreLoaded: MakeSureLibrariesAreLoadedService,
		private __localLibraries: LocalLibrariesService
	) {
		this.__makeSureLibrariesAreLoaded.go();
	}

}
