import { LibraryRecord } from '@interfaces/library-record.interface';
import { Injectable } from '@angular/core';
import { UpdateLibraryService } from '@db/update-library.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageRecord } from '@interfaces/image-record.interface';
import { ReorderLoadedImagesService }
	from './get-library-image-ids-reordered_service/reorder-loaded-images.service';
import { RequestedLibraryData } from '@runtime-state-data/requested-library.data';


@Injectable({providedIn: 'root'})
export class SaveLibraryImagesOrderService implements IDoThis {

	constructor(
		private __getLibraryImageIDsReordered: ReorderLoadedImagesService,
		private __reorderLoadedImages,
		private __updateLibrary: UpdateLibraryService
	) {}


	async go(pageImagesInNewOrder: ImageRecord[]): Promise<LibraryRecord | HasError> {
		const _image_ids = await this.__getLibraryImageIDsReordered.go(pageImagesInNewOrder);

		this.__reorderLoadedImages.go(_image_ids);

		return await this.__updateLibrary.go(RequestedLibraryData.name, { _image_ids });
	}

}
