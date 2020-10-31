import { Injectable } from '@angular/core';
import { MenuChoiceLibraryData as choiceLib } from './menu-choice-library.data';
import { ZoomOnScrollEnabledData } from '@runtime-state-data/static-classes/auto-resettable.data';
import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';


@Injectable()
export class ChoiceProcessorsService {

	private __data = {};


	constructor(
		// Have each choice processor be injected here
		private __deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService
	) {
		this.__data[choiceLib.deleteSelected] =
			this.__deleteSelectedImagesProcessor.process;

		this.__data[choiceLib.enableZoomOnScrolling] = () => {
			ZoomOnScrollEnabledData.data = !(ZoomOnScrollEnabledData.data);
		};
	}

}
