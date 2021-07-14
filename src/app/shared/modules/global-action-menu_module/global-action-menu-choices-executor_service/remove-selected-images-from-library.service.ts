import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { GlobalActionMenuServicesModule } from '../global-action-menu-services.module';
import { ProcessRemoveImagesFromLibraryService }
	from '@process/process-remove-images-from-library_service/process-remove-images-from-library.service';
import { GetSelectedImagesService as getSelectedImages } from './get-selected-images.service';
import { ImageRecord } from '@interfaces/image-record.interface';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class RemoveSelectedImagesFromLibraryService implements IDoThis {

	constructor(private __processRemoveImagesFromLibrary: ProcessRemoveImagesFromLibraryService) {}


	async go( {libName} ): Promise<void> {
		const _image_ids: string[] = getSelectedImages.go().map((img: ImageRecord) => img._id);

		await this.__processRemoveImagesFromLibrary.go(_image_ids, libName);
	}

}
