import { DataTotalService } from '@services/app-paginator/data-total.abstract.service';
import { Injectable } from '@angular/core';
import { LibraryImageTotalInBrowserStorageService }
	from '@services/browser-storage/library-image-total-in-browser-storage.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';
import { ProcessGetLibraryImageTotalService }
	from '@services/process/process-get-image-total/process-get-library-image-total/process-get-library-image-total.service';


@Injectable({providedIn: LibraryServicesModule})
export class LibraryImagesDataTotalService extends DataTotalService {

	constructor(
		__process_storeTotal: ProcessGetLibraryImageTotalService,
		__storedTotal: LibraryImageTotalInBrowserStorageService
	) {
		super(__process_storeTotal, __storedTotal);
	}

}
