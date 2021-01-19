import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ToggleAddImageToLibraryProcessorService }
	from './toggle-add-image-to-library-processor/toggle-add-image-to-library-processor.service';


@Injectable({providedIn: 'root'})
export class ToggleAddImageToLibraryService implements IDoThis {

	constructor(
		private __toggleAddImageToLibraryProcessor: ToggleAddImageToLibraryProcessorService
	) {
	}


	async go(data: { image_id: string, libName: string, checked: boolean }) {
		await this.__toggleAddImageToLibraryProcessor.process(data);
	}

}
