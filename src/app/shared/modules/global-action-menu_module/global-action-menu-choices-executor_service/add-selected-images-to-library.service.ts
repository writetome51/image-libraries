import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { GlobalActionMenuServicesModule }
	from '@global-action-menu_module/global-action-menu-services.module';
import { ProcessAddImagesToLibraryService }
	from '@process/process-add-images-to-library_service/process-add-images-to-library.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class AddSelectedImagesToLibraryService implements IDoThis {

	constructor(private __processAddImagesToLibrary: ProcessAddImagesToLibraryService) {}


	async go(params: { selectedImages: { _id: string }[], libName: string }): Promise<void> {
		const {selectedImages, libName} = params;
		const _image_ids = selectedImages.map((image) => image._id);

		await this.__processAddImagesToLibrary.go(_image_ids, libName);
	}

}
