import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ProcessToggleAddImageToLibraryService }
	from './toggle-add-image-to-library-processor/process-toggle-add-image-to-library.service';
import { ImageActionMenuServicesModule } from '../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ProcessToggleAddImageToLibraryService implements IDoThis {

	constructor(
		private __toggleAddImageToLibraryProcessor: ProcessToggleAddImageToLibraryService
	) {
	}


	async go(data: { image_id: string, libName: string, checked: boolean }) {
		await this.__toggleAddImageToLibraryProcessor.go(data);
	}

}
