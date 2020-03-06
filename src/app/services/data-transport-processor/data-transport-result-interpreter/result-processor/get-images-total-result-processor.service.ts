import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { ImageTotalData as totalImages }
	from '../../../../data/runtime-state-data/static-classes/image-total.data';


@Injectable({providedIn: 'root'})

export class GetImagesTotalResultProcessorService implements DirectProcessor {

	async process(result: { dataTotal: number }) {
		totalImages.data = result.dataTotal;
	}

}
