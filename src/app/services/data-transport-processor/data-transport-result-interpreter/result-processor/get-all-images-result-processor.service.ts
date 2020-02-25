import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { DBImage } from '../../../../interfaces/db-image';
import { AllImagesData as allImages } from '../../../../data/runtime-state-data/all-images.data';


@Injectable({providedIn: 'root'})

export class GetAllImagesResultProcessorService implements DirectProcessor {

	async process(result: DBImage[]) {
		allImages.data = result;
	}

}
