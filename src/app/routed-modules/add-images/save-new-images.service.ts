import { AddImagesServicesModule } from './add-images-services.module';
import { AppImage } from '@interfaces/app-image.interface';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@services/browser-storage/session-id-in-browser-storage.service';


@Injectable({providedIn: AddImagesServicesModule})
export class SaveNewImagesService implements IDoThis {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realmFn: MongoDBRealmFunctionService
	) {
	}


	async go(newImages: AppImage[]): Promise<{ success: true } | HasError> {
		return this.__realmFn.call('pub_addImages',
			{sessionID: this.__sessionIDInBrowser.get(), images: newImages}
		);
	}

}
