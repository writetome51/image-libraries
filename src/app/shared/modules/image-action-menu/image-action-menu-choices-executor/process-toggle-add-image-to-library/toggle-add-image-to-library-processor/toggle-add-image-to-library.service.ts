import { ProcessAddImageToLibraryService }
	from './add-image-to-library-processor/process-add-image-to-library.service';
import { Injectable } from '@angular/core';
import { ProcessRemoveImageFromLibraryService }
	from './remove-image-from-library-processor/process-remove-image-from-library.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageActionMenuServicesModule } from '../../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ToggleAddImageToLibraryService implements IDoThis {

	constructor(
		private __addImageToLibraryProcessor: ProcessAddImageToLibraryService,
		private __removeImageFromLibraryProcessor: ProcessRemoveImageFromLibraryService
	) {
	}


	async go(
		data: { image_id: string, libName: string, checked: boolean }
	): Promise<{ image_id: string, libName: string, checked: boolean }> {

		if (data.checked) { // Means user wants to remove image from library...
			await this.__removeImageFromLibraryProcessor.go(data.image_id, data.libName);
		}
		else await this.__addImageToLibraryProcessor.go(data.image_id, data.libName);

		return data;
	}

}
