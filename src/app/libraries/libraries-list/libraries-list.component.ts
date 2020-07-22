import { Component } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';
import { GetLibrariesProcessorService }
	from '../../shared/services/data-transport-processor/get-libraries-processor/get-libraries-processor.service';
import { LibraryNamesData as libraryNames }
	from '../../../data-structures/runtime-state-data/static-classes/resettable-to-default/library-names.data';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../../shared/services/perform-data-process-requiring-waiting.service';
import { BackgroundProcessingStatusData as operationStatus }
	from '../../../data-structures/runtime-state-data/background-processing-status.data';


@Component({
	selector: 'libraries-list',
	templateUrl: './libraries-list.component.html'
})
export class LibrariesListComponent {

	noLibrariesMessage = 'You have no libraries right now';


	get names(): string[] {
		return libraryNames.data;
	}


	constructor(private __getLibrariesProcessor: GetLibrariesProcessorService) {
		if (noValue(libraryNames.data)) performDataProcessRequiringWaiting.go(
			this.__getLibrariesProcessor, operationStatus
		);
	}

}
