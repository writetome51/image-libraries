import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { MongoDBRealmService } from '@services/mongo-db-realm/mongo-db-realm.service';


@Injectable({providedIn: 'root'})
export class ImagesUpdaterService {

	constructor(
		private __realm: MongoDBRealmService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	update(
		// `changes` can contain any property from AppImage
		// The properties in 'changes' can contain dot-notation.
		images: { name: string, changes: object }[]

	): Promise<{ success: true } | { error: { message: string } }> {
		return this.__realm.callFn('pub_updateImages', {
			sessionID: this.__localSessionID.get(),
			images
		});
	}

}
