import { Injectable } from '@angular/core';
import { ChoicesProcessorService }
	from '@action-menu/choices-processor.service';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';


@Injectable()
export class ImageActionMenuChoicesProcessorService extends ChoicesProcessorService{

	constructor(
		toggleAddToRemoveFromLibraryProcessor
	) {
		super(toggleAddToRemoveFromLibraryProcessor);

		this._setupFunctions([choiceLabel.addToRemoveFromLibrary]);
	}

}
