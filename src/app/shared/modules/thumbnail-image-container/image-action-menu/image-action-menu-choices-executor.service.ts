import { SpecificChoicesExecutorService }
	from '@action-menu/specific-choices-executor.service';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { ProcessToggleAddImageToLibraryService }
	from './toggle-add-image-to-library/process-toggle-add-image-to-library.service';


@Injectable()
export class ImageActionMenuChoicesExecutorService extends SpecificChoicesExecutorService {

	constructor(
		processToggleAddImageToLibrary: ProcessToggleAddImageToLibraryService
	) {
		super([
			{executor: processToggleAddImageToLibrary, label: choiceLabel.toggleAddImageToLibrary}
		]);
	}

}
