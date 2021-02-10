import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable()
export class DeleteSelectedImagesService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async go(): Promise<{ success: true } | HasError> {
		return this.__realmFn.call('pub_deleteImages', {
			sessionID: this.__sessionIDInBrowser.get(),
			imageNames: selectedImages.data.map((img: { name: string }) => img.name)
		});
	}

}
