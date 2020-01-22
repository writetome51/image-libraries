import { AlertService as alert } from '../../../alert.service';
import { DBLibrary } from '../../../../interfaces/db-library';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { Injectable } from '@angular/core';
import { CurrentLibraryService } from '../../../library/current-library.service';


@Injectable({providedIn: 'root'})

export class UpdateLibraryResultProcessorService implements DirectProcessor {

	constructor(private __currentLibrary: CurrentLibraryService) {
	}


	async process(result: DBLibrary) {

		if (result._user_id && result.name) {
			// for security:
			delete result._id;
			delete result._user_id;

			this.__currentLibrary.set_data(result);
			alert.success = 'Library updated';
		}
	}

}
