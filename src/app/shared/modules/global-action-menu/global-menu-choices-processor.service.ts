import { Injectable } from '@angular/core';
import { MenuChoiceLibraryData as choiceLib } from './menu-choice-library.data';
import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { ChoicesProcessorService }
	from '@action-menu/action-menu-choices/menu-choice/choices-processor.service';
import { ToggleZoomOnScrollingProcessorService } from './toggle-zoom-on-scrolling-processor.service';


@Injectable()
export class GlobalMenuChoicesProcessorService extends ChoicesProcessorService {

	protected _functionLabels: string[] = [
		choiceLib.deleteSelected.label,
		choiceLib.enableZoomOnScrolling.label
	];


	constructor(
		deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService,
		toggleZoomOnScrollingProcessor: ToggleZoomOnScrollingProcessorService
	) {
		super(
			deleteSelectedImagesProcessor,
			toggleZoomOnScrollingProcessor
		);
	}

}
