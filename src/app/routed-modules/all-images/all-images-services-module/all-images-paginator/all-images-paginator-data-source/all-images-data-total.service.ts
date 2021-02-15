import { DataTotalService } from '@app-paginator/app-paginator-data-source/data-total.service';
import { Injectable } from '@angular/core';
import { GetUserImageTotalProcessorService } // tslint:disable-next-line:max-line-length
	from '@get-image-total-processor/get-user-image-total-processor/get-user-image-total-processor.service';
import { UserImageTotalInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/user-image-total-in-browser-storage.service';
import { AllImagesServicesModule }
	from '@app/routed-modules/all-images/all-images-services-module/all-images-services.module';


@Injectable({providedIn: AllImagesServicesModule})
export class AllImagesDataTotalService extends DataTotalService {

	constructor(
		__storeTotal_Processor: GetUserImageTotalProcessorService,
		__storedTotal: UserImageTotalInBrowserStorageService
	) {
		super(__storeTotal_Processor, __storedTotal);
	}

}
