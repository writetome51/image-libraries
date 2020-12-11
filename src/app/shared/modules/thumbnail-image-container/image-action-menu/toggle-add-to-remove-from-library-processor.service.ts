import { Injectable } from '@angular/core';
import { AddImageToLibraryProcessorService } from './add-image-to-library-processor.service';
import { RemoveImageFromLibraryProcessorService }
	from './remove-image-from-library-processor.service';
import { LocalLibrariesService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-libraries.service';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class ToggleAddToRemoveFromLibraryProcessorService {

	constructor(
		private __addImageToLibraryProcessor: AddImageToLibraryProcessorService,
		private __removeImageFromLibraryProcessor: RemoveImageFromLibraryProcessorService,
		private __localLibraries: LocalLibrariesService
	) {
	}


	protected async process(
		data: { image_id: string, libName: string, checked: boolean }
	): Promise<void> {

		if (data.checked) {
			await this.__removeImageFromLibraryProcessor.process(data.image_id, data.libName);
			let lib = this.__localLibraries.get()[data.libName];
			if (not(lib._image_ids.includes(data.image_id))) data.checked = false;
		}
		else {
			await this.__addImageToLibraryProcessor.process(data.image_id, data.libName);
			let lib = this.__localLibraries.get()[data.libName];
			if (lib._image_ids.includes(data.image_id)) data.checked = true;
		}
	}

}
