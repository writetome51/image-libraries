import { AlertService as alert } from '../../../alert.service';
import { CreatingNewLibraryData as creatingNewLibrary }
	from '../../../../data/creating-new-library.data';
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

		await this.__getLibrariesProcessor.process(); // refreshes CurrentUserLibrariesData.data
	}

}
