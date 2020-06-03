import { DataTransportProcessorService } from './data-transport-processor.service';
import { Injectable } from '@angular/core';
import { NewImagesSaverService } from '../image/new-images-saver.service';
import { SaveNewImagesResultInterpreterService }
	from './data-transport-result-interpreter/save-new-images-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class SaveNewImagesProcessorService extends DataTransportProcessorService {

	constructor(
		private __newImagesSaver: NewImagesSaverService,
		__saveNewImagesResultInterpreter: SaveNewImagesResultInterpreterService
	) {
		super(__saveNewImagesResultInterpreter);
	}


	protected async _getResult(): Promise<string>
		// JSON containing: {success: true} | {error: {message: string}}
	{
		return await this.__newImagesSaver.save();
	}

}
