import { ChoicesProcessorService }
	from '@action-menu/action-menu-choices/menu-choice/choices-processor.service';
import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { Injectable } from '@angular/core';
import { MenuChoiceLibraryData as choiceLib } from './menu-choice-library.data';
import { ToggleZoomOnScrollingProcessorService } from './toggle-zoom-on-scrolling-processor.service';


@Injectable()
export class GlobalMenuChoicesProcessorService extends ChoicesProcessorService {

	constructor(
		deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService,
		toggleZoomOnScrollingProcessor: ToggleZoomOnScrollingProcessorService
	) {
		super(
			deleteSelectedImagesProcessor,
			toggleZoomOnScrollingProcessor
		);

		this._setupFunctions([
			choiceLib.deleteSelected,
			choiceLib.enableZoomOnScrolling
		]);
	}

}
