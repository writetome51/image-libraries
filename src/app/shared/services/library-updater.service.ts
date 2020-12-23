import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';


@Injectable({providedIn: 'root'})
export class LibraryUpdaterService {

	constructor(
		private __realm: MongoDBRealmService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async update(
		libName: string,
		changes: object // The keys in `changes` can contain dot-notation.
	): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__realm.callFn('updateAndReturnLibrary', {
			name: libName,
			changes,
			sessionID: this.__localSessionID.get()
		});
	}

}
