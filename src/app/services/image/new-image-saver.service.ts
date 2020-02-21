import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '../get-object-from-subscription.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { ImagesRestApiService } from './images-rest-api.service';
import { NewImagesData as newImages } from '../../data/runtime-state-data/new-images.data';


@Injectable({providedIn: 'root'})

export class NewImageSaverService {


	constructor(
		private __imagesRestApi: ImagesRestApiService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async save(): Promise<{ success: boolean } | { error: object }> {
		return await getObjectFromSubscription.go(
			this.__imagesRestApi.add(
				{sessionID: this.__localSessionID.get(), images: newImages.data}
			)
		);
	}


}
