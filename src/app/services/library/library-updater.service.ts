import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LibraryStorageService } from './library-storage.service';
import { not } from '@writetome51/not';
import { DBLibrary } from '../../interfaces/db-library';
import { LibraryChangesService as libraryChanges } from './library-changes.service';


@Injectable({providedIn: 'root'})

export class LibraryUpdaterService {


	constructor(private __libraryStorage: LibraryStorageService) {
	}


	async update(): Promise<DBLibrary | { error: object }> {
		if (not(libraryChanges.exist)) return;

		if (hasValue(libraryChanges.data['name'])) {
			let name = libraryChanges.data['name'].trim();
			if (isEmpty(name)) {
				delete libraryChanges.data['name'];
			}
		}
		return await this.__libraryStorage.update(libraryChanges);
	}


}
