import { DBLibrary } from '@interfaces/db-library.interface';
import { Injectable } from '@angular/core';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LibrariesInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/libraries-in-browser-storage.service';
import { UpdateLibraryService } from '@services/update-library.service';


@Injectable({providedIn: 'root'})
export class LibraryImagesUpdaterService {

	constructor(
		private __libraryUpdater: UpdateLibraryService,
		private __localLibraries: LibrariesInBrowserStorageService
	) {
	}


	async update(): Promise<DBLibrary | { error: object }> {
		return await this.__libraryUpdater.go(
			loadedLibrary.libName, {}
		);
	}

}
