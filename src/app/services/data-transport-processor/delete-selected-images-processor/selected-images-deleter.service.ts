import { GetObjectFromSubscriptionService } from '../../get-object-from-subscription.service';
import { ImagesRestAPIService } from '../../image/images-rest-api.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../../local-data/local-session-id.service';
import { SelectedImageNamesData as selectedImageNames }
	from '../../../../data-structures/runtime-state-data/selected-image-names.data';


@Injectable({providedIn: 'root'})

export class SelectedImagesDeleterService extends GetObjectFromSubscriptionService {


	constructor(
		private __imagesRestApi: ImagesRestAPIService,
		private __localSessionID: LocalSessionIDService
	) {
		super();
	}


	async delete(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.go(
			this.__imagesRestApi.delete(
				{sessionID: this.__localSessionID.get(), imageNames: selectedImageNames.data}
			)
		);
	}


}
