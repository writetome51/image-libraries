import { Injectable } from '@angular/core';
import { LibraryRecord } from '@interfaces/library-record.interface';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import { removeFirstOf } from '@writetome51/array-remove-all-of-first-of';
import { UpdateLibraryService } from '@services/db/update-library.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageActionMenuServicesModule } from '../../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class RemoveImageFromLibraryService implements IDoThis {

	constructor(
		private __updateLibrary: UpdateLibraryService,
		private __librariesInBrowser: LibrariesInBrowserStorageService
	) {}


	async go(
		image_id, libName
	): Promise<LibraryRecord | HasError> {

		let lib = this.__librariesInBrowser.get()[libName];
		removeFirstOf(image_id, lib._image_ids);

		return await this.__updateLibrary.go(libName, {_image_ids: lib._image_ids});
	}

}
