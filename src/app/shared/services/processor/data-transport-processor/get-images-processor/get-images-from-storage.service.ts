import { ImageBatch } from '@interfaces/image-batch';
import { Injectable } from '@angular/core';
import { LoadData as load } from '@runtime-state-data/static-classes/auto-resettable.data';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class GetImagesFromStorageService {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realmFn: MongoDBRealmFunctionService
	) {
	}


	async all(): Promise<ImageBatch | { error: { message: string } }> {
		let batch = await this.__realmFn.call('pub_getUserImagesBatch', {
			sessionID: this.__sessionIDInBrowser.get(),
			batchSize: load.size,
			batchNumber: load.number
		});
		batch['from'] = 'all';
		return batch;
	}


	async inLibrary(): Promise<ImageBatch | { error: { message: string } }> {
		let batch = await this.__realmFn.call('pub_getLibraryImagesBatch', {
			sessionID: this.__sessionIDInBrowser.get(),
			name: requestedLibrary.name,
			batchSize: load.size,
			batchNumber: load.number
		});
		batch['from'] = 'library';
		return batch;
	}

}
