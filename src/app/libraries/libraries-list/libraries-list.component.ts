import { Component } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';
import { GetLibraryNamesProcessorService }
	from '../../services/data-transport-processor/get-library-names-processor.service';
import { LibraryNamesData as libraryNames } from '../../data/runtime-state-data/library-names.data';


@Component({
	selector: 'libraries-list',
	templateUrl: './libraries-list.component.html'
})
export class LibrariesListComponent {

	noLibrariesMessage = 'You have no libraries right now';


	get names(): string[] {
		return libraryNames.data;
	}


	constructor(private __getLibrariesProcessor: GetLibraryNamesProcessorService) {
		if (noValue(libraryNames.data)) this.__getLibrariesProcessor.process();
	}

}
