import { Component } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';
import { GetLibraryNamesProcessorService }
	from '../../services/data-transport-processor/get-library-names-processor.service';
import { LibraryNamesData as libraryNames } from '../../data/runtime-state-data/static-classes/library-names.data';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../../services/perform-data-process-requiring-waiting.service';
import { OperationStatusData as operationStatus }
	from '../../data/runtime-state-data/operation-status.data';


@Component({
	selector: 'libraries-list',
	templateUrl: './libraries-list.component.html'
})
export class LibrariesListComponent {

	noLibrariesMessage = 'You have no libraries right now';


	get names(): string[] {
		return libraryNames.data;
	}


	constructor(private __getLibraryNamesProcessor: GetLibraryNamesProcessorService) {
		if (noValue(libraryNames.data)) performDataProcessRequiringWaiting.go(
			this.__getLibraryNamesProcessor, operationStatus
		);
	}

}
