import { Injectable } from '@angular/core';
import { AlertService as alert } from '../../../alert.service';
import { DBLibrary } from '../../../../interfaces/db-library';
import { DirectProcessor } from '../../../../interfaces/direct-processor';


@Injectable({providedIn: 'root'})

export class NewLibraryResultProcessorService implements DirectProcessor {

	process(result: DBLibrary) {
		if (result._user_id && result.name) alert.success = 'Library created';
	}

}
