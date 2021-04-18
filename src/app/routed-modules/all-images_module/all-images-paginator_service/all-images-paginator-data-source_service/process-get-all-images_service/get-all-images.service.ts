import { ImageRecordBatch } from '@interfaces/image-record-batch.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@db/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { AllImagesServicesModule }
	from '@app/routed-modules/all-images_module/all-images-services.module';
import { LoadConfiguration } from '@interfaces/load-configuration.interface';
import { GetImageRecords } from '@interfaces/get-image-records.interface';


@Injectable({providedIn: AllImagesServicesModule})
export class GetAllImagesService implements GetImageRecords {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realmFn: MongoDBRealmFunctionService
	) {}


	async go(load: LoadConfiguration): Promise<ImageRecordBatch | HasError> {

		return await this.__realmFn.call('pub_getUserImagesBatch', {
			sessionID: this.__sessionIDInBrowser.get(),
			batchSize: load.size,
			batchNumber: load.number
		});
	}

}
