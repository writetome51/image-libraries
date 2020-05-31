import { BatchNumberData as batchNumber }
	from '../../../data-structures/runtime-state-data/static-classes/batch-number.data';
import { BatchSizeData as batchSize }
	from '../../../data-structures/runtime-state-data/static-classes/batch-size.data';
import { DBImage } from '../../../interfaces/db-image';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { ImagesRestApiService } from './images-rest-api.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { RequestedLibraryData as requestedLibrary }
	from '../../../data-structures/runtime-state-data/requested-library.data';


@Injectable({providedIn: 'root'})

export class GetImagesFromStorageService {


	constructor(
		private __imagesRestApi: ImagesRestApiService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async all(): Promise<DBImage[] | { error: object }> {
		return await getSubscriptionData(
			this.__imagesRestApi.getAllBatch({
				sessionID: this.__localSessionID.get(),
				batchSize: batchSize.data,
				batchNumber: batchNumber.data
			})
		);
	}


	async inLibrary(): Promise<DBImage[] | { error: object }> {
		return await getSubscriptionData(
			this.__imagesRestApi.getLibraryBatch({
				sessionID: this.__localSessionID.get(),
				name: requestedLibrary.name,
				batchSize: batchSize.data,
				batchNumber: batchNumber.data
			})
		);
	}


}
