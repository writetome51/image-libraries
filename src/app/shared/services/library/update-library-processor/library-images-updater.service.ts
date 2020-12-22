import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { LibraryStorageService } from '@services/library/library-storage.service';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LocalLibrariesService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-libraries.service';


@Injectable({providedIn: 'root'})
export class LibraryImagesUpdaterService {


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __localLibraries: LocalLibrariesService
	) {
	}


	async update(): Promise<DBLibrary | { error: object }> {
		return await this.__libraryStorage.update(
			loadedLibrary.libName, {}
		);
	}


}
