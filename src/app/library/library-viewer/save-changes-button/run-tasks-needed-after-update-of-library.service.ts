import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { DBLibrary } from '@interfaces/db-library';
import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { LibraryChangesService } from '@services/library/library-changes.service';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterUpdateOfLibraryService implements IDoThis {

	constructor(private __libraryChanges: LibraryChangesService) {
	}


	async go(result: DBLibrary) {
		// for security:
		delete result._id;
		delete result._user_id;


		loadedLibrary.data = result;
		this.__libraryChanges.unsetAll();
		alert.success = 'Library updated';
	}

}
