import { GlobalActionMenuServicesModule } from '../global-action-menu-services.module';
import { GetSelectedImagesService as getSelectedImages } from './get-selected-images.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { ProcessAddImagesToLibraryService }
	from '@process/process-add-images-to-library_service/process-add-images-to-library.service';
import { ImageRecord } from '@interfaces/image-record.interface';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class AddSelectedImagesToLibraryService implements IDoThis {

	constructor(private __processAddImagesToLibrary: ProcessAddImagesToLibraryService) {}


	async go( {libName} ): Promise<void> {
		const _image_ids: string[] = getSelectedImages.go().map((img: ImageRecord) => img._id);

		await this.__processAddImagesToLibrary.go(_image_ids, libName);
	}

}
