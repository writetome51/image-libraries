import { SetInitialDataTotalService } from './set-initial-data-total.service';
import { Injectable } from '@angular/core';
import { GetLibraryImagesTotalProcessorService }
	// tslint:disable-next-line:max-line-length
	from '../../data-transport-processor/image-fetching-processor/get-library-images-total-processor.service';


@Injectable({providedIn: 'root'})

export class SetInitialDataTotalForLibraryImagesService extends SetInitialDataTotalService {

	constructor(__getLibraryImagesTotalProcessor: GetLibraryImagesTotalProcessorService) {
		super(__getLibraryImagesTotalProcessor);
	}

}
