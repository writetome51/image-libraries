import { ImageBatch } from '@interfaces/image-batch.interface';
import { Injectable } from '@angular/core';
import { LoadData as load } from '@runtime-state-data/static-classes/auto-resettable.data';
import { MongoDBRealmFunctionService } from '@services/db-related/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@services/browser-storage-related/session-id-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { AllImagesServicesModule } from '@app/routed-modules/all-images/all-images-services.module';


@Injectable({providedIn: AllImagesServicesModule})
export class GetAllImagesService implements IDoThis {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realmFn: MongoDBRealmFunctionService
	) {
	}


	async go(): Promise<ImageBatch | HasError> {
		let batch = await this.__realmFn.call('pub_getUserImagesBatch', {
			sessionID: this.__sessionIDInBrowser.get(),
			batchSize: load.size,
			batchNumber: load.number
		});
		batch['from'] = 'all';
		return batch;
	}

}
