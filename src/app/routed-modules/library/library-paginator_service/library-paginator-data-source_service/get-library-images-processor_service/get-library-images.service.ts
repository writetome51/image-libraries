import { ImageBatch } from '@interfaces/image-batch.interface';
import { Injectable } from '@angular/core';
import { LoadData as load } from '@runtime-state-data/static-classes/auto-resettable.data';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { SessionIDInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/session-id-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class GetLibraryImagesService implements IDoThis {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realmFn: MongoDBRealmFunctionService
	) {
	}


	async go(): Promise<ImageBatch | HasError> {
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
