import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ToggleAddImageToLibraryProcessorService }
	from './toggle-add-image-to-library-processor/toggle-add-image-to-library-processor.service';
import { ImageActionMenuServicesModule } from '../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ProcessToggleAddImageToLibraryService implements IDoThis {

	constructor(
		private __toggleAddImageToLibraryProcessor: ToggleAddImageToLibraryProcessorService
	) {
	}


	async go(data: { image_id: string, libName: string, checked: boolean }) {
		await this.__toggleAddImageToLibraryProcessor.process(data);
	}

}
