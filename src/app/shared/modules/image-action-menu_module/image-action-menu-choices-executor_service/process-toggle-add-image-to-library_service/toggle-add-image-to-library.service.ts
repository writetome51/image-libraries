import { ProcessAddImagesToLibraryService }
	from '@process/process-add-images-to-library_service/process-add-images-to-library.service';
import { Injectable } from '@angular/core';
import { ProcessRemoveImagesFromLibraryService }
	from '../../../../services/process/process-remove-images-from-library_service/process-remove-images-from-library.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageActionMenuServicesModule } from '../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ToggleAddImageToLibraryService implements IDoThis {

	constructor(
		private __processAddImagesToLibrary: ProcessAddImagesToLibraryService,
		private __processRemoveImagesFromLibrary: ProcessRemoveImagesFromLibraryService
	) {}


	async go(
		data: { image_id: string, libName: string, checked: boolean }
	): Promise<{ image_id: string, libName: string, checked: boolean }> {

		if (data.checked) { // Means user wants to remove image from library...
			await this.__processRemoveImagesFromLibrary.go([data.image_id], data.libName);
		}
		else await this.__processAddImagesToLibrary.go([data.image_id], data.libName);

		return data;
	}

}
