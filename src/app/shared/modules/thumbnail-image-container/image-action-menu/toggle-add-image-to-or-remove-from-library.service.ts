import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ToggleAddToRemoveFromLibraryProcessorService }
	from './toggle-add-to-remove-from-library-processor/toggle-add-to-remove-from-library-processor.service';


@Injectable({providedIn: 'root'})
export class ToggleAddImageToOrRemoveFromLibraryService implements IDoThis {

	constructor(
		private __toggleAddToRemoveFromLibraryProcessor:
			ToggleAddToRemoveFromLibraryProcessorService
	) {
	}


	async go(data: { image_id: string, libName: string, checked: boolean }) {
		await this.__toggleAddToRemoveFromLibraryProcessor.process(data);
	}

}
