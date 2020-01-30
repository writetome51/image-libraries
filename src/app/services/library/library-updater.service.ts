import { DBLibrary } from '../../interfaces/db-library';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LibraryChangesService } from './library-changes.service';
import { LibraryStorageService } from './library-storage.service';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class LibraryUpdaterService {


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __libraryChanges: LibraryChangesService
	) {
	}


	async update(): Promise<DBLibrary | { error: object }> {
		if (not(this.__libraryChanges.exist)) return;

		if (this.__libraryChanges.has('name')) {
			let name = this.__libraryChanges.getExact('name').trim();
			if (isEmpty(name)) {
				this.__libraryChanges.unset('name');
			}
		}
		return await this.__libraryStorage.update(
			this.__libraryChanges.libraryName, this.__libraryChanges.getAll()
		);
	}


}
