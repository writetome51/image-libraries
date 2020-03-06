import { SetInitialDataTotalService } from './set-initial-data-total.service';
import { Injectable } from '@angular/core';
import { GetLibraryProcessorService }
	from '../../data-transport-processor/image-fetching-processor/get-library-processor.service';


@Injectable({providedIn: 'root'})

export class SetInitialDataTotalForLibraryService extends SetInitialDataTotalService {

	constructor(__getLibraryTotalProcessor: GetLibraryProcessorService) {
		super(__getLibraryTotalProcessor);
	}

}
