import { SetInitialDataTotalService } from './set-initial-data-total.service';
import { GetAllImagesTotalProcessorService }
	from '../../data-transport-processor/image-fetching-processor/get-all-images-total-processor.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class SetInitialDataTotalForAllImagesService extends SetInitialDataTotalService {

	constructor(__getAllImagesTotalProcessor: GetAllImagesTotalProcessorService) {
		super(__getAllImagesTotalProcessor);
	}

}
