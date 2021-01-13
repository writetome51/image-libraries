import { AppImage } from '@interfaces/app-image';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';


@Injectable({providedIn: 'root'})
export class NewImagesSaverService {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realm: MongoDBRealmService
	) {
	}


	async save(newImages: AppImage[]): Promise<{ success: true } | { error: { message: string } }> {
		return this.__realm.callFn('pub_addImages',
			{sessionID: this.__sessionIDInBrowser.get(), images: newImages}
		);
	}

}
