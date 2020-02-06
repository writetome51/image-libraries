import { AlertService as alert } from '../../../alert.service';
import { CreatingNewLibraryData as creatingNewLibrary }
	from '../../../../runtime-state-data/creating-new-library.data';
import { DBLibrary } from '../../../../interfaces/db-library';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { Injectable } from '@angular/core';
import { GetLibraryNamesProcessorService } from '../../get-library-names-processor.service';


@Injectable({providedIn: 'root'})

export class NewLibraryResultProcessorService implements DirectProcessor {

	constructor(private __getLibrariesProcessor: GetLibraryNamesProcessorService) {
	}


	async process(result: DBLibrary) {
		if (result._user_id && result.name) alert.success = 'Library created';
		creatingNewLibrary.status = false;

		await this.__getLibrariesProcessor.process(); // refreshes LibraryNamesData.data
	}

}
