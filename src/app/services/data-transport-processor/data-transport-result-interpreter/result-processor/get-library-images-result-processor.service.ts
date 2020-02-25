import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { DBImage } from '../../../../interfaces/db-image';
import { LibraryImagesData as images }
	from '../../../../data/runtime-state-data/library-images.data';


@Injectable({providedIn: 'root'})

export class GetLibraryImagesResultProcessorService implements DirectProcessor {

	async process(result: DBImage[]) {
		images.data = {};

		result.forEach((image: DBImage) => {
			images.data[image._id] = image;
		});
	}

}
