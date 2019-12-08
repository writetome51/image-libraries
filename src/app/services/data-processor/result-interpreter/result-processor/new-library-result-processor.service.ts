import { Injectable } from '@angular/core';
import { AlertService as alert } from '../../../alert.service';
import { ResultProcessor } from '../../../../../interfaces/result-processor';
import { DBLibrary } from '../../../../../interfaces/db-library';


@Injectable({providedIn: 'root'})

export class NewLibraryResultProcessorService implements ResultProcessor {

	process(result: DBLibrary) {
		if (result._user_id && result.name) alert.success = 'Library created';
	}

}
