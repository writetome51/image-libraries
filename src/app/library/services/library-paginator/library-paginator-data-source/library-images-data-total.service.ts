import { DataTotalService } from '@app-paginator/app-paginator-data-source/data-total.service';
import { Injectable } from '@angular/core';
import { LibraryImageTotalInBrowserStorageService }
	from '@item-in-browser-storage/library-image-total-in-browser-storage.service';
import { GetLibraryImageTotalProcessorService }
	from '@get-image-total-processor/get-library-image-total-processor/get-library-image-total-processor.service';


@Injectable({providedIn: 'root'})
export class LibraryImagesDataTotalService extends DataTotalService {

	constructor(
		__set_dataTotal_Processor: GetLibraryImageTotalProcessorService,
		__storedTotal: LibraryImageTotalInBrowserStorageService
	) {
		super(__set_dataTotal_Processor, __storedTotal);
	}

}
