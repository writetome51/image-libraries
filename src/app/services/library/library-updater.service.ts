import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LibraryStorageService } from './library-storage.service';
import { not } from '@writetome51/not';
import { DBLibrary } from '../../interfaces/db-library';
import { LibraryChangesService } from './library-changes.service';


@Injectable({providedIn: 'root'})

export class LibraryUpdaterService {


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __libraryChanges: LibraryChangesService,
	) {
	}


	async update(): Promise<DBLibrary | { error: object }> {
		if (not(this.__libraryChanges.exist)) return;

		if (hasValue(this.__libraryChanges.data['name'])) {
			let name = this.__libraryChanges.data['name'].trim();
			if (isEmpty(name)) {
				delete this.__libraryChanges.data['name'];
			}
		}
		return await this.__libraryStorage.update(this.__libraryChanges);
	}


}
