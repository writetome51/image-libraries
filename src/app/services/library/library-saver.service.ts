import { CurrentLibraryService } from './current-library.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LibraryStorageService } from './library-storage.service';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class LibrarySaverService {


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __currentLibrary: CurrentLibraryService
	) {
	}


	async save(): Promise<void> {
		if (not(this.__currentLibrary.hasChanges)) return;

		if (hasValue(this.__currentLibrary.changes['name'])) {
			let name = this.__currentLibrary.changes['name'].trim();
			if (isEmpty(name)) {
				delete this.__currentLibrary.changes['name'];
			}
		}
		await this.__libraryStorage.update(this.__currentLibrary);
	}


}
