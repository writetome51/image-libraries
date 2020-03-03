import { AlertService as alert } from '../../../alert.service';
import { DBLibrary } from '../../../../interfaces/db-library';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { Injectable } from '@angular/core';
import { LibraryChangesService } from '../../../library/library-changes.service';
import { LoadedLibraryData as loadedLibrary }
	from '../../../../data/runtime-state-data/static classes/loaded-library.data';


@Injectable({providedIn: 'root'})

export class UpdateLibraryResultProcessorService implements DirectProcessor {

	constructor(private __libraryChanges: LibraryChangesService) {
	}


	async process(result: DBLibrary) {
		// for security:
		delete result._id;
		delete result._user_id;


		loadedLibrary.data = result;
		this.__libraryChanges.unsetAll();
		alert.success = 'Library updated';
	}

}
