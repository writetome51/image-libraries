import { CurrentLibraryService as currentLibrary } from './current-library.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LibraryStorageService } from './library-storage.service';


@Injectable({
	providedIn: 'root'
})
export class LibrarySaverService {


	constructor(
		private __libraryStorage: LibraryStorageService
	) {
	}


	saveUpdate(): void {

		if (hasValue(currentLibrary.changes['libName'])) {
			let name = currentLibrary.changes['libName'].trim();
			if (isEmpty(name)) {
				delete currentLibrary.changes['libName'];
			}
		}
		if (Object.keys(currentLibrary.changes).length) { // if changes not empty...
			this.__libraryStorage.update(currentLibrary.name, currentLibrary.changes);
		}

	}


}
