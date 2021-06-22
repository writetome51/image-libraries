import { GlobalActionMenuServicesModule } from '../global-action-menu-services.module';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from '../menu-choice-label.data';
import { ProcessDeleteSelectedImagesFromAccountService }
	from './process-delete-selected-images-from-account_service/process-delete-selected-images-from-account.service';
import { SpecificChoicesExecutorService }
	from '@action-menu_module/specific-choices-executor.abstract.service';
import { ToggleEnableSelectImagesService }
	from './toggle-enable-select-images.service';
import { AddSelectedImagesToLibraryService }
	from './add-selected-images-to-library.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class GlobalActionMenuChoicesExecutorService extends SpecificChoicesExecutorService {

	constructor(
		processDeleteSelectedImages: ProcessDeleteSelectedImagesFromAccountService,
		addSelectedImagesToLibrary: AddSelectedImagesToLibraryService,
		toggleEnableSelectImages: ToggleEnableSelectImagesService
	) {
		super([
			{executor: processDeleteSelectedImages, label: choiceLabel.deleteSelectedImages},
			{executor: addSelectedImagesToLibrary, label: choiceLabel.addSelectedToLib},
			{executor: toggleEnableSelectImages, label: choiceLabel.selectImages},
		//	{executor: toggleEnableSelectImages, label: choiceLabel.selectImages},
		]);
	}

}
