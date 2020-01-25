import { AlertService as alert } from '../../../alert.service';
import { CreatingNewLibraryService as creatingNewLibrary }
	from '../../../creating-new-library.service';
import { DBLibrary } from '../../../../interfaces/db-library';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { Injectable } from '@angular/core';
import { GetLibrariesProcessorService } from '../../get-libraries-processor.service';


@Injectable({providedIn: 'root'})

export class NewLibraryResultProcessorService implements DirectProcessor {

	constructor(private __getLibrariesProcessor: GetLibrariesProcessorService) {
	}


	async process(result: DBLibrary) {
		if (result._user_id && result.name) alert.success = 'Library created';
		creatingNewLibrary.status = false;

		await this.__getLibrariesProcessor.process(); // refreshes CurrentUserLibrariesService.data
	}

}
