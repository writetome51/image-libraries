import { SetInitialDataTotalService } from './set-initial-data-total.service';
import { Injectable } from '@angular/core';
import { GetAllImagesProcessorService }
	from '../../data-transport-processor/get-images/get-all-images-processor.service';

@Injectable({providedIn: 'root'})

export class SetInitialDataTotalForAllImagesService extends SetInitialDataTotalService {

	constructor(__getAllImagesProcessor: GetAllImagesProcessorService) {
		super(__getAllImagesProcessor);
	}

}
