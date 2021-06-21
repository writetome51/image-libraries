import { ProcessAddImagesToLibraryService }
	from '@process/process-add-images-to-library_service/process-add-images-to-library.service';
import { Injectable } from '@angular/core';
import { ProcessRemoveImageFromLibraryService }
	from './process-remove-image-from-library_service/process-remove-image-from-library.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageActionMenuServicesModule } from '../../image-action-menu-services.module';
import { NameOfLibraryBeingModifiedData as nameOfLibraryBeingModified }
	from '@runtime-state-data/name-of-library-being-modified.data';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ToggleAddImageToLibraryService implements IDoThis {

	constructor(
		private __processAddImagesToLibrary: ProcessAddImagesToLibraryService,
		private __processRemoveImageFromLibrary: ProcessRemoveImageFromLibraryService
	) {}


	async go(
		data: { image_id: string, libName: string, checked: boolean }
	): Promise<{ image_id: string, libName: string, checked: boolean }> {

		nameOfLibraryBeingModified.data = data.libName;

		if (data.checked) { // Means user wants to remove image from library...
			await this.__processRemoveImageFromLibrary.go(data.image_id, data.libName);
		}
		else await this.__processAddImagesToLibrary.go([data.image_id], data.libName);

		return data;
	}

}
