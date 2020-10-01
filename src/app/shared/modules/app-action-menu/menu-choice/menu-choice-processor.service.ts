import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { DirectProcessor } from '@interfaces/direct-processor';
import { Injectable } from '@angular/core';
import { MenuChoiceProcessParams } from '@interfaces/menu-choice-process-params';
import { SelectedImageNamesData as selectedImageNames }
	from '@runtime-state-data/selected-image-names.data';


@Injectable()
export class MenuChoiceProcessorService implements DirectProcessor {

	async process(params: MenuChoiceProcessParams) {
		let {choice, image} = params;

		// for debugging:
		console.log(choice);

		if (choice.startsWith('Delete')) {
			if (choice === 'Delete') selectedImageNames.data.push(image.name);
			console.log(selectedImageNames.data);//debugging
			await this.__deleteSelectedImagesProcessor.process();
		}

	}


	constructor(private __deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService) {
	}

}
