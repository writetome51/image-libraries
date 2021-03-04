import { DataTotalService } from '@app-paginator/data-total.abstract.service';
import { Injectable } from '@angular/core';
import { LibraryImageTotalInBrowserStorageService }
	from '@browser-storage/library-image-total-in-browser-storage.service';
import { LibraryServicesModule } from '../../../library-services.module';
import { ProcessGetLibraryImageTotalService }
	from './process-get-library-image-total_service/process-get-library-image-total.service';



@Injectable({providedIn: LibraryServicesModule})
export class LibraryImagesDataTotalService extends DataTotalService {

	constructor(
		__process_storeTotal: ProcessGetLibraryImageTotalService,
		__storedTotal: LibraryImageTotalInBrowserStorageService
	) {
		super(__process_storeTotal, __storedTotal);
	}

}
