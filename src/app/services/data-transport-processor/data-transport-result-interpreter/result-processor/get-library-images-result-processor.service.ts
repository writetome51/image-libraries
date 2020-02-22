import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { DBImage } from '../../../../interfaces/db-image';
import { LibraryImagesData as libImages }
	from '../../../../data/runtime-state-data/library-images.data';


@Injectable({providedIn: 'root'})

export class GetLibraryImagesResultProcessorService implements DirectProcessor {

	async process(result: DBImage[]) {
		libImages.data = {};

		result.forEach((image: DBImage) => {
			libImages.data[image._id] = image;
		});
	}

}
