import { DataTotalService } from '@services/app-paginator-related/data-total.abstract.service';
import { Injectable } from '@angular/core';
import { UserImageTotalInBrowserStorageService }
	from '@services/browser-storage-related/user-image-total-in-browser-storage.service';
import { AllImagesServicesModule }
	from '@app/routed-modules/all-images/all-images-services.module';
import { ProcessGetUserImageTotalService }
	from '@process-related/process-get-image-total/process-get-user-image-total/process-get-user-image-total.service';


@Injectable({providedIn: AllImagesServicesModule})
export class AllImagesDataTotalService extends DataTotalService {

	constructor(
		__storeTotal_Processor: ProcessGetUserImageTotalService,
		__storedTotal: UserImageTotalInBrowserStorageService
	) {
		super(__storeTotal_Processor, __storedTotal);
	}

}
