import { LoadedLibraryService } from './loaded-library.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LibraryStorageService } from './library-storage.service';


@Injectable({providedIn: 'root'})

export class LibrarySaverService {


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __loadedLibrary: LoadedLibraryService
	) {
	}


	save(): void {

		if (hasValue(this.__loadedLibrary.data.changes['name'])) {
			let name = this.__loadedLibrary.data.changes['name'].trim();
			if (isEmpty(name)) {
				delete this.__loadedLibrary.data.changes['name'];
			}
		}
		if (Object.keys(this.__loadedLibrary.data.changes).length) { // if changes not empty...
			this.__libraryStorage.update(this.__loadedLibrary.data.changes);
		}

	}


}
