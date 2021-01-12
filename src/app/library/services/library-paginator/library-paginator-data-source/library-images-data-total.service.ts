import { DataTotalService } from '@services/app-paginator/data-total.service';
import { Injectable } from '@angular/core';
import { GetLibraryImagesTotalProcessorService }
	from './get-library-images-total-processor.service';


@Injectable({providedIn: 'root'})
export class LibraryImagesDataTotalService extends DataTotalService {

	constructor(__set_dataTotal_Processor: GetLibraryImagesTotalProcessorService) {
		super(__set_dataTotal_Processor);
	}

}
