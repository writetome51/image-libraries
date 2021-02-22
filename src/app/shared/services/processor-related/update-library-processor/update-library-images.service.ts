import { DBLibrary } from '@interfaces/db-library.interface';
import { HasError } from '@interfaces/has-error.interface';
import { Injectable } from '@angular/core';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LibrariesInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/libraries-in-browser-storage.service';
import { UpdateLibraryService } from '@services/update-library.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class UpdateLibraryImagesService implements IDoThis {

	constructor(
		private __libraryUpdater: UpdateLibraryService,
		private __localLibraries: LibrariesInBrowserStorageService
	) {
	}


	async go(): Promise<DBLibrary | HasError> {
		return await this.__libraryUpdater.go(loadedLibrary.libName, {});
	}

}
