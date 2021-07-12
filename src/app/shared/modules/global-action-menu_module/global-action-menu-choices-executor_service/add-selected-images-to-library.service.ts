import { GlobalActionMenuServicesModule } from '../global-action-menu-services.module';
import { GetIDsOfSelectedImagesService as getIDsOfSelectedImages }
	from './get-ids-of-selected-images.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { ProcessAddImagesToLibraryService }
	from '@process/process-add-images-to-library_service/process-add-images-to-library.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class AddSelectedImagesToLibraryService implements IDoThis {

	constructor(private __processAddImagesToLibrary: ProcessAddImagesToLibraryService) {}


	async go( {libName} ): Promise<void> {
		const _image_ids: string[] = getIDsOfSelectedImages.go();

		await this.__processAddImagesToLibrary.go(_image_ids, libName);
	}

}
