import { GetLibraryImageIDsReorderedService } from './get-library-image-ids-reordered.service';
import { HasError } from '@interfaces/has-error.interface';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageRecord } from '@interfaces/image-record.interface';
import { LibraryImagesListServicesModule } from '../../library-images-list-services.module';
import { LibraryRecord } from '@interfaces/library-record.interface';
import { ReorderLoadedImagesService } from './reorder-loaded-images.service';
import { RequestedLibraryData } from '@runtime-state-data/requested-library.data';
import { UpdateLibraryService } from '@db/update-library.service';


@Injectable({providedIn: LibraryImagesListServicesModule})
export class SaveLibraryImagesOrderService implements IDoThis {

	constructor(
		private __getLibraryImageIDsReordered: GetLibraryImageIDsReorderedService,
		private __reorderLoadedImages: ReorderLoadedImagesService,
		private __updateLibrary: UpdateLibraryService
	) {}


	async go(pageImagesInNewOrder: ImageRecord[]): Promise<LibraryRecord | HasError> {
		const _image_ids = await this.__getLibraryImageIDsReordered.go(pageImagesInNewOrder);

		await this.__reorderLoadedImages.go(_image_ids);

		return await this.__updateLibrary.go(RequestedLibraryData.name, { _image_ids });
	}

}
