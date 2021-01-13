import { ImageBatch } from '@interfaces/image-batch';
import { Injectable } from '@angular/core';
import { LoadData as load } from '@runtime-state-data/static-classes/auto-resettable.data';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';


@Injectable({providedIn: 'root'})
export class GetImagesFromStorageService {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realm: MongoDBRealmService
	) {
	}


	async all(): Promise<ImageBatch | { error: { message: string } }> {
		let batch = await this.__realm.callFn('pub_getUserImagesBatch', {
			sessionID: this.__sessionIDInBrowser.get(),
			batchSize: load.size,
			batchNumber: load.number
		});
		batch['from'] = 'all';
		return batch;
	}


	async inLibrary(): Promise<ImageBatch | { error: { message: string } }> {
		let batch = await this.__realm.callFn('pub_getLibraryImagesBatch', {
			sessionID: this.__sessionIDInBrowser.get(),
			name: requestedLibrary.name,
			batchSize: load.size,
			batchNumber: load.number
		});
		batch['from'] = 'library';
		return batch;
	}

}
