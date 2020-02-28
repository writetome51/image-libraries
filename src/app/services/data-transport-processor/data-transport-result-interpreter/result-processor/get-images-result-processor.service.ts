import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { DBImage } from '../../../../interfaces/db-image';
import { LoadedImagesData as images }
	from '../../../../data/runtime-state-data/loaded-images.data';


@Injectable({providedIn: 'root'})

export class GetImagesResultProcessorService implements DirectProcessor {

	async process(result: DBImage[]) {
		images.data = {};

		result.forEach((image: DBImage) => {
			images.data[image._id] = image;
		});
	}

}
