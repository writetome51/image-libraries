import { DataTotalService } from '@app-paginator/app-paginator-data-source/data-total.service';
import { Injectable } from '@angular/core';
import { GetUserImageTotalProcessorService }
	from '@get-image-total-processor/get-user-image-total-processor/get-user-image-total-processor.service';
import { UserImageTotalInBrowserStorageService }
	from '@item-in-browser-storage/user-image-total-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class AllImagesDataTotalService extends DataTotalService {

	constructor(
		__set_dataTotal_Processor: GetUserImageTotalProcessorService,
		__storedTotal: UserImageTotalInBrowserStorageService
	) {
		super(__set_dataTotal_Processor, __storedTotal);
	}

}
