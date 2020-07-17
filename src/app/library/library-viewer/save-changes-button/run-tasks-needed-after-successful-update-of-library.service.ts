import { AlertData as alert }
	from '../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { DBLibrary } from '../../../../interfaces/db-library';
import { Injectable } from '@angular/core';
import { LibraryChangesService } from '../../../services/library/library-changes.service';
import { LoadedLibraryData as loadedLibrary }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-library.data';
import { IDoThis } from '../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulUpdateOfLibraryService implements IDoThis {

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
