import { GlobalActionMenuServicesModule } from '../global-action-menu-services.module';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from '../menu-choice-label.data';
import { ProcessDeleteSelectedImagesService }
	from './process-delete-selected-images_service/process-delete-selected-images.service';
import { SpecificChoicesExecutorService }
	from '@action-menu_module/specific-choices-executor.abstract.service';
import { ToggleEnableSelectMultipleImagesService }
	from './toggle-enable-select-multiple-images.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class GlobalActionMenuChoicesExecutorService extends SpecificChoicesExecutorService {

	constructor(
		processDeleteSelectedImages: ProcessDeleteSelectedImagesService,
		toggleEnableSelectMultiple: ToggleEnableSelectMultipleImagesService
	) {
		super([
			{executor: processDeleteSelectedImages, label: choiceLabel.deleteSelectedImages},
			{executor: toggleEnableSelectMultiple, label: choiceLabel.selectMultipleImages}
		]);
	}

}
