import { LibraryRecord } from '@interfaces/library-record.interface';
import { Injectable } from '@angular/core';
import { UpdateLibraryService } from '@db/update-library.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageRecord } from '@interfaces/image-record.interface';
import { ReorderLoadedImagesService } from '@process/process-change-library-images-order_service/reorder-loaded-images.service';
import { GetImageIDsReorderedService } from '@process/process-change-library-images-order_service/get-image-ids-reordered.service';
import { RequestedLibraryData } from '@runtime-state-data/requested-library.data';


@Injectable({providedIn: 'root'})
export class ChangeLibraryImagesOrderService implements IDoThis {

	constructor(
		private __reorderLoadedImages: ReorderLoadedImagesService,
		private __getImageIDsReordered: GetImageIDsReorderedService,
		private __updateLibrary: UpdateLibraryService
	) {}


	async go(pageImagesInNewOrder: ImageRecord[]): Promise<LibraryRecord | HasError> {
		const _image_ids = this.__getImageIDsReordered.go(pageImagesInNewOrder);

		this.__reorderLoadedImages.go(_image_ids);

		return await this.__updateLibrary.go(RequestedLibraryData.name, { _image_ids });
	}

}
