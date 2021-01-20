import { SpecificChoicesExecutorService } from '@action-menu/specific-choices-executor.service';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { ToggleEnableMenuChoiceService } from './toggle-enable-menu-choice.service';
import { DeleteSelectedImagesService }
	from './delete-selected-images/delete-selected-images.service';


@Injectable()
export class GlobalActionMenuChoicesExecutorService extends SpecificChoicesExecutorService {

	constructor(
		deleteSelectedImages: DeleteSelectedImagesService,
		toggleEnableMenuChoice: ToggleEnableMenuChoiceService
	) {
		super([
			{executor: deleteSelectedImages, label: choiceLabel.deleteSelectedImages},
			{executor: toggleEnableMenuChoice, label: choiceLabel.selectMultipleImages}
		]);
	}

}
