import { LoadData as load }
	from '../../../data-structures/runtime-state-data/static-classes/load.data';
import { ImagesRestAPIService } from './images-rest-api.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { RequestedLibraryData as requestedLibrary }
	from '../../../data-structures/runtime-state-data/requested-library.data';
import { ImageBatch } from '../../../interfaces/image-batch';
import { GetObjectFromSubscriptionService as getObjectFromSubscription}
	from '../get-object-from-subscription.service';


@Injectable({providedIn: 'root'})

export class GetImagesFromStorageService {


	constructor(
		private __imagesRestApi: ImagesRestAPIService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async all(): Promise<ImageBatch | { error: { message: string } }>
	{
		return await getObjectFromSubscription.go(
			this.__imagesRestApi.getAllLoad({
				sessionID: this.__localSessionID.get(),
				batchSize: load.size,
				batchNumber: load.number
			})
		);
	}


	async inLibrary(): Promise<ImageBatch | { error: { message: string } }>
	{
		return await getObjectFromSubscription.go(
			this.__imagesRestApi.getLibraryLoad({
				sessionID: this.__localSessionID.get(),
				name: requestedLibrary.name,
				batchSize: load.size,
				batchNumber: load.number
			})
		);
	}


}
