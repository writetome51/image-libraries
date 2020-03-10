import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { AlertService as alert } from '../../../alert.service';
import { GetAllImagesProcessorService }
	from '../../image-fetching-processor/get-all-images-processor.service';
import { NewImagesData as newImages }
	from '../../../../data-structures/runtime-state-data/static-classes/new-images.data';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})

export class SaveNewImagesResultProcessorService implements DirectProcessor {

	constructor(
		private __getAllImagesProcessor: GetAllImagesProcessorService,
		private __router: Router
	) {
	}


	async process(result) {
		newImages.data = [];
		if (result.success) alert.success = 'New images saved';
	}

}
