import { MenuChoicesProcessorService } from '@action-menu/menu-choices-processor.service';
import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { ToggleZoomOnScrollingProcessorService } from './toggle-zoom-on-scrolling-processor.service';


@Injectable()
export class GlobalActionMenuChoicesProcessorService extends MenuChoicesProcessorService {

	constructor(
		deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService,
		toggleZoomOnScrollingProcessor: ToggleZoomOnScrollingProcessorService
	) {
		super(
			deleteSelectedImagesProcessor,
			toggleZoomOnScrollingProcessor
		);

		this._assignLabelsToProcessors([
			choiceLabel.deleteSelected,
			choiceLabel.enableZoomOnScrolling
		]);
	}

}
