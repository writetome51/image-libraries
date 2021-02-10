import { DBLibrary } from '@interfaces/db-library.interface';
import { Injectable } from '@angular/core';
import { UpdateLibraryService } from '@services/update-library.service';
import { LibrariesInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/libraries-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class AddImageToLibraryService implements IDoThis {

	constructor(
		private __libraryUpdater: UpdateLibraryService,
		private __localLibraries: LibrariesInBrowserStorageService,
	) {
	}


	async go(image_id, libName): Promise<DBLibrary | HasError> {

		let lib = this.__localLibraries.get()[libName];
		let changes = {}, index = lib._image_ids.length;
		changes[`_image_ids.${index}`] = image_id;

		return await this.__libraryUpdater.go(libName, changes);
	}

}
