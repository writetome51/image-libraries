import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { DirectProcessor } from '@interfaces/direct-processor';
import { Injectable } from '@angular/core';
import { MenuChoiceProcessParams } from '@interfaces/menu-choice-process-params';
import { MenuChoiceLibraryData as choiceLibrary } from '@app-action-menu/menu-choice-library.data';


@Injectable()
export class MenuChoiceProcessorService implements DirectProcessor {

	// the keys are the choices, the values are the process functions.
	private readonly __choiceProcessors: object;


	constructor(
		private __deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService
	) {
		this.__choiceProcessors = {};
		this.__choiceProcessors[choiceLibrary.deleteSelected] =
			this.__deleteSelectedImagesProcessor.process;
	}


	async process(params: MenuChoiceProcessParams) {
		let {choice, image} = params;

		await this.__choiceProcessors[choice](image);
	}


}
