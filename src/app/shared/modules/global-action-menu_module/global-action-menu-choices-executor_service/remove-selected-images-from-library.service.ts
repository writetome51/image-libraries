import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { GlobalActionMenuServicesModule }
	from '@global-action-menu_module/global-action-menu-services.module';
import { ProcessRemoveImagesFromLibraryService }
	from '@process/process-remove-images-from-library_service/process-remove-images-from-library.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class RemoveSelectedImagesFromLibraryService implements IDoThis {

	constructor(private __processRemoveImagesFromLibrary: ProcessRemoveImagesFromLibraryService) {}


	async go(params: { selectedImages: { _id: string }[], libName: string }): Promise<void> {
		const {selectedImages, libName} = params;
		const _image_ids = selectedImages.map((image) => image._id);

		await this.__processRemoveImagesFromLibrary.go(_image_ids, libName);
	}

}
