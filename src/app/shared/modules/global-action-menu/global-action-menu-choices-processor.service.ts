import { SpecificChoicesExecutorService } from '@action-menu/specific-choices-executor.service';
import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { ToggleEnableMenuChoiceService }
	from '@global-action-menu/toggle-enable-menu-choice.service';


@Injectable()
export class GlobalActionMenuChoicesProcessorService extends SpecificChoicesExecutorService {

	constructor(
		deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService,
		toggleEnableMenuChoiceProcessor: ToggleEnableMenuChoiceService
	) {
		super(
			deleteSelectedImagesProcessor,
			toggleEnableMenuChoiceProcessor,
			toggleEnableMenuChoiceProcessor // Not a mistake. Used for multiple choices.
		);

		this._assignLabelsToExecutors([
			choiceLabel.deleteSelected,
			choiceLabel.enableZoomOnScrolling,
			choiceLabel.selectMultiple
		]);
	}

}
