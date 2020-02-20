import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '../get-object-from-subscription.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { ImagesRestApiService } from './images-rest-api.service';
import { DBImage } from '../../interfaces/db-image';


@Injectable({providedIn: 'root'})

export class GetImagesService {


	constructor(
		private __imagesRestApi: ImagesRestApiService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async all(): Promise<DBImage[] | { error: object }> {
		return await getObjectFromSubscription.go(
			this.__imagesRestApi.getAllBatch({sessionID: this.__localSessionID.get()})
		);
	}


	async inLibrary(name): Promise<DBImage[] | { error: object }> {
		return await getObjectFromSubscription.go(
			this.__imagesRestApi.getLibraryBatch(
				{sessionID: this.__localSessionID.get(), name}
			)
		);
	}


}
