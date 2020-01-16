import { DBLibrary } from '../../interfaces/db-library';
import { Injectable } from '@angular/core';
import { LibraryRestApiService } from './library-rest-api.service';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '../get-object-from-subscription.service';


@Injectable({providedIn: 'root'})

export class LibraryStorageService {


	constructor(
		private __libraryRestApi: LibraryRestApiService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async get(libraryName: string): Promise<DBLibrary | { error: object }> {
		return await getObjectFromSubscription.go(
			this.__libraryRestApi.get(
				{sessionID: this.__localSessionID.get(), name: libraryName}
			)
		);
	}


	async getLibraries(): Promise<DBLibrary[] | { error: object }> {
		return await getObjectFromSubscription.go(
			this.__libraryRestApi.getLibraries({sessionID: this.__localSessionID.get()})
		);
	}


	async update(
		// The properties in 'changes' can contain dot-notation
		currentLibrary: { name: string, changes: object }
	): Promise<DBLibrary | { error: object }> {

		return await getObjectFromSubscription.go(
			this.__libraryRestApi.update({

				sessionID: this.__localSessionID.get(),
				name: currentLibrary.name,
				changes: currentLibrary.changes

			})
		);
	}


}
