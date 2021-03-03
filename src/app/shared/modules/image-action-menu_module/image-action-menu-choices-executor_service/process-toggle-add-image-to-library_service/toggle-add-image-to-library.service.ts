import { ProcessAddImageToLibraryService }
	from './process-add-image-to-library_service/process-add-image-to-library.service';
import { Injectable } from '@angular/core';
import { ProcessRemoveImageFromLibraryService }
	from './process-remove-image-from-library_service/process-remove-image-from-library.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageActionMenuServicesModule } from '../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ToggleAddImageToLibraryService implements IDoThis {

	constructor(
		private __processAddImageToLibrary: ProcessAddImageToLibraryService,
		private __processRemoveImageFromLibrary: ProcessRemoveImageFromLibraryService
	) {
	}


	async go(
		data: { image_id: string, libName: string, checked: boolean }
	): Promise<{ image_id: string, libName: string, checked: boolean }> {

		if (data.checked) { // Means user wants to remove image from library...
			await this.__processRemoveImageFromLibrary.go(data.image_id, data.libName);
		}
		else await this.__processAddImageToLibrary.go(data.image_id, data.libName);

		return data;
	}

}
