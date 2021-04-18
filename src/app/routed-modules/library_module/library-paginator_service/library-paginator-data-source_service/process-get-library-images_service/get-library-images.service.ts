import { ImageRecordBatch } from '@interfaces/image-record-batch.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@db/mongo-db-realm-function.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { LibraryServicesModule } from '../../../library-services.module';
import { LoadConfiguration } from '@interfaces/load-configuration.interface';
import { GetImageRecords } from '@interfaces/get-image-records.interface';


@Injectable({providedIn: LibraryServicesModule})
export class GetLibraryImagesService implements GetImageRecords {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realmFn: MongoDBRealmFunctionService
	) {}


	async go(load: LoadConfiguration): Promise<ImageRecordBatch | HasError> {

		return await this.__realmFn.call('pub_getLibraryImagesBatch', {
			sessionID: this.__sessionIDInBrowser.get(),
			name: requestedLibrary.name,
			batchSize: load.size,
			batchNumber: load.number
		});
	}

}
