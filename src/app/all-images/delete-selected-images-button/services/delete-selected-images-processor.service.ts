import { Injectable } from '@angular/core';
import { DataTransportProcessorService } from '../../../services/data-transport-processor/data-transport-processor.service';
import { SelectedImagesDeleterService } from './selected-images-deleter.service';
import { DeleteSelectedImagesResultInterpreterService }
	from '../../../services/data-transport-processor/data-transport-result-interpreter/delete-selected-images-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class DeleteSelectedImagesProcessorService extends DataTransportProcessorService {

	constructor(
		private __selectedImagesDeleter: SelectedImagesDeleterService,
		__deleteSelectedImagesResultInterpreter: DeleteSelectedImagesResultInterpreterService
	) {
		super(__deleteSelectedImagesResultInterpreter);
	}


	protected async _getResult(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__selectedImagesDeleter.delete();
	}

}
