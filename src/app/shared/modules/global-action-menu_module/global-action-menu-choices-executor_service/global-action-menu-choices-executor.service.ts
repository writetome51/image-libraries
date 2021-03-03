import { SpecificChoicesExecutorService }
	from '@app/shared/modules/action-menu_module/specific-choices-executor.abstract.service';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from '../menu-choice-label.data';
import { ToggleEnableMenuChoiceService } from './toggle-enable-menu-choice.service';
import { ProcessDeleteSelectedImagesService }
	from './process-delete-selected-images_service/process-delete-selected-images.service';
import { GlobalActionMenuServicesModule }
	from '@app/shared/modules/global-action-menu_module/global-action-menu-services.module';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class GlobalActionMenuChoicesExecutorService extends SpecificChoicesExecutorService {

	constructor(
		deleteSelectedImages: ProcessDeleteSelectedImagesService,
		toggleEnableMenuChoice: ToggleEnableMenuChoiceService
	) {
		super([
			{executor: deleteSelectedImages, label: choiceLabel.deleteSelectedImages},
			{executor: toggleEnableMenuChoice, label: choiceLabel.selectMultipleImages}
		]);
	}

}
