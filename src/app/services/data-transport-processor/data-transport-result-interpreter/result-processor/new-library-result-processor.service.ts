import { Injectable } from '@angular/core';
import { AlertService as alert } from '../../../alert.service';
import { DBLibrary } from '../../../../interfaces/db-library';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { CurrentUserLibrariesService } from '../../../library/current-user-libraries.service';
import { CreatingNewLibraryService as creatingNewLibrary} from '../../../creating-new-library.service';
import { CurrentLibraryService as currentLibrary } from '../../../library/current-library.service';


@Injectable({providedIn: 'root'})

export class NewLibraryResultProcessorService implements DirectProcessor {

	constructor(private __currentUserLibraries: CurrentUserLibrariesService) {
	}


	async process(result: DBLibrary) {
		if (result._user_id && result.name) alert.success = 'Library created';
		creatingNewLibrary.status = false;

		await this.__currentUserLibraries.set_data();
		currentLibrary.libName = '';
	}

}
