import { LibraryRecord } from '@interfaces/library-record.interface';
import { Injectable } from '@angular/core';
import { UpdateLibraryService } from '@db/update-library.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageRecord } from '@interfaces/image-record.interface';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class ChangeLibraryImagesOrderService implements IDoThis {

	constructor(
		private __loadedLibrary: LoadedLibraryInBrowserStorageService,
		private __updateLibrary: UpdateLibraryService
	) {}


	async go(imagesInNewOrder: ImageRecord[]): Promise<LibraryRecord | HasError> {
		const libName = this.__loadedLibrary.get().name;
		let changes = { _image_ids: imagesInNewOrder.map((image) => image._id) };

		return await this.__updateLibrary.go(libName, changes);
	}

}
