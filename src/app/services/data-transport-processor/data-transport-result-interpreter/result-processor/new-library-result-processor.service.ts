import { AlertService as alert } from '../../../alert.service';
import { DBLibrary } from '../../../../../interfaces/db-library';
import { DirectProcessor } from '../../../../../interfaces/direct-processor';
import { Injectable } from '@angular/core';
import { GetLibraryNamesProcessorService } from '../../get-library-names-processor.service';
import { NewLibraryData as newLibrary }
	from '../../../../../data-structures/runtime-state-data/new-library.data';


@Injectable({providedIn: 'root'})

export class NewLibraryResultProcessorService implements DirectProcessor {

	constructor(private __getLibraryNamesProcessor: GetLibraryNamesProcessorService) {
	}


	async process(result: DBLibrary) {
		alert.success = 'Library created';
		newLibrary.beingCreated = false;

		await this.__getLibraryNamesProcessor.process(); // refreshes LibraryNamesData.data
	}

}
