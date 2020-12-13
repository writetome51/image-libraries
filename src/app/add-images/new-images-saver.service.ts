import { AppImage } from '@interfaces/app-image';
import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '@services/get-object-from-subscription.service';
import { ImagesRestAPIService } from '@services/images-rest-api.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';


@Injectable({providedIn: 'root'})
export class NewImagesSaverService {

	constructor(
		private __imagesRestApi: ImagesRestAPIService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async save(newImages: AppImage[]): Promise<{ success: true } | { error: { message: string } }> {
		return await getObjectFromSubscription.go(
			this.__imagesRestApi.add(
				{sessionID: this.__localSessionID.get(), images: newImages}
			)
		);
	}

}
