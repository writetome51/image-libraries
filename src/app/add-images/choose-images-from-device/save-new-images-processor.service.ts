import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { Injectable } from '@angular/core';
import { NewImagesData as newImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { SaveNewImagesService } from '../save-new-images.service';
import { SaveNewImagesResultInterpreterService }
	from '../save-new-images-result-interpreter/save-new-images-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class SaveNewImagesProcessorService extends DataTransportProcessorService {

	constructor(
		private __saveNewImages: SaveNewImagesService,
		__saveNewImagesResultInterpreter: SaveNewImagesResultInterpreterService
	) {
		super(__saveNewImagesResultInterpreter);
	}


	protected async _getResult(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__saveNewImages.go(newImages.data);
	}

}
