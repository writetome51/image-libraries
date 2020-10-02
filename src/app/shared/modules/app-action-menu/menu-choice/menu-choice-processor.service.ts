import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { DirectProcessor } from '@interfaces/direct-processor';
import { Injectable } from '@angular/core';
import { MenuChoiceProcessParams } from '@interfaces/menu-choice-process-params';
import { MenuChoiceLibraryData as choiceLibrary} from '@app-action-menu/menu-choice-library.data';


@Injectable()
export class MenuChoiceProcessorService implements DirectProcessor {

	async process(params: MenuChoiceProcessParams) {
		let {choice, image} = params;

		if (choice === choiceLibrary.deleteSelected) {
			await this.__deleteSelectedImagesProcessor.process();
		}

	}


	constructor(private __deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService) {
	}

}
