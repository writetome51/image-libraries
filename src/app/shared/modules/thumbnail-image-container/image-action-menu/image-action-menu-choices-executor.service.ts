import { SpecificChoicesExecutorService }
	from '@action-menu/specific-choices-executor.service';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { ToggleAddToRemoveFromLibraryProcessorService }
	from './toggle-add-to-remove-from-library-processor/toggle-add-to-remove-from-library-processor.service';


@Injectable()
export class ImageActionMenuChoicesExecutorService extends SpecificChoicesExecutorService {

	constructor(
		toggleAddToRemoveFromLibraryProcessor: ToggleAddToRemoveFromLibraryProcessorService
	) {
		super(toggleAddToRemoveFromLibraryProcessor);

		this._assignLabelsToExecutors([
			choiceLabel.addToRemoveFromLibrary
		]);
	}

}
