import { GlobalActionMenuServicesModule } from '../global-action-menu-services.module';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from '../menu-choice-label.data';
import { ProcessDeleteSelectedImagesFromAccountService }
	from './process-delete-selected-images-from-account_service/process-delete-selected-images-from-account.service';
import { ActionMenuContextChoicesExecutorService }
	from '@action-menu_module/action-menu-context-choices-executor.abstract.service';
import { ToggleEnableImageSelectionService } from './toggle-enable-image-selection.service';
import { AddSelectedImagesToLibraryService } from './add-selected-images-to-library.service';
import { RemoveSelectedImagesFromLibraryService }
	from './remove-selected-images-from-library.service';
import { SelectAllImagesService } from './select-all-images.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class GlobalActionMenuChoicesExecutorService
	extends ActionMenuContextChoicesExecutorService {

	constructor(
		processDeleteSelectedImages: ProcessDeleteSelectedImagesFromAccountService,
		removeSelectedImagesFromLib: RemoveSelectedImagesFromLibraryService,
		addSelectedImagesToLibrary: AddSelectedImagesToLibraryService,
		toggleEnableImgSelection: ToggleEnableImageSelectionService,
		selectAllImages: SelectAllImagesService
	) {
		super([
			{executor: processDeleteSelectedImages, label: choiceLabel.deleteSelectedImages},
			{executor: addSelectedImagesToLibrary, label: choiceLabel.addSelectedToLib},
			{executor: toggleEnableImgSelection, label: choiceLabel.enableImageSelection},
			{executor: selectAllImages, label: choiceLabel.selectAll},
			{executor: removeSelectedImagesFromLib, label: choiceLabel.removeSelectedFromLib},
		]);
	}

}
