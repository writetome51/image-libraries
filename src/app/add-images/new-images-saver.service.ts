import { AppImage } from '@interfaces/app-image';
import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';


@Injectable({providedIn: 'root'})
export class NewImagesSaverService {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __realm: MongoDBRealmService
	) {
	}


	async save(newImages: AppImage[]): Promise<{ success: true } | { error: { message: string } }> {
		return this.__realm.callFn('pub_addImages',
			{sessionID: this.__localSessionID.get(), images: newImages}
		);
	}

}
