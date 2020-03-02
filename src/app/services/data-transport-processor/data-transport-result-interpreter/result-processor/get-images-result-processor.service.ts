import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { DBImage } from '../../../../interfaces/db-image';
import { LoadedImagesData as images }
	from '../../../../data/runtime-state-data/loaded-images.data';
import { TotalImagesData as totalImages } from '../../../../data/runtime-state-data/total-images.data';


@Injectable({providedIn: 'root'})

export class GetImagesResultProcessorService implements DirectProcessor {

	async process(result: { dataTotal: number, batch: DBImage[] }) {
		images.data = {};
		totalImages.data = result.dataTotal;

		result.batch.forEach((image: DBImage) => {
			images.data[image._id] = image;
		});
	}

}
