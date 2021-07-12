import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { GetIDsOfSelectedImagesService as getIDsOfSelectedImages }
	from './get-ids-of-selected-images.service';
import { GlobalActionMenuServicesModule }
	from '@global-action-menu_module/global-action-menu-services.module';
import { ProcessRemoveImagesFromLibraryService }
	from '@process/process-remove-images-from-library_service/process-remove-images-from-library.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class RemoveSelectedImagesFromLibraryService implements IDoThis {

	constructor(private __processRemoveImagesFromLibrary: ProcessRemoveImagesFromLibraryService) {}


	async go( {libName} ): Promise<void> {
		const _image_ids: string[] = getIDsOfSelectedImages.go();

		await this.__processRemoveImagesFromLibrary.go(_image_ids, libName);
	}

}
