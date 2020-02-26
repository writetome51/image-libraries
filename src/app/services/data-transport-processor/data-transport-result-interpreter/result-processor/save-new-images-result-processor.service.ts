import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { AlertService as alert } from '../../../alert.service';
import { GetAllImagesProcessorService } from '../../get-all-images-processor.service';


@Injectable({providedIn: 'root'})

export class SaveNewImagesResultProcessorService implements DirectProcessor {

	constructor(private __getAllImagesProcessor: GetAllImagesProcessorService) {
	}


	async process(result) {
		if (result.success) alert.success = 'New images saved';
		else alert.error = 'Unexpected error occurred.  Result: ' + JSON.stringify(result);

		await this.__getAllImagesProcessor.process(); // refreshes AllImagesData.data
	}

}
