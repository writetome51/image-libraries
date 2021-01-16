import { AppImage } from '@interfaces/app-image/app-image';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';


@Injectable({providedIn: 'root'})
export class NewImagesSaverService {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realmFn: MongoDBRealmFunctionService
	) {
	}


	async save(newImages: AppImage[]): Promise<{ success: true } | { error: { message: string } }> {
		return this.__realmFn.call('pub_addImages',
			{sessionID: this.__sessionIDInBrowser.get(), images: newImages}
		);
	}

}
