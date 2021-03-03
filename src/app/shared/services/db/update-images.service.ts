// import { AppImage } from '@interfaces/app-image.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@services/browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';
import { HasError } from '@interfaces/has-error.interface';


@Injectable({providedIn: 'root'})
export class UpdateImagesService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async go(
		// `changes` can contain any property from AppImage.
		// The properties in 'changes' can contain dot-notation.
		images: Array<{ name: string, changes: object }>

	): Promise<{ success: true } | HasError> {
		return await this.__realmFn.call('pub_updateImages', {
			sessionID: this.__sessionIDInBrowser.get(),
			images
		});
	}

}
