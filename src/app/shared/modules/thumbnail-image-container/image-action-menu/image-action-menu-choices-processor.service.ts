import { ChoicesProcessorService }
	from '@action-menu/choices-processor.service';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { ToggleAddToRemoveFromLibraryProcessorService }
	from './toggle-add-to-remove-from-library-processor.service';


@Injectable()
export class ImageActionMenuChoicesProcessorService extends ChoicesProcessorService {

	constructor(
		toggleAddToRemoveFromLibraryProcessor: ToggleAddToRemoveFromLibraryProcessorService
	) {
		super(toggleAddToRemoveFromLibraryProcessor);

		this._setupFunctions([
			choiceLabel.addToRemoveFromLibrary
		]);
	}

}
