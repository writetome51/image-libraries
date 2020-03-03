import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { TotalImagesData as totalImages } from '../../../../data/runtime-state-data/total-images.data';


@Injectable({providedIn: 'root'})

export class GetImagesTotalResultProcessorService implements DirectProcessor {

	async process(result: { dataTotal: number }) {
		totalImages.data = result.dataTotal;
	}

}
