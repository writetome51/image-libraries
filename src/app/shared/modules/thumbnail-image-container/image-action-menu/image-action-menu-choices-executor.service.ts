import { SpecificChoicesExecutorService }
	from '@action-menu/specific-choices-executor.service';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { ToggleAddImageToLibraryService }
	from './toggle-add-image-to-library/toggle-add-image-to-library.service';


@Injectable()
export class ImageActionMenuChoicesExecutorService extends SpecificChoicesExecutorService {

	constructor(
		toggleAddImageToLibrary: ToggleAddImageToLibraryService
	) {
		super([
			{executor: toggleAddImageToLibrary, label: choiceLabel.toggleAddImageToLibrary}
		]);
	}

}
