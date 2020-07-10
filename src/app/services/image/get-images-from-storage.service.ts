import { LoadData as batch }
	from '../../../data-structures/runtime-state-data/static-classes/load.data';
import { ImagesRestAPIService } from './images-rest-api.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { RequestedLibraryData as requestedLibrary }
	from '../../../data-structures/runtime-state-data/requested-library.data';
import { ImageBatch } from '../../../interfaces/image-batch';
import { GetObjectFromSubscriptionService } from '../get-object-from-subscription.service';


@Injectable({providedIn: 'root'})

export class GetImagesFromStorageService extends GetObjectFromSubscriptionService {


	constructor(
		private __imagesRestApi: ImagesRestAPIService,
		private __localSessionID: LocalSessionIDService
	) {
		super();
	}


	async all(): Promise<ImageBatch | { error: { message: string } }>
	{
		return await this.go(
			this.__imagesRestApi.getAllBatch({
				sessionID: this.__localSessionID.get(),
				batchSize: batch.size,
				batchNumber: batch.number
			})
		);
	}


	async inLibrary(): Promise<ImageBatch | { error: { message: string } }>
	{
		return await this.go(
			this.__imagesRestApi.getLibraryBatch({
				sessionID: this.__localSessionID.get(),
				name: requestedLibrary.name,
				batchSize: batch.size,
				batchNumber: batch.number
			})
		);
	}


}
