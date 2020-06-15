import { Injectable } from '@angular/core';
import { DataTransportProcessorService } from '../data-transport-processor.service';
import { SelectedImagesDeleterService } from './selected-images-deleter.service';


@Injectable({providedIn: 'root'})

export class DeleteSelectedImagesProcessorService extends DataTransportProcessorService {

	constructor(
		private __selectedImagesDeleter: SelectedImagesDeleterService,
		__deleteSelectedImagesResultInterpreter
	) {
		super(__deleteSelectedImagesResultInterpreter);
	}


	protected async _getResult(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__selectedImagesDeleter.delete();
	}

}
