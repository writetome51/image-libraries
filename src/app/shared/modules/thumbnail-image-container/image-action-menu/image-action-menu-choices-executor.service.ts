import { SpecificChoicesExecutorService }
	from '@action-menu/specific-choices-executor.service';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { ToggleAddImageToOrRemoveFromLibraryService }
	from './toggle-add-image-to-or-remove-from-library.service';


@Injectable()
export class ImageActionMenuChoicesExecutorService extends SpecificChoicesExecutorService {

	constructor(
		toggleAddImageToOrRemoveFromLibrary: ToggleAddImageToOrRemoveFromLibraryService
	) {
		super(toggleAddImageToOrRemoveFromLibrary);

		this._assignLabelsToExecutors([
			choiceLabel.addToRemoveFromLibrary
		]);
	}

}
