import { BatchData as batch } from '../../data/runtime-state-data/batch.data';
import { DBImage } from '../../interfaces/db-image';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { Injectable } from '@angular/core';
import { ImagesRestApiService } from './images-rest-api.service';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { RequestedLibraryData as requestedLibrary }
	from '../../data/runtime-state-data/requested-library.data';


@Injectable({providedIn: 'root'})

export class GetImagesService {


	constructor(
		private __imagesRestApi: ImagesRestApiService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async all(): Promise<DBImage[] | { error: object }> {
		return await getSubscriptionData(
			this.__imagesRestApi.getAllBatch({
				sessionID: this.__localSessionID.get(),
				batchSize: batch.size,
				batchNumber: batch.number
			})
		);
	}


	async inLibrary(): Promise<DBImage[] | { error: object }> {
		return await getSubscriptionData(
			this.__imagesRestApi.getLibraryBatch({
				sessionID: this.__localSessionID.get(),
				name: requestedLibrary.name,
				batchSize: batch.size,
				batchNumber: batch.number
			})
		);
	}


}
