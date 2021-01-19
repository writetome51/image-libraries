import { AddImageToLibraryProcessorService }
	from './add-image-to-library-processor/add-image-to-library-processor.service';
import { Injectable } from '@angular/core';
import { ProcessorService } from '@processor/processor.service';
import { RemoveImageFromLibraryProcessorService }
	from './remove-image-from-library-processor/remove-image-from-library-processor.service';
import { ToggleAddImageToLibraryResultInterpreterService }
	from './toggle-add-image-to-library-result-interpreter/toggle-add-image-to-library-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class ToggleAddImageToLibraryProcessorService extends ProcessorService {

	constructor(
		private __addImageToLibraryProcessor: AddImageToLibraryProcessorService,
		private __removeImageFromLibraryProcessor: RemoveImageFromLibraryProcessorService,
		__resultInterpreter: ToggleAddImageToLibraryResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	protected async _getResult(
		data: { image_id: string, libName: string, checked: boolean }
	): Promise<{ image_id: string, libName: string, checked: boolean }> {

		if (data.checked) { // Means user wants to remove image from library...
			await this.__removeImageFromLibraryProcessor.process(data.image_id, data.libName);
		}
		else await this.__addImageToLibraryProcessor.process(data.image_id, data.libName);

		return data;
	}

}
