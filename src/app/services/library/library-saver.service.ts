import { CurrentLibraryService } from './current-library.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LibraryStorageService } from './library-storage.service';


@Injectable({providedIn: 'root'})

export class LibrarySaverService {


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __currentLibrary: CurrentLibraryService
	) {
	}


	save(): void {

		if (hasValue(this.__currentLibrary.data.changes['name'])) {
			let name = this.__currentLibrary.data.changes['name'].trim();
			if (isEmpty(name)) {
				delete this.__currentLibrary.data.changes['name'];
			}
		}
		if (this.__currentLibrary.hasChanges) {
			this.__libraryStorage.update(this.__currentLibrary.data.changes);
		}

	}


}
