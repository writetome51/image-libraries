import { AllImagesServicesModule } from '../../all-images-services.module';
import { AssureUserImageTotalStoredLocallyService }
	from '@services/assure-user-image-total-stored-locally.service';
import { DataTotalService } from '@app-paginator/data-total.abstract.service';
import { Injectable } from '@angular/core';
import { UserImageTotalInBrowserStorageService }
	from '@browser-storage/user-image-total-in-browser-storage.service';


@Injectable({providedIn: AllImagesServicesModule})
export class AllImagesDataTotalService extends DataTotalService {

	constructor(
		__storeTotal: AssureUserImageTotalStoredLocallyService,
		__storedTotal: UserImageTotalInBrowserStorageService
	) {
		super(__storeTotal, __storedTotal);
	}

}
