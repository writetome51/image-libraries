import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LibraryChangesService } from '@services/library/library-changes.service';
import { LibraryStorageService } from '@services/library/library-storage.service';
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
			let name = this.__libraryChanges.get('name').trim();
			if (isEmpty(name)) {
				this.__libraryChanges.unset('name');
			}
		}
		return await this.__libraryStorage.update(
			loadedLibrary.libName, this.__libraryChanges.getAll()
		);
	}


}
