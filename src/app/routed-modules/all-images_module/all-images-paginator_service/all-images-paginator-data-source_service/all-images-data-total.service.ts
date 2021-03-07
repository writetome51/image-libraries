import { DataTotalService } from '@app-paginator/data-total.abstract.service';
import { Injectable } from '@angular/core';
import { UserImageTotalInBrowserStorageService }
	from '@browser-storage/user-image-total-in-browser-storage.service';
import { AllImagesServicesModule } from '../../all-images-services.module';
import { ProcessGetUserImageTotalService }
	from '@process/process-get-user-image-total_service/process-get-user-image-total.service';


@Injectable({providedIn: AllImagesServicesModule})
export class AllImagesDataTotalService extends DataTotalService {

	constructor(
		__storeTotal: ProcessGetUserImageTotalService,
		__storedTotal: UserImageTotalInBrowserStorageService
	) {
		super(__storeTotal, __storedTotal);
	}

}
