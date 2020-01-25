import { AlertData as alert } from '../../../../data/alert.data';
import { DBLibrary } from '../../../../interfaces/db-library';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { Injectable } from '@angular/core';
import { CurrentLibrarySetterService as librarySetter}
	from '../../../library/current-library-setter.service';


@Injectable({providedIn: 'root'})

export class UpdateLibraryResultProcessorService implements DirectProcessor {

	async process(result: DBLibrary) {

		if (result._user_id && result.name) {
			// for security:
			delete result._id;
			delete result._user_id;

			librarySetter.set(result);
			alert.success = 'Library updated';
		}
	}

}
