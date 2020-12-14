import { MenuChoicesProcessorService } from '@action-menu/menu-choices-processor.service';
import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { ToggleEnableMenuChoiceProcessorService }
	from '@global-action-menu/toggle-enable-menu-choice-processor.service';


@Injectable()
export class GlobalActionMenuChoicesProcessorService extends MenuChoicesProcessorService {

	constructor(
		deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService,
		toggleEnableMenuChoiceProcessor: ToggleEnableMenuChoiceProcessorService
	) {
		super(
			deleteSelectedImagesProcessor,
			toggleEnableMenuChoiceProcessor,
			toggleEnableMenuChoiceProcessor
		);

		this._assignLabelsToProcessors([
			choiceLabel.deleteSelected,
			choiceLabel.enableZoomOnScrolling,
			choiceLabel.selectMultiple
		]);
	}

}
