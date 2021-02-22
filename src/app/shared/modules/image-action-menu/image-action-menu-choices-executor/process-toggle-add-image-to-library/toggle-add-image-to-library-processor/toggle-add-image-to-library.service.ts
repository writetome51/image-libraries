import { AddImageToLibraryProcessorService }
	from './add-image-to-library-processor/add-image-to-library-processor.service';
import { Injectable } from '@angular/core';
import { RemoveImageFromLibraryProcessorService }
	from './remove-image-from-library-processor/remove-image-from-library-processor.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageActionMenuServicesModule } from '../../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ToggleAddImageToLibraryService implements IDoThis {

	constructor(
		private __addImageToLibraryProcessor: AddImageToLibraryProcessorService,
		private __removeImageFromLibraryProcessor: RemoveImageFromLibraryProcessorService
	) {
	}


	async go(
		data: { image_id: string, libName: string, checked: boolean }
	): Promise<{ image_id: string, libName: string, checked: boolean }> {

		if (data.checked) { // Means user wants to remove image from library...
			await this.__removeImageFromLibraryProcessor.process(data.image_id, data.libName);
		}
		else await this.__addImageToLibraryProcessor.process(data.image_id, data.libName);

		return data;
	}

}
