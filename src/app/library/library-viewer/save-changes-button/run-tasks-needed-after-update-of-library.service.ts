import { AlertData as alert }
	from '../../../shared/data/runtime-state/static-classes/alert.data';
import { DBLibrary } from '../../../shared/interfaces/db-library';
import { Injectable } from '@angular/core';
import { LibraryChangesService } from '../../../shared/services/library/library-changes.service';
import { LoadedLibraryData as loadedLibrary }
	from '../../../shared/data/runtime-state/static-classes/resettable-to-default/loaded-library.data';
import { IDoThis } from '../../../shared/interfaces/i-do-this';


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
