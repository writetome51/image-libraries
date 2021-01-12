import { DataTotalService } from '@services/app-paginator/data-total.service';
import { GetLibraryProcessorService } from './get-library-processor/get-library-processor.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class LibraryImagesDataTotalService extends DataTotalService {

	constructor(__set_dataTotal_Processor: GetLibraryProcessorService) {
		super(__set_dataTotal_Processor);
	}

}
