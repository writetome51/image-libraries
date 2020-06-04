import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../../local-data/local-session-id.service';
import { ImagesRestApiService } from '../../image/images-rest-api.service';
import { NewImagesData as newImages }
	from '../../../../data-structures/runtime-state-data/static-classes/new-images.data';
import { GetObjectFromSubscriptionService } from '../../get-object-from-subscription.service';


@Injectable({providedIn: 'root'})

export class NewImagesSaverService extends GetObjectFromSubscriptionService {


	constructor(
		private __imagesRestApi: ImagesRestApiService,
		private __localSessionID: LocalSessionIDService
	) {
		super();
	}


	async save(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.go(
			this.__imagesRestApi.add(
				{sessionID: this.__localSessionID.get(), images: newImages.data}
			)
		);
	}


}
