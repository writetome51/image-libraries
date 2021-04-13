import { LibraryDBRecord } from '@interfaces/library-db-record.interface';
import { Injectable } from '@angular/core';
import { UpdateLibraryService } from '@services/db/update-library.service';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageActionMenuServicesModule } from '../../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class AddImageToLibraryService implements IDoThis {

	constructor(
		private __libraryUpdater: UpdateLibraryService,
		private __localLibraries: LibrariesInBrowserStorageService,
	) {}


	async go(image_id, libName): Promise<LibraryDBRecord | HasError> {

		let lib = this.__localLibraries.get()[libName];
		let changes = {}, index = lib._image_ids.length;
		changes[`_image_ids.${index}`] = image_id;

		return await this.__libraryUpdater.go(libName, changes);
	}

}
