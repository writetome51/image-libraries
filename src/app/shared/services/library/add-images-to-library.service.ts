import { LibraryRecord } from '@interfaces/library-record.interface';
import { Injectable } from '@angular/core';
import { UpdateLibraryService } from '@db/update-library.service';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { getMergedArrays } from '@writetome51/array-get-merged-arrays';


@Injectable({providedIn: 'root'})
export class AddImagesToLibraryService implements IDoThis {

	constructor(
		private __updateLibrary: UpdateLibraryService,
		private __localLibraries: LibrariesInBrowserStorageService,
	) {}


	async go(newImageIDs: string[], libName: string): Promise<LibraryRecord | HasError> {

		let lib = this.__localLibraries.get()[libName];
		let changes = { _image_ids: getMergedArrays([lib._image_ids, newImageIDs]) };

		return await this.__updateLibrary.go(libName, changes);
	}

}
