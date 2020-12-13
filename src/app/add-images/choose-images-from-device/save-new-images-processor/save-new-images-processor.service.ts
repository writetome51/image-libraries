import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { Injectable } from '@angular/core';
import { NewImagesData as newImages } from '@runtime-state-data/static-classes/auto-resettable.data';
import { NewImagesSaverService } from '../../new-images-saver.service';
import { SaveNewImagesResultInterpreterService }
	from './save-new-images-result-interpreter/save-new-images-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class SaveNewImagesProcessorService extends DataTransportProcessorService {

	constructor(
		private __newImagesSaver: NewImagesSaverService,
		__saveNewImagesResultInterpreter: SaveNewImagesResultInterpreterService
	) {
		super(__saveNewImagesResultInterpreter);
	}


	protected async _getResult(): Promise< {success: true} | {error: {message: string}}>
	{
		return await this.__newImagesSaver.save(newImages.data);
	}

}
