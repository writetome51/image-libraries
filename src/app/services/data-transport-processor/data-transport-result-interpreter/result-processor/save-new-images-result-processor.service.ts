import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { AlertService as alert } from '../../../alert.service';
import { GetAllImagesProcessorService } from '../../get-all-images-processor.service';
import { NewImagesData as newImages } from '../../../../data/runtime-state-data/new-images.data';


@Injectable({providedIn: 'root'})

export class SaveNewImagesResultProcessorService implements DirectProcessor {

	constructor(private __getAllImagesProcessor: GetAllImagesProcessorService) {
	}


	async process(result) {
		alert.success = 'New images saved';
		await this.__getAllImagesProcessor.process(); // refreshes AllImagesData.data
		newImages.data = [];
	}

}
