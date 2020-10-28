import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { DirectProcessor } from '@interfaces/direct-processor';
import { Injectable } from '@angular/core';
import { MenuChoiceProcessParams } from '@interfaces/menu-choice-process-params';
import { MenuChoiceLibraryData as choiceLib } from '@app-action-menu/menu-choice-library.data';
import { ZoomOnScrollEnabledData } from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable()
export class MenuChoiceProcessorService implements DirectProcessor {

	// the keys are the choices, the values are the process functions.
	private readonly __choiceProcessors: object;


	constructor(
		private __deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService
	) {
		this.__choiceProcessors = {};
		this.__choiceProcessors[choiceLib.deleteSelected] =
			this.__deleteSelectedImagesProcessor.process;

		this.__choiceProcessors[choiceLib.enableZoomOnScrolling] = () => {
			ZoomOnScrollEnabledData.data = !(ZoomOnScrollEnabledData.data);
		}

	}


	async process(params: MenuChoiceProcessParams) {
		let {choice, image} = params;

		await this.__choiceProcessors[choice](image);
	}


}
