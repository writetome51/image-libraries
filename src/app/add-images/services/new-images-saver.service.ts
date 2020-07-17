import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../../services/local-data/local-session-id.service';
import { ImagesRestAPIService } from '../../services/image/images-rest-api.service';
import { NewImagesData as newImages }
	from '../../../data-structures/runtime-state-data/static-classes/new-images.data';
import { GetObjectFromSubscriptionService as getObjectFromSubscription}
	from '../../services/get-object-from-subscription.service';


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
