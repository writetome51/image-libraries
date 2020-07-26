import { BackgroundProcessingStatusData as processingStatus }
	from '../../../data-structures/runtime-state-data/background-processing-status.data';
import { Component } from '@angular/core';
import { GetLibrariesProcessorService }	// tslint:disable-next-line:max-line-length
	from '../../shared/services/data-transport-processor/get-libraries-processor/get-libraries-processor.service';
import { LibraryNamesData as libraryNames }	// tslint:disable-next-line:max-line-length
	from '../../../data-structures/runtime-state-data/static-classes/resettable-to-default/library-names.data';
import { noValue } from '@writetome51/has-value-no-value';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../../shared/services/perform-data-process-requiring-waiting.service';


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
			this.__getLibrariesProcessor, processingStatus
		);
	}

}
