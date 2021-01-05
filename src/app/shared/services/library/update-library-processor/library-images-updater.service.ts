import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LocalLibrariesService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-libraries.service';
import { LibraryUpdaterService } from '@services/mongo-db-realm/library-updater.service';


@Injectable({providedIn: 'root'})
export class LibraryImagesUpdaterService {

	constructor(
		private __libraryUpdater: LibraryUpdaterService,
		private __localLibraries: LocalLibrariesService
	) {
	}


	async update(): Promise<DBLibrary | { error: object }> {
		return await this.__libraryUpdater.update(
			loadedLibrary.libName, {}
		);
	}

}
