import { AlertsService as alerts } from '@services/alerts.service';
import { LibraryRecord } from '@interfaces/library-record.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LibraryChangesService } from '@services/library/library-changes.service';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterUpdateOfLibraryService implements IDoThis {

	constructor(
		private __libraryChanges: LibraryChangesService,
		private __loadedLibrary: LoadedLibraryInBrowserStorageService
	) {}


	async go(result: LibraryRecord) {
		// for security:
		delete result._id;
		delete result._user_id;


		this.__loadedLibrary.set(result);
		this.__libraryChanges.unsetAll();
		alerts.setSuccess('Library updated');
	}

}
