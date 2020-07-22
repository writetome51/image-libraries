import { GetObjectFromSubscriptionService as getObjectFromSubscription}
	from '../../../shared/services/get-object-from-subscription.service';
import { ImagesRestAPIService } from '../../../shared/services/images-rest-api.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../../../shared/services/local-data/local-session-id.service';
import { SelectedImageNamesData as selectedImageNames }
	from '../../../../data-structures/runtime-state-data/selected-image-names.data';


@Injectable({providedIn: 'root'})

export class SelectedImagesDeleterService {

	constructor(
		private __imagesRestApi: ImagesRestAPIService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async delete(): Promise<{ success: true } | { error: { message: string } }> {
		return await getObjectFromSubscription.go(
			this.__imagesRestApi.delete(
				{sessionID: this.__localSessionID.get(), imageNames: selectedImageNames.data}
			)
		);
	}

}
