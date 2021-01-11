import { ImageBatch } from '@interfaces/image-batch';
import { Injectable } from '@angular/core';
import { LoadData as load } from '@runtime-state-data/static-classes/auto-resettable.data';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/local-session-id.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';


@Injectable({providedIn: 'root'})
export class GetImagesFromStorageService {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __realm: MongoDBRealmService
	) {
	}


	async all(): Promise<ImageBatch | { error: { message: string } }> {
		return this.__realm.callFn('pub_getUserImagesBatch', {
			sessionID: this.__localSessionID.get(),
			batchSize: load.size,
			batchNumber: load.number
		});
	}


	async inLibrary(): Promise<ImageBatch | { error: { message: string } }> {
		return this.__realm.callFn('pub_getLibraryImagesBatch', {
			sessionID: this.__localSessionID.get(),
			name: requestedLibrary.name,
			batchSize: load.size,
			batchNumber: load.number
		});
	}

}
