import { Injectable } from '@angular/core';
import { MenuChoiceLibraryData as choiceLib } from './menu-choice-library.data';
import { ZoomOnScrollEnabledData } from '@runtime-state-data/static-classes/auto-resettable.data';
import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { DirectProcessor } from '@interfaces/direct-processor';
import { MenuChoice } from '@interfaces/menu-choice';


@Injectable()
export class ChoicesProcessorService implements DirectProcessor {

	private __functions = {};


	constructor(
		// Have each choice processor be injected here
		private __deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService
	) {
		this.__functions[choiceLib.deleteSelected.label] =
			this.__deleteSelectedImagesProcessor.process;

		this.__functions[choiceLib.enableZoomOnScrolling.label] = () => {
			ZoomOnScrollEnabledData.data = !(ZoomOnScrollEnabledData.data);
		};
	}


	async process(choice: MenuChoice) {
		let {label, data} = choice;

		await this.__functions[label](data);
	}

}
