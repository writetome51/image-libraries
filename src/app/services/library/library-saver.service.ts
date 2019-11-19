import { CurrentLibraryService } from './current-library.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LibraryStorageService } from './library-storage.service';
import { AlertService as alert } from '../alert.service';


@Injectable({
	providedIn: 'root'
})
export class LibrarySaverService {


	constructor(
		private __currentLibrary: CurrentLibraryService,
		private __libraryStorage: LibraryStorageService
	) {
	}





	saveUpdate(): void {
		if (hasValue(this.__currentLibrary.changes['name'])) {
			let name = this.__currentLibrary.changes['name'].trim();
			if (isEmpty(name)) {
				delete this.__currentLibrary.changes['name'];
			}
		}
		if (Object.keys(this.__currentLibrary.changes).length){ // if changes not empty...
			this.__libraryStorage.update(this.__currentLibrary.name, this.__currentLibrary.changes);
		}

	}


}
