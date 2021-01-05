import { AddImageToLibraryProcessorService }
	from './add-image-to-library-processor/add-image-to-library-processor.service';
import { Injectable } from '@angular/core';
import { DataProcessorService } from '@services/data-processor/data-processor.service';
import { RemoveImageFromLibraryProcessorService }
	from './remove-image-from-library-processor/remove-image-from-library-processor.service';
import { ToggleAddToRemoveFromLibraryResultInterpreterService }
	from './toggle-add-to-remove-from-library-result-interpreter/toggle-add-to-remove-from-library-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class ToggleAddToRemoveFromLibraryProcessorService extends DataProcessorService {

	constructor(
		private __addImageToLibraryProcessor: AddImageToLibraryProcessorService,
		private __removeImageFromLibraryProcessor: RemoveImageFromLibraryProcessorService,
		__resultInterpreter: ToggleAddToRemoveFromLibraryResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	protected async _getResult(
		data: { image_id: string, libName: string, checked: boolean }
	): Promise<{ image_id: string, libName: string, checked: boolean }> {

		if (data.checked) {
			await this.__removeImageFromLibraryProcessor.process(data.image_id, data.libName);
		}
		else await this.__addImageToLibraryProcessor.process(data.image_id, data.libName);

		return data;
	}

}
