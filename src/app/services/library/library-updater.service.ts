import { DBLibrary } from '../../interfaces/db-library';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LibraryChangesService as libraryChanges } from './library-changes.service';
import { LibraryStorageService } from './library-storage.service';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class LibraryUpdaterService {


	constructor(private __libraryStorage: LibraryStorageService) {
	}


	async update(): Promise<DBLibrary | { error: object }> {
		if (not(libraryChanges.exist)) return;

		if (hasValue(libraryChanges.getChange('name'))) {
			let name = libraryChanges.getChange('name').trim();
			if (isEmpty(name)) {
				libraryChanges.unsetChange('name');
			}
		}
		return await this.__libraryStorage.update(
			libraryChanges.libraryName, libraryChanges.getAll()
		);
	}


}
