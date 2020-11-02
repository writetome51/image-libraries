import { Injectable } from '@angular/core';
import { MenuChoiceLibraryData as choiceLib } from './menu-choice-library.data';
import { ZoomOnScrollEnabledData } from '@runtime-state-data/static-classes/auto-resettable.data';
import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { DirectProcessor } from '@interfaces/direct-processor';
import { MenuChoice } from '@interfaces/menu-choice';


@Injectable()
export class ChoicesProcessorService implements DirectProcessor {

	private __data = {};


	constructor(
		// Have each choice processor be injected here
		private __deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService
	) {
		this.__data[choiceLib.deleteSelected.label] =
			this.__deleteSelectedImagesProcessor.process;

		this.__data[choiceLib.enableZoomOnScrolling.label] = () => {
			ZoomOnScrollEnabledData.data = !(ZoomOnScrollEnabledData.data);
		};
	}


	async process(choice: MenuChoice) {
		let {label, data} = choice;

		await this.__data[label](data);
	}

}
