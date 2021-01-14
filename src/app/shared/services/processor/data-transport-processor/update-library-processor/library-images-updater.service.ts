import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LibrariesInBrowserStorageService }
	from '@item-in-browser-storage/libraries-in-browser-storage.service';
import { LibraryUpdaterService } from '@services/library-updater.service';


@Injectable({providedIn: 'root'})
export class LibraryImagesUpdaterService {

	constructor(
		private __libraryUpdater: LibraryUpdaterService,
		private __localLibraries: LibrariesInBrowserStorageService
	) {
	}


	async update(): Promise<DBLibrary | { error: object }> {
		return await this.__libraryUpdater.update(
			loadedLibrary.libName, {}
		);
	}

}
