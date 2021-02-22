import { DataTotalService } from '@app-paginator/data-total.abstract.service';
import { Injectable } from '@angular/core';
import { LibraryImageTotalInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/library-image-total-in-browser-storage.service';
import { GetLibraryImageTotalProcessorService } // tslint:disable-next-line:max-line-length
	from '@get-image-total-processor/get-library-image-total-processor/get-library-image-total-processor.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class LibraryImagesDataTotalService extends DataTotalService {

	constructor(
		__storeTotal_Processor: GetLibraryImageTotalProcessorService,
		__storedTotal: LibraryImageTotalInBrowserStorageService
	) {
		super(__storeTotal_Processor, __storedTotal);
	}

}
