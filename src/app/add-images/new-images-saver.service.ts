import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '@services/get-object-from-subscription.service';
import { ImagesRestAPIService } from '@services/images-rest-api.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '@services/local-storage-data/local-session-id.service';
import { NewImagesData as newImages } from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: 'root'})

export class NewImagesSaverService {

	constructor(
		private __imagesRestApi: ImagesRestAPIService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async save(): Promise<{ success: true } | { error: { message: string } }> {
		return await getObjectFromSubscription.go(
			this.__imagesRestApi.add(
				{sessionID: this.__localSessionID.get(), images: newImages.data}
			)
		);
	}

}
