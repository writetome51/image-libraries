import { AlertData as alert }
	from '../../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { DBLibrary } from '../../../../../../interfaces/db-library';
import { Injectable } from '@angular/core';
import { GetLibraryNamesProcessorService } from '../../../get-library-names-processor.service';
import { NewLibraryData as newLibrary }
	from '../../../../../../data-structures/runtime-state-data/new-library.data';
import { IDoThis } from '../../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulCreationOfNewLibraryService implements IDoThis {

	constructor(private __getLibraryNamesProcessor: GetLibraryNamesProcessorService) {
	}


	async go(result: DBLibrary) {
		alert.success = 'Library created';
		newLibrary.beingCreated = false;

		await this.__refreshLoadedLibraryNames();
	}


	private async __refreshLoadedLibraryNames() {
		await this.__getLibraryNamesProcessor.process();
	}

}
