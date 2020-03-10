import { BatchSizeData as batch } from '../../data-structures/runtime-state-data/static-classes/batch-size.data';
import { DBImage } from '../../interfaces/db-image';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { Injectable } from '@angular/core';
import { ImagesRestApiService } from './images-rest-api.service';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { RequestedLibraryData as requestedLibrary }
	from '../../data-structures/runtime-state-data/requested-library.data';
import { BatchNumberData as batchNumber}
	from '../../data-structures/runtime-state-data/static-classes/batch-number.data';


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
				batchSize: batch.data,
				batchNumber: batchNumber.data
			})
		);
	}


	async inLibrary(): Promise<DBImage[] | { error: object }> {
		return await getSubscriptionData(
			this.__imagesRestApi.getLibraryBatch({
				sessionID: this.__localSessionID.get(),
				name: requestedLibrary.name,
				batchSize: batch.data,
				batchNumber: batchNumber.data
			})
		);
	}


}
