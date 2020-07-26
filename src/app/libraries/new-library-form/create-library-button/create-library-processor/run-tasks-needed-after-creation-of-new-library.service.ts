import { AlertData as alert }
	from '../../../../shared/data/runtime-state/static-classes/alert.data';
import { DBLibrary } from '../../../../shared/interfaces/db-library';
import { Injectable } from '@angular/core';
import { GetLibrariesProcessorService }
	from '../../../../shared/services/data-transport-processor/get-libraries-processor/get-libraries-processor.service';
import { NewLibraryData as newLibrary }
	from '../../../../shared/data/runtime-state/new-library.data';
import { IDoThis } from '../../../../shared/interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterCreationOfNewLibraryService implements IDoThis {

	constructor(private __getLibrariesProcessor: GetLibrariesProcessorService) {
	}


	async go(result: DBLibrary) {
		alert.success = 'Library created';
		newLibrary.beingCreated = false;

		await this.__refreshLoadedLibraryNames();
	}


	private async __refreshLoadedLibraryNames() {
		await this.__getLibrariesProcessor.process();
	}

}
