import { CurrentLibraryService } from './current-library.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LibraryStorageService } from './library-storage.service';
import { SuccessOrErrorMessageService } from '../success-or-error-message.service';


@Injectable({
	providedIn: 'root'
})
export class LibrarySaverService {


	constructor(
		private __currentLibrary: CurrentLibraryService,
		private __successOrErrorMessage: SuccessOrErrorMessageService,
		private __libraryStorage: LibraryStorageService
	) {
	}


	saveNew(): void {
		this.__currentLibrary.name = this.__currentLibrary.name.trim();
		if (isEmpty(this.__currentLibrary.name)) {
			this.__successOrErrorMessage.error = `The library must be given a name before you save it`;
			return;
		}
		this.__libraryStorage.create(this.__currentLibrary.name);
	}


	saveUpdate(): void {
		if (hasValue(this.__currentLibrary.changes['name'])) {
			let name = this.__currentLibrary.changes['name'].trim();
			if (isEmpty(name)) {
				delete this.__currentLibrary.changes['name'];
			}
		}
		if (Object.keys(this.__currentLibrary.changes).length){ // if changes not empty...
			this.__libraryStorage.update(this.__currentLibrary.changes);
		}

	}


}
