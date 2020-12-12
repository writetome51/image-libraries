import { Injectable } from '@angular/core';
import { AddImageToLibraryProcessorService } from './add-image-to-library-processor.service';
import { RemoveImageFromLibraryProcessorService }
	from './remove-image-from-library-processor.service';
import { ToggleAddToRemoveFromLibraryResultInterpreterService }
	from '@thumbnail-image-container/image-action-menu/toggle-add-to-remove-from-library-processor/toggle-add-to-remove-from-library-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class ToggleAddToRemoveFromLibraryProcessorService {

	constructor(
		private __addImageToLibraryProcessor: AddImageToLibraryProcessorService,
		private __removeImageFromLibraryProcessor: RemoveImageFromLibraryProcessorService,
		private __resultInterpreter: ToggleAddToRemoveFromLibraryResultInterpreterService
	) {
	}


	async process(data: { image_id: string, libName: string, checked: boolean }) {
		let result = await this._getResult(data);
		await this.__resultInterpreter.interpret(result);
	}


	protected async _getResult(
		data
	): Promise<{ image_id: string, libName: string, checked: boolean }> {

		if (data.checked) {
			await this.__removeImageFromLibraryProcessor.process(data.image_id, data.libName);
		}
		else await this.__addImageToLibraryProcessor.process(data.image_id, data.libName);

		return data;
	}

}
