import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { ImagesRestApiService } from './images-rest-api.service';
import { NewImagesData as newImages } from '../../data/runtime-state-data/static classes/new-images.data';
import { getSubscriptionData } from '@writetome51/get-subscription-data';


@Injectable({providedIn: 'root'})

export class NewImagesSaverService {


	constructor(
		private __imagesRestApi: ImagesRestApiService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async save(): Promise<{ success: boolean } | { error: object }> {
		return await getSubscriptionData(
			this.__imagesRestApi.add(
				{sessionID: this.__localSessionID.get(), images: newImages.data}
			)
		);
	}


}
